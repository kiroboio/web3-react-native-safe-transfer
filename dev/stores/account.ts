import { values } from "mobx";
import {
  EthTransferResponseDto,
  EthTokenInfo,
  EthSwapInfo,
} from "../dto/EthTransfersDto";
import { generateMnemonic } from "bip39";

import { isPlatform } from "@ionic/react";

import { castToSnapshot, getSnapshot, Instance, types } from "mobx-state-tree";

import { sha3, toBN } from "web3-utils";

import Web3 from "web3";
import { Connectors } from "../hooks/useWeb3";

type MobxClearInstance<T> = Omit<Instance<T>, symbol>;

const getChainName = (chainId: number | undefined) => {
  if (chainId === 1) return "main";
  if (chainId === 4) return "rinkeby";
  return "";
};

export interface ITransferItem {
  id: string;
  from: string;
  to: string;
  value: string;
  fees: string;
  salt: string;
  secretHash: string;
  state: EthTransferResponseDto["state"];
  txid: string;
  updatedAt: Date;
  confirmedBlock: number;
  message: string;
  token?: EthTokenInfo;
  swap?: EthSwapInfo;
}

export type Currency =
  | "ETH"
  | "KIRO"
  | "USDT"
  | "BNB"
  | "UNI"
  | "LINK"
  | "SUSHI"
  | "USDC"
  | "WBTC"
  | "DAI";

const StatePrimitive = types.custom<
  EthTransferResponseDto["state"],
  EthTransferResponseDto["state"]
>({
  name: "state",
  fromSnapshot(value: EthTransferResponseDto["state"]) {
    return value;
  },
  toSnapshot(value: EthTransferResponseDto["state"]) {
    return value;
  },
  isTargetType(): boolean {
    return true;
  },
  getValidationMessage(): string {
    return "";
    // if (/^-?\d+\.\d+$/.test(value)) return "" // OK
    // return `'${value}' doesn't look like a valid state`
  },
});

export const Token = types.model({
  address: types.optional(types.string, ""),
  decimals: types.optional(types.number, 0),
  symbol: types.optional(types.string, ""),
  type: types.optional(types.string, ""),
});

export const Swap = types.model({
  value: types.optional(types.string, ""),
  token: types.optional(Token, {}),
  fees: types.optional(types.string, ""),
});

export interface ITransferToken extends MobxClearInstance<typeof Token> {}

export const Transfer = types
  .model({
    id: types.identifier,
    txid: types.string,
    from: types.string,
    to: types.string,
    value: types.string,
    fees: types.string,
    salt: types.string,
    secretHash: types.string,
    state: StatePrimitive,
    updatedAt: types.Date,
    confirmedBlock: types.number,
    message: types.string,
    token: types.optional(Token, {}),
    swap: types.optional(Swap, {}),
  })
  .actions((self) => ({
    update(state: EthTransferResponseDto["state"], txid?: string) {
      self.updatedAt = new Date();
      self.state = state;
      if (txid) self.txid = txid;
    },
  }));

export interface ITransfer extends MobxClearInstance<typeof Transfer> {}

export const CmdStatus = types
  .model({
    ready: types.optional(types.boolean, false),
    running: types.optional(types.boolean, false),
    done: types.optional(types.boolean, false),
    failed: types.optional(types.boolean, false),
    withFailMessage: types.optional(types.string, ""),
    withId: types.optional(types.number, 0),
  })
  .actions((self) => ({
    clear() {
      self.ready = false;
      self.running = false;
      self.done = false;
      self.failed = false;
      self.withFailMessage = "";
      self.withId = self.withId + 1;
    },
    prepared() {
      self.ready = true;
      self.running = false;
      self.done = false;
      self.failed = false;
      self.withFailMessage = "";
      self.withId = self.withId + 1;
    },
    started() {
      self.running = true;
      self.done = false;
      self.failed = false;
    },
    finished(err?: { err: { message: string } }) {
      self.ready = false;
      self.running = false;
      if (err) {
        self.failed = true;
        self.withFailMessage = err.err.message;
      } else {
        self.done = true;
        self.failed = false;
        self.withFailMessage = "";
      }
    },
  }));

export interface ICmdStatus extends MobxClearInstance<typeof CmdStatus> {}

const CmdModel = {
  is: types.optional(CmdStatus, {}),
};

const CmdActions = (self: { is: MobxClearInstance<typeof CmdStatus> }) => ({
  start() {
    self.is.started();
  },
  done() {
    self.is.finished();
  },
  failed({ message }: { message: string }) {
    self.is.finished({ err: { message } });
  },
  clearErrors() {
    self.is.failed = false;
    self.is.withFailMessage = "";
  },
  clear() {
    self.is.clear();
  },
});

export interface ICmdActions extends MobxClearInstance<typeof CmdActions> {}

const CmdBase = types.model("CMDBase", CmdModel).actions(CmdActions);

export interface ICmdBase extends MobxClearInstance<typeof CmdBase> {
  is: ICmdStatus;
}

export const ConnectCmd = CmdBase.named("ConnectCmd")
  .props({
    connector: types.optional(types.string, ""),
    isConnected: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    prepare(connector: Connectors | undefined) {
      if (!connector) {
        self.isConnected = false;
        self.connector = "";
        return;
      }
      if (!self.is.running) {
        self.isConnected = true;
        self.connector = connector;
        self.is.prepared();
      }
    },
  }));

export interface IConnectCmd extends MobxClearInstance<typeof ConnectCmd> {
  is: ICmdStatus;
}

export const DisconnectCmd = CmdBase.named("DisconnectCmd").actions((self) => ({
  prepare() {
    if (!self.is.running) {
      self.is.prepared();
    }
  },
}));

export interface IDisconnectCmd
  extends MobxClearInstance<typeof DisconnectCmd> {
  is: ICmdStatus;
}

export interface ISafeTransferItem {
  address: string;
  synced: boolean;
  feesFormula: string;
  rewardFormula: string;
}

export const SafeTransfer = types
  .model("SafeTransfer", {
    address: types.optional(types.string, ""),
    synced: types.optional(types.boolean, false),
    feesFormula: types.optional(types.string, ""),
    rewardFormula: types.optional(types.string, ""),
  })
  .volatile(() => ({
    fees: (_value: string) => "0",
    reward: (_value: string, _stakingValue: string, _fees: string) => "0",
  }))
  .actions((self) => ({
    setData(data: ISafeTransferItem) {
      if (self.feesFormula !== data.feesFormula && data.feesFormula) {
        try {
          const formula = JSON.parse(data.feesFormula);
          self.fees = (value: string) =>
            new Function(formula.arguments, formula.body)(
              Web3.utils.toBN,
              toBN,
              value
            );
          self.feesFormula = data.feesFormula;
        } catch (e) {
          console.log("zxc error", e);
        }
      }
      if (self.rewardFormula !== data.rewardFormula && data.rewardFormula) {
        try {
          const formula = JSON.parse(data.rewardFormula);
          self.reward = (value: string, stakingValue: string, fees: string) =>
            new Function(formula.arguments, formula.body)(
              Web3.utils.toBN,
              toBN,
              value,
              stakingValue,
              fees
            );
          self.rewardFormula = data.rewardFormula;
        } catch (e) {
          console.log("zxc error", e);
        }
      }
      self.synced = data.synced;
      self.address = data.address;
    },
  }));

export interface ISafeTransfer extends MobxClearInstance<typeof SafeTransfer> {}
export interface IStakingItem {
  address: string;
}

export const Staking = types
  .model("Staking", {
    address: types.optional(types.string, ""),
    balance: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setData({ address }: IStakingItem) {
      self.address = address;
    },
  }));

export interface IStaking extends MobxClearInstance<typeof Staking> {}
export interface IKiroTokenItem {
  address: string;
}

export const KiroToken = types
  .model("KiroToken", {
    address: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setData({ address }: IKiroTokenItem) {
      self.address = address;
    },
  }));

export interface IKiroToken extends MobxClearInstance<typeof KiroToken> {}

export interface IERC20TokenItem {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  rate?: number;
}

export const ERC20Token = types
  .model("ERC20Token", {
    address: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    symbol: types.optional(types.string, ""),
    decimals: types.optional(types.number, 18),
    balance: types.optional(types.string, ""),
    rate: types.optional(types.number, 0),
  })
  .views((self) => ({
    get tokenBalance() {
      return self.balance;
    },
  }))
  .actions((self) => ({
    setData({ address, name, symbol, decimals, balance }: IERC20TokenItem) {
      self.address = address;
      self.name = name;
      self.symbol = symbol;
      self.decimals = decimals;
      self.balance = balance;
    },
    setBalance(balance: string) {
      self.balance = balance;
    },
    clearBalance() {
      self.balance = "";
    },
    setRate(rate: number) {
      self.rate = rate;
    },
  }));

export const ERC20Tokens = types
  .model("ERC20Token", {
    map: types.map(ERC20Token),
  })
  .views((self) => ({
    get list() {
      return Array.from(self.map.values());
    },
  }))
  .actions((self) => ({
    addToken({
      address,
      name,
      symbol,
      decimals,
      balance,
      rate,
    }: IERC20TokenItem) {
      self.map.set(
        address,
        ERC20Token.create({ address, name, symbol, decimals, balance, rate })
      );
    },
    setBalance(address: string, balance: string) {
      self.map.get(address)?.setBalance(balance);
    },
    clearBalances() {
      self.map.forEach((erc20Token) => erc20Token.clearBalance());
    },
    setRate(address: string, rate: number) {
      self.map.get(address)?.setRate(rate);
    },
  }));

type MobxClearERC20Tokens = Omit<
  Instance<typeof ERC20Tokens>,
  symbol | "map" | "list"
>;

export interface IERC20Tokens extends MobxClearInstance<MobxClearERC20Tokens> {
  map: Map<string, IERC20TokenItem>;
  list: IERC20TokenItem[];
}

export interface DeviceInfoData {
  isMobile: boolean;
  haveMetaMask: boolean;
  ethereumProvider: boolean;
  loggedIn: boolean;
}

export const DeviceInfo = types
  .model("DeviceInfo", {
    isMobile: types.optional(types.boolean, isPlatform("mobile")),
    haveMetaMask: types.optional(types.boolean, false),
    ethereumProvider: types.optional(types.boolean, false),
    loggedIn: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setData({
      isMobile,
      haveMetaMask,
      ethereumProvider,
      loggedIn,
    }: DeviceInfoData) {
      self.isMobile = isMobile;
      self.haveMetaMask = haveMetaMask;
      self.ethereumProvider = ethereumProvider;
      self.loggedIn = loggedIn;
    },
  }));

export interface IDeviceInfo extends MobxClearInstance<typeof DeviceInfo> {}

const EthAddressPrimitive = types.custom<string, string>({
  name: "Eth Address",
  fromSnapshot(value: string) {
    return value;
  },
  toSnapshot(value: string) {
    return value.toString();
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isTargetType(value: any): boolean {
    return value instanceof String;
  },
  getValidationMessage(value: string): string {
    if (value === "" || /^0x[a-fA-F0-9]{40}$/.test(value)) return "";
    return `'${value}' doesn't look like a valid ethereum address`;
  },
});

export interface IEthAddressPrimitive extends MobxClearInstance<typeof EthAddressPrimitive> {}

export const ApprovedCmd = CmdBase.named('ApprovedCmd')
  .props({
    amount: types.optional(
      types.string,
      '115792089237316195423570985008687907853269984665640564039457584007913129639935'
    ),
    contractAddress: types.optional(types.string, ''),
  })
  .actions((self) => ({
    prepare(contractAddress: string) {
      if (!self.is.running) {
        self.contractAddress = contractAddress
        self.is.prepared()
      }
    },
  }))


export interface IApprovedCmd extends MobxClearInstance<typeof ApprovedCmd> {
  is: ICmdStatus;
}
export interface DepositCmdParams {
  from: string;
  to: string;
  value: string;
  publicSalt: string;
  privateSalt: string;
  secretHash: string;
  message: string;
}

export const DepositCmd = CmdBase.named("DepositCmd")
  .props({
    from: types.optional(types.string, ""),
    to: types.optional(types.string, ""),
    value: types.optional(types.string, ""),
    publicSalt: types.optional(types.string, ""),
    privateSalt: types.optional(types.string, ""),
    secretHash: types.optional(types.string, ""),
    message: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(params: DepositCmdParams) {
      if (!self.is.running) {
        self.from = params.from;
        self.to = params.to;
        self.value = params.value;
        self.message = params.message;
        self.privateSalt = params.privateSalt;
        self.publicSalt = params.publicSalt;
        self.secretHash = params.secretHash;
        self.is.prepared();
      }
    },
  }));

export interface IDepositCmd extends MobxClearInstance<typeof DepositCmd> {
  is: ICmdStatus;
}
export interface swapDepositCmdParams {
  from: string;
  to: string;
  value: string;
  desiredValue: string;
  publicSalt: string;
  privateSalt: string;
  secretHash: string;
  message: string;
}

export const swapDepositCmd = CmdBase.named("swapDepositCmd")
  .props({
    from: types.optional(types.string, ""),
    to: types.optional(types.string, ""),
    value: types.optional(types.string, ""),
    desiredValue: types.optional(types.string, ""),
    publicSalt: types.optional(types.string, ""),
    privateSalt: types.optional(types.string, ""),
    secretHash: types.optional(types.string, ""),
    message: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(params: swapDepositCmdParams) {
      if (!self.is.running) {
        self.from = params.from;
        self.to = params.to;
        self.value = params.value;
        self.desiredValue = params.desiredValue;
        self.message = params.message;
        self.privateSalt = params.privateSalt;
        self.publicSalt = params.publicSalt;
        self.secretHash = params.secretHash;
        self.is.prepared();
      }
    },
  }));

export interface ISwapDepositCmd
  extends MobxClearInstance<typeof swapDepositCmd> {
  is: ICmdStatus;
}
export interface FetchCmdParams {
  list: string;
  amount: number;
}

export const FetchCmd = CmdBase.named("FetchCmd")
  .props({
    list: types.optional(types.string, ""),
    amount: types.optional(types.number, 0),
  })
  .actions((self) => ({
    prepare(params: FetchCmdParams) {
      if (!self.is.running) {
        self.list = params.list;
        self.amount = params.amount;
        self.is.prepared();
      }
    },
  }));

export interface IFetchCmd extends MobxClearInstance<typeof FetchCmd> {
  is: ICmdStatus;
}
export interface RetrieveCmdParams {
  id: string;
}

export const RetrieveCmd = CmdBase.named('RetrieveCmd')
  .props({
    id: types.optional(types.string, ''),
  })
  .actions((self) => ({
    prepare(params: RetrieveCmdParams) {
      if (!self.is.running) {
        self.id = params.id
        self.is.prepared()
      }
    },
  }))



export interface IRetrieveCmd extends MobxClearInstance<typeof RetrieveCmd> {
  is: ICmdStatus;
}
export interface CollectCmdParams {
  id: string;
  key: string;
}

export const CollectCmd = CmdBase.named("CollectCmd")
  .props({
    id: types.optional(types.string, ""),
    key: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(params: CollectCmdParams) {
      if (!self.is.running) {
        self.id = params.id;
        self.key = params.key;
        self.is.prepared();
      }
    },
  }));

export interface ICollectCmd extends MobxClearInstance<typeof CollectCmd> {
  is: ICmdStatus;
}

export const Transfers = types
  .model('Transfers', {
    name: types.string,
    map: types.map(Transfer),
    count: types.optional(types.number, 0),
    fetched: types.optional(types.number, 0),
    address: types.optional(types.string, ''),
    fetchCmd: types.optional(FetchCmd, {}),
  })
  .views((self) => ({
    get list() {
      return Array.from(self.map.values())
    },
    get fetch() {
      return {
        get is() {
          return createCommand(self.fetchCmd.is)
        },
        run (amount: number) {
          self.fetchCmd.prepare({ list: self.name, amount })
        }
      }
    }
  }))
  .actions((self) => ({
    setFetched(count: number) {
      self.fetched = count
    },
    add({
      address,
      transfers,
      count,
    }: {
      address: string
      transfers: ITransferItem[]
      count: number
    }) {
      if (!self.address) {
        self.address = address
      } else if (self.address !== address) {
        return
      }
      for (const transfer of transfers) {
        self.map.put(Transfer.create(transfer))
      }
      
      /*
        const newTransfers = new Map()
        transfers.map(transfer => {
          newTransfers.set(transfer.id, Transfer.create(transfer))
        })
        self.map.merge(newTransfers)
      */

      self.count = count
    },
    upsert(address: string, transfer: ITransferItem) {
      if (!self.address) {
        self.address = address
      } else if (self.address !== address) return
      if (!self.map.has(transfer.id)) {
        self.count = self.count + 1
      }
      self.map.set(transfer.id, Transfer.create(transfer))
    },
    update(
      address: string,
      transfer: {
        id: string
        state: EthTransferResponseDto['state']
        txid?: string
      }
    ) {
      if (!self.address) {
        self.address = address
      } else if (self.address !== address) return
      self.map.get(transfer.id)?.update(transfer.state, transfer?.txid)
    },
    delete(address: string, id: string) {
      if (self.address === address) {
        if (self.map.delete(id)) {
          self.count = self.count - 1
        }
      }
    },
    remove(
      address: string,
      filter: (item: ITransferItem) => boolean
    ): ITransferItem[] {
      const res: ITransferItem[] = []
      if (self.address === address) {
        self.map.forEach((transfer) => {
          if (filter(transfer as ITransferItem)) {
            res.push(castToSnapshot(getSnapshot(transfer)))
            if (self.map.delete(transfer.id)) {
              self.count = self.count - 1
            }
          }
        })
      }
      return res
    },
    clear() {
      self.map.clear()
      self.fetched = 0
      self.count = 0
      // self.fetchId = self.fetchId + 1
      self.address = ''
      self.fetchCmd.clear()
    },
  }))
  .views((self) => ({
    get list() {
      return (
        values(self.map)
          .filter(() => true)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .sort((a: any, b: any) => {
            return a.updatedAt.getTime() < b.updatedAt.getTime()
              ? 1
              : a.updatedAt.getTime() === b.updatedAt.getTime()
              ? 0
              : -1
          })
      )
    },
    get activeCount() {
      let count = 0
      self.map.forEach((item) => {
        if (item.state === 'new') count += 1
      })
      return count
    },
  }))

const Mnemonic = types
  .model("Mnemonic", {
    data: types.optional(types.string, ""),
    clearCmd: types.optional(CmdBase.named("ClearCmd"), {}),
    removeCmd: types.optional(CmdBase.named("RemoveCmd"), {}),
    restoreCmd: types.optional(CmdBase.named("RestoreCmd"), {}),
  }) 
  .views((self) => ({
    get clear() {
      return {
        get is() {
          return createCommand(self.clearCmd.is)
        },
        run() {
          self.clearCmd.is.prepared()
        }
      }
    },
    get remove() {
      return {
        get is() {
          return createCommand(self.removeCmd.is)
        },
        run() {
          self.removeCmd.is.prepared()
        }
      }
    },
    get restore() {
      return {
        get is() {
          return createCommand(self.restoreCmd.is)
        },
        run() {
          self.restoreCmd.is.prepared()
        }
      }
    }
  }))
  .actions((self) => ({
    set(mnemonic?: string) {
      self.data = mnemonic ? mnemonic : "";
    },
    clear() {
      self.clearCmd.is.prepared();
    },
    remove() {
      self.removeCmd.is.prepared();
    },
    restore() {
      self.restoreCmd.is.prepared();
    },
  }));

export interface IMnemonic extends MobxClearInstance<typeof Mnemonic> {
  clearCmd: ICmdBase;
  removeCmd: ICmdBase;
  restoreCmd: ICmdBase;
}

const WalletAddressCmd = CmdBase.named("WalletAddressCmd")
  .props({
    address: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(address?: string) {
      if (self.is.running) return;
      self.address = address ? address : "";
      self.is.prepared();
    },
  }));

export interface IWalletAddressCmd
  extends MobxClearInstance<typeof WalletAddressCmd> {
  is: ICmdStatus;
}
const Wallet = types
  .model("Wallet", {
    mnemonic: types.optional(Mnemonic, {}),
    activeAccount: types.optional(types.string, ""),
    accounts: types.array(types.string),
    addAddressCmd: types.optional(WalletAddressCmd, {}),
    removeAddressCmd: types.optional(WalletAddressCmd, {}),
  })
  .views((self) => ({
    get removeAddress() {
      return {
        get is() {
          return createCommand(self.removeAddressCmd.is)
        },
        run(address: string) {
          self.removeAddressCmd.prepare(address)

        }
      }
    },
  }))
  .actions((self) => ({

    addWalletAddress() {
      self.addAddressCmd.prepare()
    },
    setAccounts(accounts: string[]) {
      accounts.forEach((account) => {
        self.accounts.push(account);
      });
    },
    setActiveAccount(activeAccount: string | undefined) {
      self.activeAccount = activeAccount || ''
    },
    generateMnemonic() {
      self.mnemonic.set(generateMnemonic())
    },
    setMnemonic(mnemonic?: string) {
      self.mnemonic.set(mnemonic)
    },
    getMnemonic() {
      return self.mnemonic.data
    },
    tryRestoreMnemonicFromStorage() {
      self.mnemonic.restore.run()
    },
    clearMnemonic() {
      self.mnemonic.clear.run()
    },
    removeMnemonic() {
      self.mnemonic.remove.run()
    },
    changeMnemonic(mnemonic: string) {
      self.mnemonic.set(mnemonic)
    },
  }))



type MobxClearWallet = Omit<Instance<typeof Wallet>, symbol | "accounts">;

export interface IWallet extends MobxClearWallet {
  accounts: string[];
  mnemonic: IMnemonic;
  addAddressCmd: IWalletAddressCmd;
  removeAddressCmd: IWalletAddressCmd;
}

export interface ERC20TokenItem {
  address: string
  name: string
  symbol: string
  decimals: number
  balance: string
  rate?: number
}

const createCommand = (is: Instance<typeof CmdStatus>) => ({
  get withFailMessage() {
    return is.withFailMessage
  },
  get withId() {
    return is.withId
  },
  get ready() {
    return is.ready
  },
  get done() {
    return is.done
  },
  get failed() {
    return is.failed
  },
  get running() {
    return is.running
  },
})

const createSecretHash = (passcode: string) => {
  const _publicSalt = new Uint16Array(10)
  const _privateSalt = new Uint16Array(10)
  window.crypto.getRandomValues(_publicSalt)
  window.crypto.getRandomValues(_privateSalt)
  const publicSalt = _publicSalt.join('')
  const privateSalt = _privateSalt.join('')
  const secretHash = sha3(sha3(privateSalt + sha3(publicSalt + passcode)) || "")
  return { privateSalt, publicSalt, secretHash }
}


export const Account = types
  .model("Account", {
    allowance: types.optional(types.string, "-1"),
    address: types.optional(EthAddressPrimitive, ""),
    wallet: types.optional(Wallet, {}),
    chainId: types.optional(types.number, -1),
    active: types.optional(types.boolean, false),
    block: types.optional(types.number, -1),
    balance: types.optional(types.string, ""),
    tokenBalance: types.optional(types.string, ""),
    stakingBalance: types.optional(types.string, ""),
    rate: types.optional(types.number, 0),
    history: types.optional(Transfers, { name: 'history' }),
    transfers: types.optional(Transfers, { name: "transfers" }),
    incoming: types.optional(Transfers, { name: "incoming" }),
    outgoing: types.optional(Transfers, { name: "outgoing" }),
    approvedCmd: types.optional(ApprovedCmd, {}),
    depositCmd: types.optional(DepositCmd, {}),
    retrieveCmd: types.optional(RetrieveCmd, {}),
    collectCmd: types.optional(CollectCmd, {}),
    connectCmd: types.optional(ConnectCmd, {}),
    disconnectCmd: types.optional(DisconnectCmd, {}),
    safeTransferMap: types.map(SafeTransfer),
    stakingMap: types.map(Staking),
    kiroTokenMap: types.map(KiroToken),
    ERC20TokensMap: types.map(ERC20Tokens),
    currency: types.optional(ERC20Token, {
      address: "0x000000000000",
      symbol: "ETH",
      decimals: 18,
      name: "Ethereum",
      balance: "",
    }),
    desiredCurrency: types.optional(ERC20Token, {
      address: '0xb1191f691a355b43542bea9b8847bc73e7abb137',
      symbol: 'KIRO',
      decimals: 18,
      name: 'Kirobo Token',
      balance: '',
    }),
    deviceInfo: types.optional(DeviceInfo, {}),
    left: types.optional(types.number, 10),
    factor: types.optional(types.number, 1),
    maxRewards: types.optional(types.number, 10),
    gasPriceMap: types.map(types.string),
    safeSwapMap: types.map(SafeTransfer),
    canGetRewards: types.optional(types.boolean, true),
    swapDepositCmd: types.optional(swapDepositCmd, {}),
    swapRetrieveCmd: types.optional(RetrieveCmd, {}),
    swapCmd: types.optional(CollectCmd, {}),
    swaps: types.optional(Transfers, { name: 'swaps' }),
    swapperAddress: types.optional(EthAddressPrimitive, ''),
    swapperBalance: types.optional(types.string, ''),
    formType: types.optional(types.string, 'swap'),
  })
  /**
   * views
   */
  .views((self) => ({
  get retrieve() {
    return {
      get is() {
        return createCommand(self.retrieveCmd.is)
      },
      run({ id }: { id: string }) {
        self.retrieveCmd.prepare({ id: id })
      },
      get data() {
        return {
          get id() {
            return self.retrieveCmd.id
          },
        }
      }
    }
  },
  get swapRetrieve() {
    return {
      get is() {
        return createCommand(self.swapRetrieveCmd.is)
      },
      run({ id }: { id: string }) {
        self.swapRetrieveCmd.prepare({ id: id })
      },
      get data() {
        return {
          get id() {
            return self.swapRetrieveCmd.id
          },
        }
      }
    }
  },
  get deposit() {
    return {
      get is() {
        return createCommand(self.depositCmd.is)
      },
      run({
        to,
        value,
        passcode,
        message = '',
      }: {
        to: string
        value: string
        passcode: string
        message?: string
      }) {
        const { secretHash, publicSalt, privateSalt } = createSecretHash(passcode)
        if (secretHash) {
          self.depositCmd.prepare({
            from: self.address,
            to,
            value,
            message,
            publicSalt,
            privateSalt,
            secretHash,
          })
        }
      },
      get data() {
        return {
          get from() {
            return self.depositCmd.from
          },
          get to() {
            return self.depositCmd.to
          },
          get value() {
            return self.depositCmd.value
          },
          get publicSalt() {
            return self.depositCmd.publicSalt
          },
          get privateSalt() {
            return self.depositCmd.privateSalt
          },
          get secretHash() {
            return self.depositCmd.secretHash
          },
          get message() {
            return self.depositCmd.message
          }
        }
      }
    }
  },
  get swapDeposit() {
    return {
      get is() {
        return createCommand(self.swapDepositCmd.is)
      },
      run({
        to,
        value,
        desiredValue,
        passcode,
        message = '',
      }: {
        to: string
        value: string
        desiredValue: string
        passcode: string
        message?: string
      }) {
        const { secretHash, publicSalt, privateSalt } = createSecretHash(passcode)
        if (secretHash) {
          self.swapDepositCmd.prepare({
            from: self.address,
            to,
            value,
            desiredValue,
            message,
            publicSalt,
            privateSalt,
            secretHash,
          })
        }
      },
      get data() {
        return {
          get from() {
            return self.swapDepositCmd.from
          },
          get to() {
            return self.swapDepositCmd.to
          },
          get value() {
            return self.swapDepositCmd.value
          },
          get desiredValue() {
            return self.swapDepositCmd.desiredValue
          },
          get publicSalt() {
            return self.swapDepositCmd.publicSalt
          },
          get privateSalt() {
            return self.swapDepositCmd.privateSalt
          },
          get secretHash() {
            return self.swapDepositCmd.secretHash
          },
          get message() {
            return self.swapDepositCmd.message
          }
        }
      }
    }
  },
  get collect() {
    return {
      get is() {
        return createCommand(self.collectCmd.is)
      },
      run({ id, passcode }: { id: string; passcode: string }) {
        const item = self.incoming.map.get(id)
        if (item && item.salt) {
          const key = sha3(item.salt + passcode) || ''
          self.collectCmd.prepare({ id, key })
        }
      },
      get data() {
        return {
          get id() {
            return self.collectCmd.id
          },
          get key() {
            return self.collectCmd.key
          }
        }
      }
    }
  },
  get swap() {
    return {
      get is() {
        return createCommand(self.swapCmd.is)
      },
      run({ id, passcode }: { id: string; passcode: string }) {
        const item = self.swaps.map.get(id)
        if (item && item.salt) {
          const key = sha3(item.salt + passcode) || ''
          self.swapCmd.prepare({ id, key })
        }
      },
      get data() {
        return {
          get id() {
            return self.swapCmd.id
          },
          get key() {
            return self.swapCmd.key
          }
        }
      }
    }
  },
  get approve() {
    return {
      get is() {
        return createCommand(self.approvedCmd.is)
      },
      run(contractAddress: string) {
        self.approvedCmd.prepare(contractAddress)
      },
      get data() {
        return {
          get contractAddress() {
            return self.approvedCmd.contractAddress
          }
        }
      }
    }
  },
  get connect() {
    return {
      get is() {
        return createCommand(self.connectCmd.is)
      },
      run(connector: Connectors) {
        self.connectCmd.prepare(connector)
      },
      get data() {
        return {
          get isConnected() {
            return self.connectCmd.isConnected
          },
          get connector() {
            return self.connectCmd.connector
          }
        }
      }
    }
  },
  get disconnect() {
    return {
      get is() {
        return createCommand(self.disconnectCmd.is)
      },
      run() {
        self.disconnectCmd.prepare()
      },
    }
  },
  get safeTransferContract() {
    return self.safeTransferMap.get(getChainName(self.chainId))
  },
  get safeSwapContract() {
    return self.safeSwapMap.get(getChainName(self.chainId))
  },
  get kiroTokenContract() {
    return self.kiroTokenMap.get(getChainName(self.chainId))
  },
  get ERC20TokensContract() {
    return (
      self.ERC20TokensMap.get(
        getChainName(self.chainId > 0 ? self.chainId : 1)
      )?.list || []
    )
  },
  get stakingContract() {
    return self.stakingMap.get(getChainName(self.chainId))
  },
  get gasPrice() {
    return (
      self.gasPriceMap.get(
        getChainName(self.chainId > 0 ? self.chainId : 1)
      ) || ''
    )
  },
  approvedToken(symbol: string, amount: string) {
    const { toBN } = Web3.utils
    const isApproved = !(
      symbol !== 'ETH' && toBN(self.allowance).cmp(toBN(amount)) === -1
    )
    // if (isApproved && self.approvedCmd.is.running) self.approvedCmd.done()
    return isApproved
  },
  transferFees(amount: string) {
    const contract =
      self.formType !== 'swap'
        ? self.safeTransferMap.get(
            getChainName(self.chainId > 0 ? self.chainId : 1)
          )
        : self.safeSwapMap.get(
            getChainName(self.chainId > 0 ? self.chainId : 1)
          )
    if (contract) return contract.fees(parseFloat(amount) > 0 ? amount : '0')
    return ''
  },
  transferReward(amount: string, fees: string) {
    const contract =
      self.formType !== 'swap'
        ? self.safeTransferMap.get(
            getChainName(self.chainId > 0 ? self.chainId : 1)
          )
        : self.safeSwapMap.get(
            getChainName(self.chainId > 0 ? self.chainId : 1)
          )
    if (contract) {
      if (self.left <= 0) return 0
      return (
        self.factor *
        +contract.reward(
          parseFloat(amount) ? amount : '0',
          self.stakingBalance || '0',
          parseFloat(fees) ? fees : '0'
        )
      )
    }
    return ''
  },
  ERC20TokenList(chainName: string) {
    const tokens = self.ERC20TokensMap.get(chainName)
    return tokens ? tokens.list : []
  },
}))
  /**
   * actions
   */
  .actions((self) => ({
    setCanGetRewards(canGetRewards: boolean) {
      self.canGetRewards = canGetRewards
    },
    setFormType(formType: string) {
      self.formType = formType
    },
    setAddress(address: string) {
      self.address = address
    },
    setActive(newActive: boolean) {
      self.active = newActive
    },
    setChainId(chainId: number) {
      self.chainId = chainId
    },
    setBalance(balance: string) {
      self.balance = balance
    },
    setTokenBalance(balance: string) {
      self.tokenBalance = balance
    },
    setStakingBalance(balance: string) {
      self.stakingBalance = balance
    },
    setBlock(block: number) {
      self.block = block
    },
    setRate(newRate: number) {
      self.rate = newRate
    },
    setCurrency(currency: ERC20TokenItem) {
      self.currency.setData(currency)
      const token = self.ERC20TokensContract.find((token) => token?.symbol === self.desiredCurrency?.symbol)
      if (token?.symbol === currency.symbol) {
        if(currency.symbol !== 'ETH') {
          const ethToken = self.ERC20TokensContract.find((token) => token?.symbol === 'ETH')
          if(ethToken) self.desiredCurrency.setData(ethToken)
        }
        else {
          const kiroToken = self.ERC20TokensContract.find((token) => token?.symbol === 'KIRO')
          if(kiroToken) self.desiredCurrency.setData(kiroToken)
        }
      }
    },
    setDesiredCurrency(currency: ERC20TokenItem) {
      self.desiredCurrency.setData(currency)
      const token = self.ERC20TokensContract.find((token) => token?.symbol === self.currency?.symbol)
      if (token?.symbol === currency.symbol) {
        if(currency.symbol !== 'ETH') {
          const ethToken = self.ERC20TokensContract.find((token) => token?.symbol === 'ETH')
          if(ethToken) self.currency.setData(ethToken)
        }
        else {
          const kiroToken = self.ERC20TokensContract.find((token) => token?.symbol === 'KIRO')
          if(kiroToken) self.currency.setData(kiroToken)
        }
      }
    },
    setCurrencyBalance(balance: string) {
      self.currency.setBalance(balance)
    },
    setAllowance(allowance: string) {
      self.allowance = allowance
    },
    setDeviceInfo(deviceInfo: DeviceInfoData) {
      self.deviceInfo.setData(deviceInfo)
    },
    setSafeTransferContract(chainName: string, data: ISafeTransferItem) {
      if (!chainName || !data) {
        return
      }
      if (!self.safeTransferMap.has(chainName)) {
        self.safeTransferMap.set(chainName, SafeTransfer.create())
      }
      const {
        address = '',
        feesFormula = '',
        rewardFormula = '',
        synced = false,
      } = data
      self.safeTransferMap
        .get(chainName)
        ?.setData({ address, feesFormula, rewardFormula, synced })
    },
    setSafeSwapContract(chainName: string, data: ISafeTransferItem) {
      if (!chainName || !data) return
      if (!self.safeSwapMap.has(chainName)) {
        self.safeSwapMap.set(chainName, SafeTransfer.create())
      }
      const {
        address = '',
        feesFormula = '',
        rewardFormula = '',
        synced = false,
      } = data
      self.safeSwapMap
        .get(chainName)
        ?.setData({ address, feesFormula, rewardFormula, synced })
    },
    setStakingContract(chainName: string, data: IStakingItem) {
      if (!chainName || !data) return
      if (!self.stakingMap.has(chainName)) {
        self.stakingMap.set(chainName, Staking.create())
      }
      const { address = '' } = data
      self.stakingMap.get(chainName)?.setData({ address })
    },
    setKiroTokenContract(chainName: string, data: IKiroTokenItem) {
      if (!chainName || !data) return
      if (!self.kiroTokenMap.has(chainName)) {
        self.kiroTokenMap.set(chainName, KiroToken.create())
      }
      const { address = '' } = data
      self.kiroTokenMap.get(chainName)?.setData({ address })
    },
    setERC20TokenContract(chainName: string, data: Array<ERC20TokenItem>) {
      if (!chainName || !data) return
      self.ERC20TokensMap.set(chainName, {})
      for (const { address, name, symbol, decimals, balance, rate } of data) {
        self.ERC20TokensMap.get(chainName)?.addToken({
          address,
          name,
          symbol,
          decimals,
          balance,
          rate,
        })
      }
    },
    setERC20TokenBalance(chainName: string, address: string, balance: string) {
      self.ERC20TokensMap.get(chainName)?.setBalance(address, balance)
    },
    setErc20TokenRate(chainName: string, address: string, rate: number) {
      self.ERC20TokensMap.get(chainName)?.setRate(address, rate)
    },
    clearERC20TokenBalances(chainName?: string) {
      chainName
        ? self.ERC20TokensMap.get(chainName)?.clearBalances()
        : self.ERC20TokensMap.forEach((token) => token.clearBalances())
    },
    setRewardsParams(factor: number, left: number) {
      self.factor = factor
      self.left = left
    },
    setMaxRewards(maxRewards: number) {
      self.maxRewards = maxRewards
    },
    setGasPrice(chainName: string, gasPrice: string) {
      self.gasPriceMap.set(chainName, gasPrice)
    },
    setSwapperAddress(address: string) {
      self.swapperAddress = address
    },
    setSwapperBalance(balance: string) {
      self.swapperBalance = balance
    },
  }));

export const accountStore = Account.create() as unknown as IAccount;

type MobxClearAccount = Omit<
  Instance<typeof Account>,
  | symbol
  | "currency"
  | "desiredCurrency"
  | "wallet"
  | "deviceInfo"
  | "ERC20TokensMap"
  | "safeTransferMap"
  | "kiroTokenMap"
  | "stakingMap"
  | keyof ICommands
  | keyof ILists
  | keyof IViews
>;

export interface ILists {
  transfers: ITransferItems;
  incoming: ITransferItems;
  outgoing: ITransferItems;
  swaps: ITransferItems;
  history: ITransferItems;
}

export interface ICommands {
  approvedCmd: IApprovedCmd;
  depositCmd: IDepositCmd;
  retrieveCmd: IRetrieveCmd;
  collectCmd: ICollectCmd;
  connectCmd: IConnectCmd;
  disconnectCmd: IDisconnectCmd;
  swapDepositCmd: ISwapDepositCmd;
  swapRetrieveCmd: IRetrieveCmd;
  swapCmd: ICollectCmd;
}

export interface IViews {
  safeTransferContract: ISafeTransfer | undefined;
  stakingContract: IStaking | undefined;
  kiroTokenContract: IKiroToken | undefined;
  ERC20TokensContract: IERC20TokenItem[];
  getERC20TokenList: (chainName: string) => IERC20TokenItem[];
  gasPriceMap: Map<string, string>;
}

export interface IAccount extends MobxClearAccount, ILists, ICommands, IViews {
  wallet: IWallet;
  currency: IERC20TokenItem;
  desiredCurrency: IERC20TokenItem;
  deviceInfo: IDeviceInfo;
  safeTransferMap: Map<string, ISafeTransfer>;
  stakingMap: Map<string, IStaking>;
  kiroTokenMap: Map<string, IKiroToken>;
  ERC20TokensMap: Map<string, IERC20TokenItem>;
}

type MobxClearTransferItems = Omit<
  Instance<typeof Transfers>,
  symbol | "list" | "fetchCmd" | "map"
>;
export interface ITransferItems extends MobxClearTransferItems {
  list: ITransfer[];
  fetchCmd: IFetchCmd;
  map: Map<string, ITransfer>;
}
/*
    Transfer
    API: v1/eth/networks ==> SafeTransfer Address, Fees & Reward formula
    Deposit:
      API: v1/eth/<network>/transfer/request  (from, to, value, publicSalt, privateSalt, secretHash, message) ==> fees + reward
      Contract: deposit(to, value, fees, secretHash) ==> transactionHash
      API: v1/eth/<network>/action/follow (txid)
    Retrieve:
      API: v1/eth/<network>/transfers (outgoing) ==> to, value, fees, secretHash
      Contract: retrieve(to, value, fees, secretHash)
    Collect:
      API: v1/eth/<network>/transfers (incoming) ==> id
      API: v1/eth/<network>/collect (id, key)
    secretHash = sha3(sha3(privateSalt + sha3(publicSalt + passcode))
*/
