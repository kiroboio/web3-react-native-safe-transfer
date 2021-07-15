import { useWeb3React } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
// import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
// import { LatticeConnector } from '@web3-react/lattice-connector'
import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
import { MewConnectConnector } from '@myetherwallet/mewconnect-connector'
import InAppWalletConnector from '../customConnectors/InAppWalletConnector'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import Web3 from 'web3'

const POLLING_INTERVAL = 12000

export enum Connectors {
  InAppWallet = 'InAppWallet',
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
  WalletLink = 'WalletLink',
  MyEtherWallet = 'MyEtherWallet',
  Frame = 'Frame',
}

export interface IConnectParams {
  readonly supportedChainIds?: number[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ConnectorType = Required<Web3ReactContextInterface>['connector'] & {
  addWalletAddress?: () => void
  removeWalletAddress?: (a: string) => void
  handleAccountChanged?: (a: string) => void
}

export interface IWeb3ReactContext {
  connect: (connectorName: Connectors, params?: IConnectParams) => Promise<void>
  disconnect: () => void
  connector?: ConnectorType
  library: Web3
  chainId?: number
  address?: null | string
  active: boolean
  error?: Error
  activate: (
    connector: AbstractConnector,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>
}

export const useWeb3 = (): IWeb3ReactContext => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React()

  const RPC_URLS: { [chainId: number]: string } = {
    1: `https://mainnet.infura.io/v3/${
      process.env.REACT_APP_INFURA_TOKEN as string
    }`,
    4: `https://rinkeby.infura.io/v3/${
      process.env.REACT_APP_INFURA_TOKEN as string
    }`,
  }

  const inAppWalletConnect = () =>
    new InAppWalletConnector({ urls: { 4: RPC_URLS[4] }, defaultChainId: 4 })

  const injected = (params: IConnectParams) =>
    new InjectedConnector({ ...params }) // supportedChainIds: [1, 4] })

  const walletConnect = (params: IConnectParams) =>
    new WalletConnectConnector({
      rpc: { 4: RPC_URLS[4], 1: RPC_URLS[1] },
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true,
      pollingInterval: POLLING_INTERVAL,
      ...params,
    })

  const walletLink = (params: IConnectParams) =>
    new WalletLinkConnector({
      url: RPC_URLS[1],
      appName: 'dapp.kirobo.me',
      ...params,
    })

  const myEtherWallet = (params: IConnectParams) =>
    new MewConnectConnector({
      url: RPC_URLS[1],
      ...params,
    })

  const frame = (params: IConnectParams) =>
    new FrameConnector({
      supportedChainIds: [4],
      ...params,
    })

  type IConnectors =
    | typeof inAppWalletConnect
    | typeof injected
    | typeof walletConnect
    | typeof walletLink
    | typeof myEtherWallet
    | typeof frame

  const connectorByName: { [connectorName in Connectors]: IConnectors } = {
    [Connectors.InAppWallet]: inAppWalletConnect,
    [Connectors.Injected]: injected,
    [Connectors.WalletConnect]: walletConnect,
    [Connectors.WalletLink]: walletLink,
    [Connectors.MyEtherWallet]: myEtherWallet,
    [Connectors.Frame]: frame,
  }

  interface ConnectorNode {
    connector: ConnectorType
  }

  const connectors: ConnectorNode[] = []

  const connect = async (
    connectorName: Connectors,
    params: IConnectParams = {}
  ) => {
    if (!connectors[0]) {
      connectors[0] = { connector: connectorByName[connectorName](params) }
      if (connectors[0].connector) {
        await activate(connectors[0].connector)
      }
    }
  }

  const disconnect = () => {
    deactivate()
    delete connectors[0]
  }

  return {
    connect,
    disconnect,
    address: account,
    active,
    chainId,
    error,
    connector,
    library,
    activate,
  }
}

// export interface IUseWeb3State extends ReturnType<typeof useWeb3> {}
// export type UseWeb3Hook = () => IUseWeb3State