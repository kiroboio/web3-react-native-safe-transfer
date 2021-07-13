import React, { useCallback, useEffect, useRef, useState } from 'react'
import Web3 from 'web3'
import { toBN } from 'web3-utils'
import { useAccount, useWeb3Provider } from '../context/account'
import { useWeb3 } from '../hooks/useWeb3'
import KiroboService from '@kiroboio/safe-transfer-lib-lite'
import { observer } from 'mobx-react-lite'
import { ERC20TokenItem, ITransferItem, ITransferItems } from '../stores/account'
import safeTransferABI from '../abi/safeTransfer.json'
import erc20ABI from '../abi/erc20.json'
import { EthTokenInfo, EthTransferResponseDto, EthTransferState } from '../dto/EthTransfersDto'
import { Connectors } from '../hooks/useWeb3'
import { EthErc20ResponseDto,  } from '../dto/EthErc20Dto'
import useWallet from '../hooks/useWallet'
import '@metamask/detect-provider'
import InAppWalletConnector from '../customConnectors/InAppWalletConnector'
import { UAParser } from 'ua-parser-js'


const MAX_CONFIRMS = 30

const SERVICE = {
  RATES: 'v1/eth/to/usd',
  TOKEN_RATES: 'v1/eth/erc20/rates',
  NETWORKS: 'v1/eth/networks',
  REWARDS(network: string) {
    return `v1/eth/${network}/rewards`
  },
  BALANCE(network: string) {
    return `v1/eth/${network}/balance`
  },
  TRANSFERS(network: string) {
    return `v1/eth/${network}/transfers`
  },
  TRANSFER_REQUEST(network: string) {
    return `v1/eth/${network}/transfer/request`
  },
  FOLLOW(network: string) {
    return `v1/eth/${network}/action/follow`
  },
  COLLECT(network: string) {
    return `v1/eth/${network}/action/collect`
  },
  ERC20(network: string) {
    return `v1/eth/${network}/erc20`
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const getChainName = (chainId: number | undefined) => {
  if (chainId === 1) return 'main'
  if (chainId === 4) return 'rinkeby'
  return ''
}

interface PutInStoreParams {
  store: ITransferItems
  address: string
  item: EthTransferResponseDto
}

interface MoveToStoreParams {
  store: ITransferItems
  address: string
  item: ITransferItem
}

interface AddToStoreParams {
  store: ITransferItems
  address: string
  items: EthTransferResponseDto[]
  count: number
}

const responseToTransferItem = (
  item: EthTransferResponseDto
): ITransferItem => {
  const confirmedBlock =
    item.state === 'new'
      ? item.deposit.confirmed
      : item.state === 'collected'
      ? item.collect.confirmed
      : item.state === 'retrieved'
      ? item.retrieve.confirmed
      : -1

  const txid = item.collect.txid || item.retrieve.txid || item.deposit.txid

  return {
    id: item.id,
    txid,
    from: item.from,
    to: item.to,
    value: item.value,
    fees: item.fees,
    salt: item.salt,
    secretHash: item.secretHash,
    state: item.state,
    updatedAt: new Date(item.updatedAt),
    confirmedBlock,
    message: item.message,
    token: item.token,
  }
}

const moveToStore = ({ store, address, item }: MoveToStoreParams) => {
  store.upsert(address, item)
}

const putInStore = ({ store, address, item }: PutInStoreParams) => {
  store.upsert(address, responseToTransferItem(item))
}

const addToStore = ({ store, address, items, count }: AddToStoreParams) => {
  store.add({
    address,
    count,
    transfers: items.map((item) => responseToTransferItem(item)),
  })
}

interface FetchQueryParams {
  address: string
  thresholdBlock: number
  $skip: number
  $limit: number
  watch: string
}

const inboxQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  type: 'incoming',
  state: {
    $in: [
      'new',
      'creating',
      'retrieved',
      'retrieving',
      'collected',
      'collecting',
    ],
  },
  $or: [
    { 'collect.confirmed': -1, 'retrieve.confirmed': -1 },
    { 'collect.confirmed': { $gt: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})

const outboxQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  type: 'outgoing',
  state: {
    $in: [
      'new',
      'creating',
      'retrieved',
      'retrieving',
      'collected',
      'collecting',
      'unknown',
    ],
  },
  $or: [
    { 'collect.confirmed': -1, 'retrieve.confirmed': -1 },
    { 'collect.confirmed': { $gt: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})

const historyQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  $or: [
    { 'collect.confirmed': { $gt: -1, $lte: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: -1, $lte: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})

interface DeleteFromStoreParams {
  store: ITransferItems
  address: string
  id: string
}

interface RemoveFromStoreParams {
  store: ITransferItems
  address: string
  filter: (item: ITransferItem) => boolean
}

const deleteFromStore = ({ store, address, id }: DeleteFromStoreParams) => {
  store.delete(address, id)
}

const removeFromStore = ({ store, address, filter }: RemoveFromStoreParams) => {
  return store.remove(address, filter)
}

export type ErrorType = { message?: string; reason: string }

export const Web3ProviderUpdater: React.FC = observer(({ children }) => {
  const {
    connect: web3Connect,
    connector: web3Connector,
    disconnect: web3Disconnect,
    library: web3,
    active: web3Active,
    chainId: web3ChainId,
    address: web3Address,
    activate: web3Activate,
  } = useWeb3()

  const {
    active,
    setActive,
    connectCmd,
    disconnectCmd,
    address,
    setAddress,
    chainId,
    setChainId,
    block,
    setBlock,
    setBalance,
    setGasPrice,
    setMaxRewards,
    setRewardsParams,
    setTokenBalance,
    setStakingBalance,
    setRate,
    approvedCmd,
    depositCmd,
    retrieveCmd,
    collectCmd,
    transfers,
    incoming,
    outgoing,
    safeTransferContract,
    setSafeTransferContract,
    setStakingContract,
    setKiroTokenContract,
    setERC20TokenContract,
    setERC20TokenBalance,
    setErc20TokenRate,
    clearERC20TokenBalances,
    ERC20TokenList,
    setCurrencyBalance,
    currency,
    setCurrency,
    setAllowance,
    setDeviceInfo,
    wallet,
    gasPriceMap,
  } = useAccount()

  const {
    setBalance: setWeb3Balance,
    setBlock: setWeb3Block,
  } = useWeb3Provider()

  const {
    getMnemonic,
    setNewMnemonic,
    generateNewMnemonic,
    getActiveAccountFromStorage,
    setActiveAccount,
  } = useWallet()

  const [status, setStatus] = useState<boolean>(false)
  const [heightMain, setHeightMain] = useState<number>(0)
  const [heightRinkeby, setHeightRinkeby] = useState<number>(0)

  const prevBlock = usePrevious(block)
  const prevAddress = usePrevious(address)
  const prevChainId = usePrevious(chainId)
  const prevStatus = usePrevious(status)

  const [erc20TokenContractWeb3, setErc20TokenContractWeb3] = useState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new new Web3().eth.Contract(erc20ABI as any)
  )
  const [safeTransferContractWeb3, setSafeTransferContractWeb3] = useState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new new Web3().eth.Contract(safeTransferABI as any)
  )

  interface FetchTransferParams {
    store: typeof transfers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any
  }

  interface FetchNextTransferParams {
    store: typeof transfers
    queryBuilder: (query: FetchQueryParams) => void
    thresholdBlock: number
    watch?: string
  }

  const fetchNextTransfers = useCallback(
    ({
      store,
      queryBuilder,
      thresholdBlock,
      watch = 'ignore',
    }: FetchNextTransferParams) => {
      const fetchTransfers = ({ store, query }: FetchTransferParams) => {
        const service = KiroboService.getInstance()
        if (!service) {
          store.fetchCmd.done()
          return
        }
        const network = getChainName(chainId)
        if (network && block) {
          service
            ?.getService(SERVICE.TRANSFERS(network))
            .find({ query })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((payload: any) => {
              store.fetchCmd.done()
              addToStore({
                store,
                address,
                items: payload.data,
                count: payload.total,
              })
              store.setFetched(payload.skip + payload.data.length)
            })
            .catch(() => {
              store.fetchCmd.done()
            })
        } else {
          store.fetchCmd.done()
        }
      }

      if (store.fetchCmd.is.ready && !store.fetchCmd.is.running) {
        store.fetchCmd.start()
        if (store.fetched === 0 || store.fetched < store.count) {
          fetchTransfers({
            store,
            query: queryBuilder({
              address,
              $limit: store.fetchCmd.amount,
              $skip: store.fetched,
              watch,
              thresholdBlock,
            }),
          })
        } else {
          store.fetchCmd.done()
        }
      }
    },
    [address, block, chainId]
  )

  const __block = useRef(block)
  const __transfers = useRef(transfers)
  const __incoming = useRef(incoming)
  const __outgoing = useRef(outgoing)
  const __fetchNextTransfers = useRef(fetchNextTransfers)
  const __prevAddress = useRef(prevAddress)
  const __prevChainId = useRef(prevChainId)
  const __prevBlock = useRef(prevBlock)
  const __prevStatus = useRef(prevStatus)
  const __setBalance = useRef(setBalance)
  const __setGasPrice = useRef(setGasPrice)
  const __setMaxRewards = useRef(setMaxRewards)
  const __setRewardsParams = useRef(setRewardsParams)
  const __setStakingBalance = useRef(setStakingBalance)
  const __setTokenBalance = useRef(setTokenBalance)
  const __setBlock = useRef(setBlock)
  const __active = useRef(active)
  const __address = useRef(address)
  const __chainId = useRef(chainId)
  const __connectCmd = useRef(connectCmd)
  const __disconnectCmd = useRef(disconnectCmd)
  const __depositCmd = useRef(depositCmd)
  const __approvedCmd = useRef(approvedCmd)
  const __collectCmd = useRef(collectCmd)
  const __retrieveCmd = useRef(retrieveCmd)
  const __erc20TokenContractWeb3 = useRef(erc20TokenContractWeb3)
  const __safeTransferContractWeb3 = useRef(safeTransferContractWeb3)
  const __web3 = useRef(web3)
  const __setRate = useRef(setRate)
  const __setSafeTransferContract = useRef(setSafeTransferContract)
  const __safeTransferContract = useRef(safeTransferContract)
  const __setStakingContract = useRef(setStakingContract)
  const __setDeviceInfo = useRef(setDeviceInfo)
  const __setKiroTokenContract = useRef(setKiroTokenContract)
  const __setERC20TokenContract = useRef(setERC20TokenContract)
  const __setERC20TokenBalance = useRef(setERC20TokenBalance)
  const __setErc20TokenRate = useRef(setErc20TokenRate)

  const __setCurrencyBalance = useRef(setCurrencyBalance)

  const __clearERC20TokenBalances = useRef(clearERC20TokenBalances)
  const __ERC20TokenList = useRef(ERC20TokenList)
  const __gasPriceMap = useRef(gasPriceMap)
  const __web3Connect = useRef(web3Connect)
  const __web3Connector = useRef(web3Connector)
  const __web3Disconnect = useRef(web3Disconnect)
  const __setActive = useRef(setActive)
  const __setAddress = useRef(setAddress)
  const __setChainId = useRef(setChainId)
  const __setWeb3Balance = useRef(setWeb3Balance)
  const __setWeb3Block = useRef(setWeb3Block)
  const __setNewMnemonic = useRef(setNewMnemonic)
  const __getMnemonic = useRef(getMnemonic)
  const __generateNewMnemonic = useRef(generateNewMnemonic)
  const __getActiveAccountFromStorage = useRef(getActiveAccountFromStorage)
  const __wallet = useRef(wallet)
  const __web3Activate = useRef(web3Activate)
  const __setActiveAccount = useRef(setActiveAccount)

  const __currency = useRef(currency)
  const __setCurrency = useRef(setCurrency)
  const __setAllowance = useRef(setAllowance)

  useEffect(() => {
    __block.current = block
    __transfers.current = transfers
    __incoming.current = incoming
    __outgoing.current = outgoing
    __fetchNextTransfers.current = fetchNextTransfers
    __prevAddress.current = prevAddress
    __prevChainId.current = prevChainId
    __prevBlock.current = prevBlock
    __prevStatus.current = prevStatus
    __setBalance.current = setBalance
    __setGasPrice.current = setGasPrice
    __setMaxRewards.current = setMaxRewards
    __setRewardsParams.current = setRewardsParams
    __setTokenBalance.current = setTokenBalance
    __setStakingBalance.current = setStakingBalance
    __setBlock.current = setBlock
    __active.current = active
    __address.current = address
    __chainId.current = chainId
    __connectCmd.current = connectCmd
    __disconnectCmd.current = disconnectCmd
    __approvedCmd.current = approvedCmd
    __depositCmd.current = depositCmd
    __collectCmd.current = collectCmd
    __retrieveCmd.current = retrieveCmd
    __erc20TokenContractWeb3.current = erc20TokenContractWeb3
    __safeTransferContractWeb3.current = safeTransferContractWeb3
    __web3.current = web3
    __setRate.current = setRate
    __setSafeTransferContract.current = setSafeTransferContract
    __safeTransferContract.current = safeTransferContract

    __setCurrency.current = setCurrency
    __setAllowance.current = setAllowance
    __setStakingContract.current = setStakingContract
    __setDeviceInfo.current = setDeviceInfo
    __setKiroTokenContract.current = setKiroTokenContract
    __setERC20TokenContract.current = setERC20TokenContract
    __setERC20TokenBalance.current = setERC20TokenBalance
    __setErc20TokenRate.current = setErc20TokenRate
    __setCurrencyBalance.current = setCurrencyBalance
    __currency.current = currency
    __clearERC20TokenBalances.current = clearERC20TokenBalances
    __ERC20TokenList.current = ERC20TokenList
    __gasPriceMap.current = gasPriceMap
    __web3Connect.current = web3Connect
    __web3Disconnect.current = web3Disconnect
    __web3Connector.current = web3Connector
    __web3Activate.current = web3Activate
    __setActive.current = setActive
    __setAddress.current = setAddress
    __setChainId.current = setChainId
    __setWeb3Balance.current = setWeb3Balance
    __setWeb3Block.current = setWeb3Block
    __setNewMnemonic.current = setNewMnemonic
    __generateNewMnemonic.current = generateNewMnemonic
    __getMnemonic.current = getMnemonic
    __wallet.current = wallet
    __setActiveAccount.current = setActiveAccount
  })
  useEffect(() => {
    const setNewMnemonic = __setNewMnemonic.current

    if (!wallet.mnemonic.data) return
    setNewMnemonic(wallet.mnemonic.data)
  }, [wallet.mnemonic.data])

  useEffect(() => {
    const web3Connector = __web3Connector.current
    const wallet = __wallet.current
    if (!wallet.addAddressCmd.is.ready || wallet.addAddressCmd.is.running)
      return

    try {
      wallet.addAddressCmd.start()
      if (!wallet.mnemonic.data) throw new Error('no mnemonic')
      if (!web3Connector) throw new Error('connector not started')

      if (!web3Connector?.addWalletAddress) throw new Error('wrong connector')
      web3Connector?.addWalletAddress()

      wallet.addAddressCmd.done()
    } catch (e) {
      const error = e as ErrorType
      wallet.addAddressCmd.failed({ message: error.message || error.reason })
    }
  }, [wallet.addAddressCmd.is.ready])

  useEffect(() => {
    const web3Connector = __web3Connector.current
    const wallet = __wallet.current
    if (!wallet.removeAddressCmd.is.ready || wallet.removeAddressCmd.is.running)
      return

    try {
      wallet.removeAddressCmd.start()
      if (!wallet.mnemonic.data) throw new Error('no mnemonic')
      if (!web3Connector) throw new Error('connector not started')

      if (!web3Connector?.removeWalletAddress)
        throw new Error('wrong connector')
      web3Connector?.removeWalletAddress(wallet.removeAddressCmd.address)

      wallet.removeAddressCmd.done()
    } catch (e) {
      const error = e as ErrorType
      wallet.removeAddressCmd.failed({ message: error.message || error.reason })
    }
  }, [wallet.removeAddressCmd.is.ready])

  useEffect(() => {
    const setNewMnemonic = __setNewMnemonic.current
    const wallet = __wallet.current
    const mnemonic = __getMnemonic.current()
    if (
      !wallet.mnemonic.restoreCmd.is.ready ||
      wallet.mnemonic.restoreCmd.is.running
    )
      return

    try {
      wallet.mnemonic.restoreCmd.start()

      if (!mnemonic) {
        throw new Error('no mnemonic')
      }
      wallet.mnemonic.set(mnemonic)
      setNewMnemonic(mnemonic)
      wallet.mnemonic.restoreCmd.done()
    } catch (e) {
      const error = e as ErrorType
      wallet.mnemonic.restoreCmd.failed({
        message: error.message || error.reason,
      })
    }
  }, [wallet.mnemonic.restoreCmd.is.ready])

  const web3WalletAddressesAmount = __web3.current?.eth.accounts.wallet
    ? Object.keys(__web3.current.eth.accounts.wallet)
    : null

  useEffect(() => {
    const wallet = __wallet.current
    const connectCmd = __connectCmd.current
    const web3 = __web3.current

    if (connectCmd.connector !== Connectors.InAppWallet) return
    if (!connectCmd.is.done || !wallet.mnemonic.data) return

    const accounts = new Set()
    Object.keys(web3.eth.accounts.wallet).forEach((key) => {
      if (!web3.eth.accounts.wallet[parseInt(key)]?.address) return
      accounts.add(web3.eth.accounts.wallet[parseInt(key)].address)
    })
    const uniqueAccountsArray = Array.from(accounts) as string[]

    if (!uniqueAccountsArray.includes(wallet.activeAccount)) {
      wallet.setActiveAccount(uniqueAccountsArray[0])
      InAppWalletConnector.setActiveAccount(uniqueAccountsArray[0])
    } else {
      wallet.setActiveAccount(wallet.activeAccount)
      InAppWalletConnector.setActiveAccount(wallet.activeAccount)
    }
    wallet.setAccounts(uniqueAccountsArray)
  }, [wallet.mnemonic.data, web3WalletAddressesAmount])

  useEffect(() => {
    const wallet = __wallet.current

    const activeAccount = __getActiveAccountFromStorage.current()
    if (!activeAccount) return
    wallet.setActiveAccount(activeAccount)
    InAppWalletConnector.setActiveAccount(activeAccount)
  }, [])

  useEffect(() => {
    const wallet = __wallet.current
    const web3Connector = __web3Connector.current
    const setActiveAccount = __setActiveAccount.current

    if (!web3Connector?.handleAccountChanged) return
    web3Connector.handleAccountChanged(wallet.activeAccount)
    setActiveAccount(wallet.activeAccount)
  }, [wallet.activeAccount])

  useEffect(() => {
    const web3 = __web3.current
    const chainId = __chainId.current
    const address = __address.current
    const safeTransferContract = __safeTransferContract.current
    const currency = __currency.current
    const setTokenBalance = __setTokenBalance.current

    if (currency.symbol !== 'ETH') {
      ;(async function checkAllowance() {
        try {
          const service = KiroboService.getInstance()
          const network = getChainName(chainId)
          setTokenBalance(currency.balance)

          await setErc20TokenContractWeb3(
            new web3.eth.Contract(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              erc20ABI as any,
              currency.address
            )
          )
          const erc20TokenContractWeb3 = __erc20TokenContractWeb3.current
          if (!service) throw new Error('service not started')
          if (!__active.current) throw new Error('web3 not connected')
          if (!network) throw new Error('chain is not supported')
          if (!erc20TokenContractWeb3)
            throw new Error('erc20Token contract not found')
          const allowance = await erc20TokenContractWeb3.methods
            .allowance(address, safeTransferContract?.address)
            .call()
          __setAllowance.current(allowance)
        } catch (e) {
          const error = e as ErrorType
          console.log(
            `check allowance failed: ${error.message || error.reason}`
          )
        }
      })()
    }
  }, [currency.symbol, currency.address, connectCmd.is.done])

  useEffect(() => {
    const web3 = __web3.current
    const active = __active.current
    const chainId = __chainId.current
    const address = __address.current
    const approvedCmd = __approvedCmd.current
    const erc20TokenContractWeb3 = __erc20TokenContractWeb3.current
    const currency = __currency.current
    const safeTransferContract = __safeTransferContract.current
    const gasPriceMap = __gasPriceMap.current
    if (
      approvedCmd.is.ready &&
      !approvedCmd.is.running &&
      currency.symbol !== 'ETH'
    ) {
      approvedCmd.start()
      ;(async function runApprovedCmd() {
        try {
          const service = KiroboService.getInstance()
          const network = getChainName(chainId)
          const { amount } = approvedCmd

          if (!service) throw new Error('service not started')
          if (!active) throw new Error('web3 not connected')
          if (!network) throw new Error('chain is not supported')
          if (!erc20TokenContractWeb3)
            throw new Error('erc20Token contract not found')

          const gasPrice = gasPriceMap.get(network)

          const gas = toBN(
            await erc20TokenContractWeb3.methods
              .approve(safeTransferContract?.address, web3.utils.toBN(amount))
              .estimateGas({ from: address })
          )
            .mul(toBN(11))
            .div(toBN(10))
            .toString()

          const approve = await erc20TokenContractWeb3.methods
            .approve(safeTransferContract?.address, web3.utils.toBN(amount))
            .send({ from: address, gasPrice, gas })
          if (approve) {
            const allowance = await erc20TokenContractWeb3.methods
              .allowance(address, safeTransferContract?.address)
              .call()
            __setAllowance.current(allowance)
          }
          approvedCmd.done()
        } catch (e) {
          const error = e as ErrorType
          approvedCmd.failed({ message: error.message || error.reason })
        }
      })()
    }
  }, [approvedCmd.is.ready])

  // on account.deposit command
 type SendPayloadType = { from: string; gasPrice?: string; gas: string, nonce?: number } ;

  useEffect(() => {
    const active = __active.current
    const address = __address.current
    const chainId = __chainId.current
    const depositCmd = __depositCmd.current
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current
    const gasPriceMap = __gasPriceMap.current;
    const connectCmd = __connectCmd.current;

    if (depositCmd.is.ready && !depositCmd.is.running) {
      depositCmd.start()
      ;(async function runDepositCmd() {
        try {
          const service = KiroboService.getInstance()
          const network = getChainName(chainId)
          const {
            from,
            to,
            value,
            publicSalt,
            privateSalt,
            secretHash,
            message,
          } = depositCmd

          if (!service) throw new Error('service not started')
          if (!active) throw new Error('web3 not connected')
          if (!network) throw new Error('chain is not supported')
          if (!safeTransferContractWeb3)
            throw new Error('safeTransfer contract not found')
          if (from !== address) throw new Error('from does not match address')

          interface ServiceRequestParams {
            from: string
            to: string
            value: string
            publicSalt: string
            privateSalt: string
            secretHash: string
            message: string
            token?: EthTokenInfo
          }
          const serviceRequestParams: ServiceRequestParams = {
            from,
            to,
            value,
            publicSalt,
            privateSalt,
            secretHash,
            message,
          }
          const currency = __currency.current
          if (currency.symbol !== 'ETH') {
            serviceRequestParams.token = {
              address: currency.address,
              decimals: currency.decimals,
              symbol: currency.symbol,
              type: 'ERC20',
            }
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const request: any = await service
            .getService(SERVICE.TRANSFER_REQUEST(network))
            .create(serviceRequestParams)

          const total = toBN(value).add(toBN(request.fees))
          const gasPrice = gasPriceMap.get(network)
          const gas = toBN(
            currency.symbol !== 'ETH'
              ? await safeTransferContractWeb3.methods
                  .depositERC20(
                    currency.address,
                    currency.symbol,
                    to,
                    value,
                    request.fees,
                    secretHash
                  )
                  .estimateGas({ from: address, value: request.fees })
              : await safeTransferContractWeb3.methods
                  .deposit(to, value, request.fees, secretHash)
                  .estimateGas({ from: address, value: total })
          )
            .mul(toBN(11))
            .div(toBN(10))
            .toString()

          const sendPayload: SendPayloadType = {
            from,
            gasPrice,
            gas,
          }

          if (connectCmd.connector !== Connectors.InAppWallet) {
            sendPayload.nonce = await __web3.current.eth.getTransactionCount(
              address,
              'pending'
            )
          }

          const txid =
            currency.symbol !== 'ETH'
              ? await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .depositERC20(
                      currency.address,
                      currency.symbol,
                      to,
                      value,
                      request.fees,
                      secretHash
                    )
                    .send({ ...sendPayload, value: request.fees })
                    .on('transactionHash', (hash: string) => resolve(hash))
                    .on('error', (err: ErrorType) => reject(err))
                })
              : await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .deposit(to, value, request.fees, secretHash)
                    .send({ ...sendPayload, value: total })
                    .on('transactionHash', (hash: string) => resolve(hash))
                    .on('error', (err: ErrorType) => reject(err))
                })

          const hex =
            currency.symbol !== 'ETH'
              ? safeTransferContractWeb3.methods
                  .depositERC20(
                    currency.address,
                    currency.symbol,
                    to,
                    value,
                    request.fees,
                    secretHash
                  )
                  .encodeABI()
              : safeTransferContractWeb3.methods
                  .deposit(to, value, request.fees, secretHash)
                  .encodeABI()

          await service.getService(SERVICE.FOLLOW(network)).create({
            txid,
            hex,
          })

          depositCmd.done()
          putInStore({
            store: __outgoing.current,
            address,
            item: {
              ...request,
              collect: { broadcasted: -1, confirmed: -1, txid: '' },
              deposit: { txid, broadcasted: -1, confirmed: -1 },
              expires: { at: request.expiresAt },
              state: 'creating',
              retrieve: { broadcasted: -1, confirmed: -1, txid: '' },
              message,
              txid,
              salt: request.publicSalt,
              updatedAt: request.createdAt,
              token:
                currency.symbol !== 'ETH'
                  ? {
                      address: currency.address,
                      decimals: currency.decimals,
                      symbol: currency.symbol,
                      type: 'ERC20',
                    }
                  : undefined,
            },
          })
        } catch (e) {
          console.error('fees: error', 4, e)
          const error = e as ErrorType
          depositCmd.failed({ message: error.message || error.reason })
        }
      })()
    }
  }, [depositCmd.is.ready])

  // on account.retrieve command
  useEffect(() => {
    const active = __active.current
    const address = __address.current
    const chainId = __chainId.current
    const outgoing = __outgoing.current
    const retrieveCmd = __retrieveCmd.current
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current
    const gasPriceMap = __gasPriceMap.current;
    const connectCmd = __connectCmd.current;

    if (retrieveCmd.is.ready && !retrieveCmd.is.running) {
      retrieveCmd.start()
      ;(async function runRetrieveCmd() {
        try {
          const service = KiroboService.getInstance()
          const network = getChainName(chainId)

          if (!service) throw new Error('service not started')
          if (!active) throw new Error('web3 not connected')
          if (!network) throw new Error('chain is not supported')
          if (!safeTransferContractWeb3)
            throw new Error('safeTransfer contract not found')

          const transfer = outgoing.map.get(retrieveCmd.id)
          if (!transfer) throw new Error('transfer not found')

          const { from, to, fees, value, secretHash, token } = transfer
          if (from !== address)
            throw new Error('from address does not match connected address')
          const gasPrice = gasPriceMap.get(network)
          const gas = toBN(
            token.symbol && token.symbol !== 'ETH'
              ? await safeTransferContractWeb3.methods
                  .retrieveERC20(
                    token.address,
                    token.symbol,
                    to,
                    value,
                    fees,
                    secretHash
                  )
                  .estimateGas({ from: address })
              : await safeTransferContractWeb3.methods
                  .retrieve(to, value, fees, secretHash)
                  .estimateGas({ from: address })
          )
            .mul(toBN(11))
            .div(toBN(10))
            .toString()

          const sendPayload:SendPayloadType = {
            from,
            gasPrice,
            gas,
          }

          if (connectCmd.connector !== Connectors.InAppWallet) {
            sendPayload.nonce = await __web3.current.eth.getTransactionCount(
              address,
              'pending'
            )
          }
          const txid =
            token.symbol && token.symbol !== 'ETH'
              ? await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .retrieveERC20(
                      token.address,
                      token.symbol,
                      to,
                      value,
                      fees,
                      secretHash
                    )
                    .send(sendPayload)
                    .on('transactionHash', (hash: string) => resolve(hash))
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .on('error', (err: any) => reject(err))
                })
              : await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .retrieve(to, value, fees, secretHash)
                    .send(sendPayload)
                    .on('transactionHash', (hash: string) => resolve(hash))
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .on('error', (err: any) => reject(err))
                })

          const hex =
            token.symbol && token.symbol !== 'ETH'
              ? safeTransferContractWeb3.methods
                  .retrieveERC20(
                    token.address,
                    token.symbol,
                    to,
                    value,
                    fees,
                    secretHash
                  )
                  .encodeABI()
              : safeTransferContractWeb3.methods
                  .retrieve(to, value, fees, secretHash)
                  .encodeABI()

          await service.getService(SERVICE.FOLLOW(network)).create({
            txid,
            hex,
          })

          const payload: { id: string, state: EthTransferState, txid?: string} = {
            id: transfer.id,
            state: 'retrieving',
          }
          if (txid) payload.txid = txid as string
          __outgoing.current.update(address, payload)
          retrieveCmd.done()
        } catch (e) {
          const error = e as ErrorType
          retrieveCmd.failed({ message: error.message || error.reason })
        }
      })()
    }
  }, [retrieveCmd.is.ready])

  // on account.collect command
  useEffect(() => {
    const active = __active.current
    const chainId = __chainId.current
    const collectCmd = __collectCmd.current
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current
    const address = __address.current

    if (collectCmd.is.ready && !collectCmd.is.running) {
      collectCmd.start()
      ;(async function runCollectCmd() {
        try {
          const service = KiroboService.getInstance()
          const network = getChainName(chainId)
          const { id, key } = collectCmd

          if (!service) throw new Error('service not started')
          if (!active) throw new Error('web3 not connected')
          if (!network) throw new Error('chain is not supported')
          if (!safeTransferContractWeb3)
            throw new Error('safeTransfer contract not found')

          await service.getService(SERVICE.COLLECT(network)).create({ id, key })
          __incoming.current.update(address, { id, state: 'collecting' })
          collectCmd.done()
        } catch (e) {
          const error = e as ErrorType
          collectCmd.failed({ message: error.message || error.reason })
        }
      })()
    }
  }, [collectCmd.is.ready])


  const getDeviceInfo = async () => {
    const parser = new UAParser()
    if (window.ethereum) handleEthereum()
    else {
      __setDeviceInfo.current({
        isMobile: parser.getResult().device.type === 'mobile',
        haveMetaMask: false,
        ethereumProvider: false,
        loggedIn: false,
      })
      window.addEventListener('ethereum#initialized', handleEthereum, {
        once: true,
      })
      setTimeout(handleEthereum, 3000)
    }

    async function handleEthereum() {
      const { ethereum } = window as unknown as { ethereum: { isMetaMask: boolean, request: (m: { method: string}) => Promise<string[]> }}
      let loggedIn = false
      if (ethereum && ethereum.isMetaMask) {
        try {
          loggedIn = !!(
            await (ethereum)?.request({ method: 'eth_accounts' })
          )?.length
        } catch {
          loggedIn = false
        }
      }
      __setDeviceInfo.current({
        isMobile: parser.getResult().device.type === 'mobile',
        haveMetaMask: !!(ethereum && ethereum.isMetaMask),
        ethereumProvider: !!ethereum,
        loggedIn,
      })
    }
  }

  // init
  useEffect(() => {
    const authDetails = {
      key: process.env.REACT_APP_AUTH_KEY ?? '',
      secret: process.env.REACT_APP_AUTH_SECRET ?? '',
    }
    getDeviceInfo()
    KiroboService.createInstance(
      {
        key: authDetails.key,
        secret: authDetails.secret,
      },
      (message: string) => {
        if (message === 'authorized') {
          setStatus(true)
        }
        if (message === 'disconnected') {
          setStatus(false)
        }
      }
    )
    return () => {
      KiroboService.createInstance({ key: '', secret: '' })
    }
  }, [])

  // on api server authorized event
  useEffect(() => {
    const service = KiroboService.getInstance()
    if (status && service) {
      const networkService = service.getService(SERVICE.NETWORKS)
      const ratesService = service.getService(SERVICE.RATES)
      const tokenRatesService = service.getService(SERVICE.TOKEN_RATES)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const setNetworkDetails = (network: any) => {
        __setGasPrice.current(network.netId, network.gasPrice)
        if (network.netId === 'main') setHeightMain(network.height)
        else if (network.netId === 'rinkeby') setHeightRinkeby(network.height)
      }

      networkService
        .find({ query: { watch: 'replace' } })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then(async (networks: any) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          tokenRatesService.on('patched', (rates: any) => {
            for (const network of networks.data) {
              const token = __ERC20TokenList
                .current(network.netId)
                .find((token) => token.symbol === rates.symbol)
              __setErc20TokenRate.current(
                network.netId,
                token?.address as string,
                rates.usd
              )
            }
          })

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ratesService.on('updated', (rates: any) => {
            for (const network of networks.data) {
              const token = __ERC20TokenList
                .current(network.netId)
                .find((token) => token.symbol === rates.symbol)
              __setErc20TokenRate.current(
                network.netId,
                token?.address as string,
                rates.value
              )
            }
            __setRate.current(rates.value)
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { data: tokensRates }: any = await tokenRatesService.find({
            query: { watch: 'replace' },
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const resRateService: any = await ratesService.find({
            query: { source: 'coingecko.com', watch: 'replace' },
          })

          for (const network of networks.data) {
            setNetworkDetails(network)
            if (network?.contracts?.safeTransfer) {
              __setSafeTransferContract.current(
                network.netId,
                network.contracts.safeTransfer
              )
            }
            if (network?.contracts?.staking) {
              __setStakingContract.current(
                network.netId,
                network.contracts.staking
              )
            }
            if (network?.contracts?.kiroToken) {
              __setKiroTokenContract.current(
                network.netId,
                network.contracts.kiroToken
              )
            }

            const erc20Service = service.getService(
              SERVICE.ERC20(network.netId)
            )
            let rate = 0
            if (resRateService.data.length === 1) {
              rate = resRateService.data[0].value as number
              __setRate.current(rate)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const tokens = (((await erc20Service.find({})) as any)
              .data as EthErc20ResponseDto[]).map<ERC20TokenItem>((token) => ({
              address: token.address,
              symbol: token.symbol,
              decimals: token.decimals,
              name: token.name,
              balance: '',
              rate: tokensRates.find(
                ({ symbol }: { symbol: string }) => symbol === token.symbol
              )?.usd,
            }))
            const eth: ERC20TokenItem = {
              address: '0x000000000000',
              symbol: 'ETH',
              decimals: 18,
              name: 'Ethereum',
              balance: '',
              rate,
            }
            tokens.unshift(eth)
            __setERC20TokenContract.current(network.netId, tokens)
          }
        })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      networkService.on('patched', (network: any) => {
        setNetworkDetails(network)
        if (network?.contracts?.safeTransfer) {
          __setSafeTransferContract.current(
            network.netId,
            network.contracts.safeTransfer
          )
        }
      })
    }
  }, [status])

  useEffect(() => {
    const web3 = __web3.current
    const chainId = __chainId.current
    if (!web3) return
    const setSafeTransferAsync = async () => {
      const gasPrice = await web3.eth.getGasPrice()
      if (web3 && chainId && safeTransferContract) {
        setSafeTransferContractWeb3(
          new web3.eth.Contract(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            safeTransferABI as any,
            safeTransferContract.address,
            { gasPrice, gas: 60000 }
          )
        )
      }
    }
    setSafeTransferAsync()
  }, [safeTransferContract, connectCmd.is.done])

  // on web3 connect command
  useEffect(() => {
    const web3Connect = __web3Connect.current
    const connectCmd = __connectCmd.current
    if (connectCmd.is.ready && !connectCmd.is.running) {
      connectCmd.start()
      web3Connect(connectCmd.connector as Connectors)
        .then(() => {
          connectCmd.done()
        })
        .catch((e) => {
          connectCmd.failed({ message: e ? JSON.stringify(e) : 'failed' })
        })
    }
  }, [connectCmd.is.ready])

  // on web3 disconnect command
  useEffect(() => {
    const web3Disconnect = __web3Disconnect.current
    const disconnectCmd = __disconnectCmd.current
    const connectCmd = __connectCmd.current
    if (disconnectCmd.is.ready && !disconnectCmd.is.running) {
      disconnectCmd.start()
      web3Disconnect()
      disconnectCmd.done()
      connectCmd.prepare(undefined)
    }
  }, [disconnectCmd.is.ready])

  useEffect(() => {
    const setBlock = __setBlock.current
    setBlock(0)
  }, [web3ChainId])

  useEffect(() => {
    const transfers = __transfers.current
    const incoming = __incoming.current
    const outgoing = __outgoing.current
    const setActive = __setActive.current
    const setAddress = __setAddress.current
    const setChainId = __setChainId.current
    const setBalance = __setBalance.current
    const setTokenBalance = __setTokenBalance.current
    const setStakingBalance = __setStakingBalance.current
    const clearERC20TokenBalances = __clearERC20TokenBalances.current
    setActive(web3Active)
    setAddress(web3Address || '')
    setChainId(web3ChainId || -1)
    setBalance('')
    setTokenBalance('')
    setStakingBalance('')
    clearERC20TokenBalances()
    transfers.clear()
    outgoing.clear()
    incoming.clear()

    /*;(async () => {
      if (web3Address) {
        const balance = await web3.eth.getBalance(web3Address)
        const blockNumber = await web3.eth.getBlockNumber()
        __setWeb3Balance.current(balance)
        __setWeb3Block.current(blockNumber)
      } else {
        __setWeb3Balance.current('')
        __setWeb3Block.current(0)
      }
    })()

    if (web3 && web3Address) {
      web3.eth
        .subscribe('newBlockHeaders')
        .on('connected', async () => {
          const blockNumber = await web3.eth.getBlockNumber()
          const balance = await web3.eth.getBalance(web3Address)
          __setWeb3Block.current(blockNumber)
          __setWeb3Balance.current(balance)
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .on('error', (error: any) => {
          __setWeb3Block.current(0)
          __setWeb3Balance.current('')
        }) 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .on('data', async (block: any) => {
          const balance = await web3.eth.getBalance(web3Address)
          __setWeb3Block.current(block.number)
          __setWeb3Balance.current(balance)
        })
    }
    return () => {
      web3?.eth.clearSubscriptions(console.log)
    }*/
  }, [web3Address, web3ChainId, web3Active])

  useEffect(() => {
    const setBlock = __setBlock.current
    if (chainId === 1) {
      setBlock(heightMain)
    } else if (chainId === 4) {
      setBlock(heightRinkeby)
    } else {
      setBlock(0)
    }
  }, [status, chainId, heightMain, heightRinkeby])

  useEffect(() => {
    const service = KiroboService.getInstance()
    if (address && status) {
      const network = getChainName(chainId)
      if (network) {
        service
          ?.getService(SERVICE.BALANCE(network))
          .find({
            query: {
              address,
              erc20: __ERC20TokenList
                .current(network)
                ?.filter((item) => item.address !== '0x000000000000')
                ?.map((item) => item.address)
                .join(';'),
            },
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then((response: any) => {
            const balance = response.data[0]
            __setBalance.current(balance?.balance || '')
            __setStakingBalance.current(balance?.stakingBalance || '')
            __setERC20TokenBalance.current(
              network,
              '0x000000000000',
              balance?.balance || ''
            )
            __setMaxRewards.current(balance?.maxRewards || 10)
            if (__currency.current.symbol === 'ETH') {
              __setTokenBalance.current(balance?.kiroBalance || '')
            }
            if (
              __currency.current.balance === '' &&
              __currency.current.symbol === 'ETH'
            ) {
              __setCurrencyBalance.current(balance?.balance || '')
            }
            for (const entry of Object.entries<string>(balance?.erc20 || {})) {
              __setERC20TokenBalance.current(network, entry[0], entry[1])
              if (__currency.current.address === entry[0])
                __setTokenBalance.current(entry[1])
            }
          })
          .catch((reason: JSON) => console.warn(`error: ${JSON.stringify(reason)}`))

        if (
          __currency.current.symbol !== 'ETH' &&
          __safeTransferContract.current?.address
        ) {
          __erc20TokenContractWeb3.current.methods
            .allowance(address, __safeTransferContract.current?.address)
            .call()
            .then((allowance: string) => __setAllowance.current(allowance))
        }

        service
          ?.getService(SERVICE.REWARDS(network))
          .find({
            query: { address },
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then((response: any) => {
            const rewardParams = response.data[0]
            if (rewardParams && rewardParams.address === address) {
              __setRewardsParams.current(rewardParams.factor, rewardParams.left)
            } else __setRewardsParams.current(1, 10)
          })
          .catch((reason: JSON) => {
            console.warn(`error: ${JSON.stringify(reason)}`)
          })
      } else {
        __setBalance.current('')
        __setTokenBalance.current('')
        __setAllowance.current('')
        __setStakingBalance.current('')
        __setRewardsParams.current(1, 10)
        __setMaxRewards.current(10)
        __clearERC20TokenBalances.current()
      }
    } else {
      __setBalance.current('')
      __setTokenBalance.current('')
      __setAllowance.current('')
      __setStakingBalance.current('')
      __setRewardsParams.current(1, 10)
      __setMaxRewards.current(10)
      __clearERC20TokenBalances.current()
    }
  }, [status, chainId, address, heightMain, heightRinkeby])

  useEffect(() => {
    const transfers = __transfers.current
    const incoming = __incoming.current
    const outgoing = __outgoing.current
    const prevAddress = __prevAddress.current
    const prevChainId = __prevChainId.current
    const prevBlock = __prevBlock.current
    const prevStatus = __prevStatus.current
    const setCurrency = __setCurrency.current
    if (!block) {
      transfers.clear()
      incoming.clear()
      outgoing.clear()
    }

    if (status && address && block) {
      const historyItems: ITransferItem[] = [
        ...removeFromStore({
          address,
          store: incoming,
          filter: (item) =>
            item.confirmedBlock > 0 &&
            item.confirmedBlock <= block - MAX_CONFIRMS &&
            (item.state === 'collected' || item.state === 'retrieved'),
        }),
        ...removeFromStore({
          address,
          store: outgoing,
          filter: (item) =>
            item.confirmedBlock > 0 &&
            item.confirmedBlock <= block - MAX_CONFIRMS &&
            (item.state === 'collected' || item.state === 'retrieved'),
        }),
      ]
      for (const historyItem of historyItems) {
        moveToStore({ store: transfers, address, item: historyItem })
      }
    }
    if (status && address && prevChainId !== chainId) {
      setCurrency({
        address: '0x000000000000',
        symbol: 'ETH',
        decimals: 18,
        name: 'Ethereum',
        balance: '',
      })
    }

    if (
      status &&
      address &&
      block &&
      (!prevBlock ||
        address !== prevAddress ||
        prevChainId !== chainId ||
        !prevStatus)
    ) {
      transfers.clear()
      incoming.clear()
      outgoing.clear()
      const network = getChainName(chainId)
      const service = KiroboService.getInstance()
      if (network && service) {
        transfers.fetch(40)
        incoming.fetch(40)
        outgoing.fetch(40)

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners('created')
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners('patched')
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners('updated')
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners('removed')

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on('created', (item: EthTransferResponseDto) => {
            if (item.from === address) {
              putInStore({ store: __outgoing.current, address, item })
            } else if (item.to === address) {
              putInStore({ store: __incoming.current, address, item })
            }
          })
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on('patched', (item: EthTransferResponseDto) => {
            if (
              (item.collect.confirmed > 0 &&
                item.collect.confirmed <= block - MAX_CONFIRMS) ||
              (item.retrieve.confirmed > 0 &&
                item.retrieve.confirmed <= block - MAX_CONFIRMS)
            ) {
              putInStore({ store: __transfers.current, address, item })
            }
            if (item.from === address) {
              if (
                (item.collect.confirmed > 0 &&
                  item.collect.confirmed <= block - MAX_CONFIRMS) ||
                (item.retrieve.confirmed > 0 &&
                  item.retrieve.confirmed <= block - MAX_CONFIRMS)
              ) {
                deleteFromStore({
                  store: __outgoing.current,
                  address,
                  id: item.id,
                })
              } else {
                putInStore({ store: __outgoing.current, address, item })
              }
            } else if (item.to === address) {
              if (
                (item.collect.confirmed > 0 &&
                  item.collect.confirmed <= block - MAX_CONFIRMS) ||
                (item.retrieve.confirmed > 0 &&
                  item.retrieve.confirmed <= block - MAX_CONFIRMS)
              ) {
                deleteFromStore({
                  store: __incoming.current,
                  address,
                  id: item.id,
                })
              } else {
                putInStore({ store: __incoming.current, address, item })
              }
            }
          })

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on('removed', (item: EthTransferResponseDto) => {
            deleteFromStore({
              store: __transfers.current,
              address,
              id: item.id,
            })
            deleteFromStore({ store: __outgoing.current, address, id: item.id })
            deleteFromStore({ store: __incoming.current, address, id: item.id })
          })
      }
    }
  }, [status, address, chainId, block])

  // on transfers.fetch done
  useEffect(() => {
    const _transfers = __transfers.current

    if (transfers.fetched > 0 && transfers.fetched < 60) {
      _transfers.fetch(40)
    }
  }, [transfers.fetched])

  // on incoming.fetch done
  useEffect(() => {
    const _incoming = __incoming.current

    if (incoming.fetched > 0) {
      _incoming.fetch(40)
    }
  }, [incoming.fetched])

  // on outgoing.fetch done
  useEffect(() => {
    const _outgoing = __outgoing.current

    if (outgoing.fetched > 0) {
      _outgoing.fetch(40)
    }
  }, [outgoing.fetched])

  // on transfers.fetch command
  useEffect(() => {
    const transfers = __transfers.current
    const block = __block.current
    const fetchNextTransfers = __fetchNextTransfers.current

    const watch = transfers.count > 0 ? 'ignore' : 'replace'

    fetchNextTransfers({
      store: transfers,
      queryBuilder: historyQuery,
      thresholdBlock: block - MAX_CONFIRMS,
      watch,
    })
  }, [transfers.fetchCmd.is.ready])

  // on incoming.fetch command
  useEffect(() => {
    const incoming = __incoming.current
    const block = __block.current
    const fetchNextTransfers = __fetchNextTransfers.current

    fetchNextTransfers({
      store: incoming,
      queryBuilder: inboxQuery,
      thresholdBlock: block - MAX_CONFIRMS,
    })
  }, [incoming.fetchCmd.is.ready])

  // on outgoing.fetch command
  useEffect(() => {
    const outgoing = __outgoing.current
    const block = __block.current
    const fetchNextTransfers = __fetchNextTransfers.current

    fetchNextTransfers({
      store: outgoing,
      queryBuilder: outboxQuery,
      thresholdBlock: block - MAX_CONFIRMS,
    })
  }, [outgoing.fetchCmd.is.ready])

  return <>{children}</>
})
