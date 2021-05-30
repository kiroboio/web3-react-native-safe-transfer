import { values } from "mobx";
import { EthTransferResponseDto, EthTokenInfo } from "../dto/EthTransfersDto";
import {
  IAnyType,
  SnapshotIn,
  SnapshotOut,
  applySnapshot,
} from "mobx-state-tree";
import { generateMnemonic } from "bip39";
import { v4 as generateId } from "uuid";
import { timestampWithTimeoutInSecondsToTimeLeftInSeconds } from "../utils/time";
import {
  castToSnapshot,
  getSnapshot,
  Instance,
  onSnapshot,
  types,
} from "mobx-state-tree";
import { sha3, toBN } from "web3-utils";
import Web3 from "web3";
import { Connectors } from "../hooks/useWeb3";
import { isValidAddress } from "../utils/address";
import {
  LogoChainlink,
  LogoBNB,
  LogoUSDT,
  IconLogoOnly,
  LogoUNI,
  LogoSUSHI,
} from "../assets";

const getChainName = (chainId: ChainIds) => {
  if (chainId === "1") return "main";
  if (chainId === "4") return "rinkeby";
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
}

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

export const Transfer = types.model({
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
});

export interface SendCmdParams {
  to: string;
  value: string;
}

export type Callback = (err?: { err: { message: string } }) => void;

export const CmdPersistanceStatus = types
  .model({
    ready: types.optional(types.boolean, false),
    running: types.optional(types.boolean, false),
    done: types.optional(types.boolean, false),
    failed: types.optional(types.boolean, false),
    withFailMessage: types.optional(types.string, ""),
    withId: types.optional(types.number, 0),
  })
  .actions((self) => {
    const clear = () => {
      self.ready = false;
      self.running = false;
      self.done = false;
      self.failed = false;
      self.withFailMessage = "";
      self.withId = self.withId + 1;
    };
    const prepared = () => {
      self.ready = true;
      self.running = false;
      self.done = false;
      self.failed = false;
      self.withFailMessage = "";
      self.withId = self.withId + 1;
    };
    const started = () => {
      self.running = true;
      self.done = false;
      self.failed = false;
    };
    const finished = (err?: { err: { message: string } }) => {
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
    };
    return { clear, prepared, started, finished };
  });

export const CmdStatus = CmdPersistanceStatus.named("CmdStatus").actions(
  (self) => {
    let initialState = {};
    const afterCreate = () => {
      initialState = getSnapshot(self);
    };
    const resetSelf = () => applySnapshot(self, initialState);
    onAddressChangeActions.push(resetSelf);

    return { afterCreate, ...CmdPersistanceStatus.actions };
  }
);

const CmdModel = {
  is: types.optional(CmdStatus, {}),
};

const CmdPersistentModel = {
  is: types.optional(CmdPersistanceStatus, {}),
};

const CmdActions = (self: { is: Instance<typeof CmdPersistanceStatus> }) => ({
  prepare() {
    self.is.prepared();
  },
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

const CmdBase = types.model("CMDBase", CmdModel).actions(CmdActions);
const CmdPersistentBase = types
  .model("CmdPersistentBase", CmdPersistentModel)
  .actions(CmdActions);

export const SendCmd = CmdBase.named("SendCmd")
  .props({
    to: types.optional(types.string, ""),
    value: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(params: SendCmdParams) {
      if (!self.is.running) {
        self.to = params.to;
        self.value = params.value;
        self.is.prepared();
      }
    },
  }));

export const ConnectCmd = CmdPersistentBase.named("ConnectCmd")
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
    clearCmd() {
      self.isConnected = false;
      self.connector = "";
      self.clear();
    },
  }));

export const DisconnectCmd = CmdPersistentBase.named("DisconnectCmd").actions(
  (self) => ({
    prepare() {
      if (!self.is.running) {
        self.is.prepared();
      }
    },
  })
);

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
    fees: (value: string) => value || "0",
    reward: (value: string, stakingValue: string) =>
      value || stakingValue || "0",
  }))
  .actions((self) => ({
    setData(data: ISafeTransferItem) {
      if (self.feesFormula !== data.feesFormula && data.feesFormula) {
        try {
          const formula = JSON.parse(data.feesFormula);
          self.fees = (value: string) =>
            // eslint-disable-next-line no-new-func
            new Function(formula.arguments, formula.body)(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (Web3.utils as any).BN,
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
          self.reward = (value: string, stakingValue: string) =>
            // eslint-disable-next-line no-new-func
            new Function(formula.arguments, formula.body)(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (Web3.utils as any).BN,
              toBN,
              value,
              stakingValue
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

export interface ERC20TokenItem {
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
    setData({ address, name, symbol, decimals, balance }: ERC20TokenItem) {
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
    }: ERC20TokenItem) {
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

export interface DeviceInfoData {
  type: string;
  haveMetaMask: boolean;
  ethereumProvider: boolean;
  ready: boolean;
}

export const DeviceInfo = types
  .model("DeviceInfo", {
    type: types.optional(types.string, ""),
    haveMetaMask: types.optional(types.boolean, false),
    ethereumProvider: types.optional(types.boolean, false),
    ready: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setData({ type, haveMetaMask, ethereumProvider, ready }: DeviceInfoData) {
      self.type = type;
      self.haveMetaMask = haveMetaMask;
      self.ethereumProvider = ethereumProvider;
      self.ready = ready;
    },
  }));

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

export interface ApprovedCmdParams {
  amount: string;
}

export const ApprovedCmd = CmdBase.named("ApprovedCmd")
  .props({
    amount: types.optional(types.string, "1.157920892373162e+59"),
  })
  .actions((self) => ({
    prepare(params: ApprovedCmdParams) {
      if (!self.is.running) {
        self.amount = params.amount;
        self.is.prepared();
      }
    },
  }));

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

export interface RetrieveCmdParams {
  id: string;
}

export const RetrieveCmd = CmdBase.named("RetrieveCmd")
  .props({
    id: types.optional(types.string, ""),
  })
  .actions((self) => ({
    prepare(params: RetrieveCmdParams) {
      if (!self.is.running) {
        self.id = params.id;
        self.is.prepared();
      }
    },
  }));

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

export const Transfers = types
  .model("Transfers", {
    name: types.string,
    map: types.map(Transfer),
    count: types.optional(types.number, 0),
    fetched: types.optional(types.number, 0),
    address: types.optional(types.string, ""),
    fetchCmd: types.optional(FetchCmd, {}),
  })
  .views((self) => ({
    get list() {
      return Array.from(self.map.values());
    },
  }))
  .actions((self) => ({
    setFetched(count: number) {
      self.fetched = count;
    },
    add({
      address,
      transfers,
      count,
    }: {
      address: string;
      transfers: ITransferItem[];
      count: number;
    }) {
      if (!self.address) {
        self.address = address;
      } else if (self.address !== address) {
        return;
      }
      for (const transfer of transfers) {
        self.map.put(Transfer.create(transfer));
      }
      self.count = count;
    },
    upsert(address: string, transfer: ITransferItem) {
      if (!self.address) {
        self.address = address;
      } else if (self.address !== address) {
        return;
      }
      if (!self.map.has(transfer.id)) {
        self.count = self.count + 1;
      }
      self.map.set(transfer.id, Transfer.create(transfer));
    },
    delete(address: string, id: string) {
      if (self.address === address) {
        if (self.map.delete(id)) {
          self.count = self.count - 1;
        }
      }
    },
    remove(
      address: string,
      filter: (item: ITransferItem) => boolean
    ): ITransferItem[] {
      const res: ITransferItem[] = [];
      if (self.address === address) {
        self.map.forEach((transfer) => {
          if (filter(transfer as ITransferItem)) {
            res.push(castToSnapshot(getSnapshot(transfer)));
            if (self.map.delete(transfer.id)) {
              self.count = self.count - 1;
            }
          }
        });
      }
      return res;
    },
    clear() {
      self.map.clear();
      self.fetched = 0;
      self.count = 0;
      // self.fetchId = self.fetchId + 1
      self.address = "";
      self.fetchCmd.clear();
    },
    fetch(amount: number) {
      self.fetchCmd.prepare({ list: self.name, amount });
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
              : -1;
          })
      );
    },
    get activeCount() {
      let count = 0;
      self.map.forEach((item) => {
        if (item.state === "new") count += 1;
      });
      return count;
    },
  }));

export const Web3Provider = types
  .model("Web3Provider", {
    block: types.optional(types.number, -1),
    balance: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setBlock(block: number) {
      self.block = block;
    },
    setBalance(balance: string) {
      self.balance = balance;
    },
  }));

const Mnemonic = types
  .model("Mnemonic", {
    data: types.optional(types.string, ""),
    clearCmd: types.optional(CmdBase.named("ClearCmd"), {}),
    removeCmd: types.optional(CmdBase.named("RemoveCmd"), {}),
    restoreCmd: types.optional(CmdBase.named("RestoreCmd"), {}),
  })
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

const Wallet = types
  .model("Wallet", {
    mnemonic: types.optional(Mnemonic, {}),
    activeAccount: types.optional(types.string, ""),
    accounts: types.array(types.string) as IAnyType,
    addAddressCmd: types.optional(WalletAddressCmd, {}),
    removeAddressCmd: types.optional(WalletAddressCmd, {}),
    balance: types.optional(types.string, "0"),
    balanceInUsd: types.optional(types.string, "0"),
    tokenBalance: types.optional(types.string, "0"),
    account: types.optional(types.string, ""),
    balanceCmd: types.optional(CmdBase.named("walletBalanceCmd"), {}),
    tokenBalanceCmd: types.optional(CmdBase.named("walletTokenBalanceCmd"), {}),
    createWalletCmd: types.optional(CmdBase.named("createWalletCmd"), {}),
  })
  .actions((self) => ({
    removeWalletAddress(address: string) {
      self.removeAddressCmd.prepare(address);
    },
    addWalletAddress() {
      self.addAddressCmd.prepare();
    },
    setAccounts(accounts: string[]) {
      self.accounts = accounts;
    },
    setActiveAccount(activeAccount: string | undefined) {
      self.activeAccount = activeAccount || "";
    },
    generateMnemonic() {
      self.mnemonic.set(generateMnemonic());
    },
    setMnemonic(mnemonic?: string) {
      self.mnemonic.set(mnemonic);
    },
    getMnemonic() {
      return self.mnemonic.data;
    },
    tryRestoreMnemonicFromStorage() {
      self.mnemonic.restore();
    },
    clearMnemonic() {
      self.mnemonic.clear();
    },
    removeMnemonic() {
      self.mnemonic.remove();
    },
    changeMnemonic(mnemonic: string) {
      self.mnemonic.set(mnemonic);
    },
    setBalance(balance: string) {
      self.balance = balance;
    },
    setBalanceInUsd: (balance: typeof self.balanceInUsd) => {
      self.balanceInUsd = balance;
    },
    setTokenBalance(balance: string) {
      self.tokenBalance = balance;
    },
    setAccount(account?: string) {
      if (!account) {
        self.account = "";
        return;
      }
      if (isValidAddress(account)) {
        self.account = account;
        return;
      }
    },
  }));

const OnChainWalletType = types.enumeration(["onChain", "regular"]);
const TransactionState = types.enumeration([
  "pending",
  "success",
  "failed",
  "idle",
  "queue",
  "rejected",
  "init",
]);

const TransactionLog = types.model({
  address: types.optional(types.string, ""),
  blockHash: types.optional(types.string, ""),
  blockNumber: types.optional(types.number, 0),
  data: types.optional(types.string, ""),
  id: types.optional(types.string, ""),
  logIndex: types.optional(types.number, 0),
  removed: types.optional(types.boolean, false),
  transactionHash: types.optional(types.string, ""),
  transactionIndex: types.optional(types.number, 0),
});

const TransactionReceipt = types.model({
  blockHash: types.optional(types.string, ""),
  blockNumber: types.optional(types.number, 0),
  contractAddress: types.maybe(types.string),
  cumulativeGasUsed: types.optional(types.number, 0),
  from: types.optional(types.string, ""),
  gasUsed: types.optional(types.number, 0),
  logs: types.array(TransactionLog),
  logsBloom: types.optional(types.string, ""),
  status: types.optional(types.boolean, false),
  to: types.optional(types.string, ""),
  transactionHash: types.optional(types.string, ""),
  transactionIndex: types.optional(types.number, 0),
});

export type ITransactionReceipt = Instance<typeof TransactionReceipt>;

export type ITransactionReceiptSnapshotIn = SnapshotIn<
  typeof TransactionReceipt
>;

export const TransactionType = types.enumeration([
  "ACCEPT BACKUP",
  "CLAIM OWNERSHIP",
  "CREATE SMART WALLET",
  "DISABLE INHERITANCE",
  "ENABLE INHERITANCE",
  "RECLAIM OWNERSHIP",
  "REMOVE BACKUP",
  "SEND TOKENS",
  "SET BACKUP",
  "SET HEIRS",
  "VALUE TRANSFER",
  "DECLINE BACKUP",
  "START TIMER",
  "RESET BACKUP TIMER",
  "NOT SET",
]);

const OnChainTransaction = types
  .model({
    data: types.optional(types.string, ""),
    error: types.optional(types.string, ""),
    from: types.optional(types.string, ""),
    fiat: types.optional(types.string, ""),
    gasPrice: types.optional(types.string, ""),
    id: types.optional(types.identifier, ""),
    isPending: types.optional(types.boolean, false),
    receipt: types.optional(TransactionReceipt, {}),
    state: types.optional(TransactionState, "init"),
    timestamp: types.optional(types.Date, new Date()),
    to: types.optional(types.string, ""),
    txHash: types.optional(types.string, ""),
    type: types.optional(TransactionType, "NOT SET"),
    value: types.optional(types.string, "0"),
    valueInWei: types.optional(types.string, "0"),
    valueToDisplay: types.optional(types.string, "0"),
    nonce: types.optional(types.number, -1),
    wallet: types.optional(OnChainWalletType, "onChain"),
    gas: types.optional(types.number, 0),
    transactionCmd: types.optional(CmdBase.named("sendCmd"), {}),
  })
  .actions((self) => {
    const updateStatus = (status: boolean) => {
      self.receipt.status = status;
    };
    const update = (trx: Instance<typeof self>) => {
      self = trx;
    };
    const setType = (type: typeof self.type) => {
      self.type = type;
    };
    const setFrom = (from: string) => {
      self.from = from;
    };
    const setValueToDisplay = (value: string) => {
      self.valueToDisplay = value;
    };
    const setValueInWei = (value: string) => {
      self.valueInWei = value;
    };

    return {
      updateStatus,
      update,
      setType,
      setFrom,
      setValueToDisplay,
      setValueInWei,
    };
  });

export type ITransaction = Instance<typeof OnChainTransaction>;
export type ITransactionType = ITransaction["type"];
export type ITransactionSnapshotIn = SnapshotIn<typeof OnChainTransaction>;
export type ITransactionSnapshotOut = SnapshotOut<typeof OnChainTransaction>;

const ChainBackupData = types.model({
  backupAddress: types.optional(types.string, ""),
  backupTimeout: types.optional(types.number, 0),
});

const OnChainTransactions = types
  .model({
    items: types.array(OnChainTransaction),
    currentTransactionId: types.optional(types.string, ""),
    isSigningTransaction: types.optional(types.boolean, false),
    isWaitingForSigner: types.optional(types.boolean, false),
    backupData: types.optional(ChainBackupData, {}),
  })
  .actions((self) => {
    let initialState = {};
    const resetSelf = () => applySnapshot(self, initialState);

    onAddressChangeActions.push(resetSelf);
    const afterCreate = () => {
      initialState = getSnapshot(self);
    };

    const createTransaction = ({
      to,
      from,
      value,
      valueToDisplay,
      valueInWei,
      type,
      wallet,
      data,
      gas,
    }: {
      gas?: number;
      to?: string;
      from?: string;
      value?: string;
      valueToDisplay?: string;
      valueInWei?: string;
      type?: ITransaction["type"];
      wallet?: ITransaction["wallet"];
      data?: string;
    }) => {
      const newTransaction: Partial<ITransaction> = {
        to: to || "",
        value,
        type,
        wallet,
        from: from || "",
        valueToDisplay: valueToDisplay || "",
        valueInWei: valueInWei || "",
        data: data || "",
        id: generateId(),
        state: "idle",
        gas: gas || 0,
      };

      const transaction = OnChainTransaction.create(newTransaction);
      self.currentTransactionId = transaction.id;
      self.items.push(transaction);

      return transaction;
    };
    const clear = () => {
      self.items.clear();
    };
    const getTransactionById = (id?: string) => {
      if (!id) return;
      const transaction = self.items.find((trx) => trx.id === id);

      return transaction;
    };
    const getLastTransaction = () => {
      const lastTransaction = self.items[self.items.length - 1];

      return lastTransaction;
    };
    const updatePendingTransactionByHash = (hash: string, status: boolean) => {
      const transaction = self.items.find((item) => item.txHash === hash);
      transaction?.updateStatus(status);
    };
    const updateTransactionState = (
      id: string,
      state: "pending" | "success" | "failed" | "idle" | "queue" | "rejected"
    ) => {
      const transaction = self.items.find((trx) => trx.id === id);
      if (!transaction) return;
      transaction.state = state;
    };
    const updateTransactionReceipt = (
      id: string,
      receipt: ITransactionReceipt
    ) => {
      const transaction = self.items.find((trx) => trx.id === id);
      if (!transaction) return;

      const {
        blockHash,
        blockNumber,
        transactionHash,
        transactionIndex,
        to,
        from,
        gasUsed,
        cumulativeGasUsed,
        status,
        logs,
        logsBloom,
        contractAddress,
      } = receipt;

      transaction.receipt.blockHash = blockHash;
      transaction.receipt.blockNumber = blockNumber;
      transaction.receipt.transactionHash = transactionHash;
      transaction.receipt.transactionIndex = transactionIndex;
      transaction.receipt.to = to;
      transaction.receipt.from = from;
      transaction.receipt.gasUsed = gasUsed;
      transaction.receipt.cumulativeGasUsed = cumulativeGasUsed;
      transaction.receipt.status = status;
      transaction.receipt.logsBloom = logsBloom;
      transaction.receipt.contractAddress = contractAddress
        ? contractAddress
        : "";

      logs.forEach((log) => {
        const {
          address,
          blockHash,
          blockNumber,
          data,
          id,
          logIndex,
          removed,
          transactionHash,
          transactionIndex,
        } = log;

        transaction.receipt.logs.push({
          address,
          blockHash,
          blockNumber,
          data,
          id,
          logIndex,
          removed,
          transactionHash,
          transactionIndex,
        });
      });
    };
    const updateTransactionRequest = (id: string, trx: ITransaction) => {
      const transaction = self.items.find((trx) => trx.id === id);
      if (!transaction) return;
      transaction.update(trx);
    };

    return {
      afterCreate,
      createTransaction,
      clear,
      getTransactionById,
      getLastTransaction,
      updatePendingTransactionByHash,
      updateTransactionReceipt,
      updateTransactionRequest,
      updateTransactionState,
    };
  });

export enum DrawerContent {
  NONE = "none",
  BACKUP = "backup",
  CREATE_WALLET = "createWallet",
  DELETE_BACKUP = "delete_backup",
  MOVE = "move",
  RESET_BACKUP_TIMER = "resetBackupTimer",
  SEND = "send",
  SEND_TOKENS = "sendTokens",
  MOVE_TOKENS = "moveTokens",
  START_TIMER = "startTimer",
  CREATE_HEIR = "createHeir",
  EDIT_HEIR = "editHeir",
  START_INHERITANCE_TIMER = "startInheritanceTimer",
  WALLET_SETTINGS = "walletSettings",
}

const {
  NONE,
  BACKUP,
  CREATE_WALLET,
  DELETE_BACKUP,
  MOVE,
  RESET_BACKUP_TIMER,
  SEND,
  SEND_TOKENS,
  MOVE_TOKENS,
  START_TIMER,
  START_INHERITANCE_TIMER,
  CREATE_HEIR,
  EDIT_HEIR,
  WALLET_SETTINGS,
} = DrawerContent;

const OnChainTransferType = types.enumeration([
  NONE,
  BACKUP,
  CREATE_WALLET,
  DELETE_BACKUP,
  MOVE,
  RESET_BACKUP_TIMER,
  SEND,
  SEND_TOKENS,
  MOVE_TOKENS,
  START_TIMER,
  START_INHERITANCE_TIMER,
  CREATE_HEIR,
  EDIT_HEIR,
  WALLET_SETTINGS,
]);

const OnChainTransfer = types
  .model({
    from: types.optional(types.string, ""),
    to: types.optional(types.string, ""),
    amount: types.optional(types.string, ""),
    destination: types.optional(types.string, ""),
    wallet: types.optional(OnChainWalletType, "regular"),
    type: types.optional(OnChainTransferType, NONE),
    sendCmd: types.optional(CmdBase.named("sendCmd"), {}),
    sendTokenCmd: types.optional(CmdBase.named("sendTokenCmd"), {}),
    heirId: types.optional(types.string, ""),
    heirAddress: types.optional(types.string, ""),
    heirPercent: types.optional(types.number, 0),
  })
  .actions((self) => ({
    setWalletType: (wallet: typeof self.wallet) => {
      self.wallet = wallet;
    },
    setTo: (to: typeof self.to) => {
      self.to = to;
    },
    setFrom: (from: typeof self.from) => {
      self.from = from;
    },
    setAmount: (amount: typeof self.amount) => {
      self.amount = amount;
    },
    setDestination: (destination: typeof self.destination) => {
      self.destination = destination;
    },
    setType: (type: typeof self.type) => {
      self.type = type;
    },
    setHeirId: (id: typeof self.heirId) => {
      self.heirId = id;
    },
    setHeirAddress: (address: typeof self.heirAddress) => {
      self.heirAddress = address;
    },
    setHeirPercent: (percent: typeof self.heirPercent) => {
      self.heirPercent = percent;
    },
  }));

export const tokens = {
  // DAI: { icon: LogoDai, label: 'DAI', address: '0x0d5263b7969144a852d58505602f630f9b20239d' },
  // ANT: { icon: LogoAnt, label: 'ANT', address: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea' },
  none: {
    icon: () => null,
    label: null,
    address: { "4": "", "1": "", notSupportedChainId: "" },
  },
  KIRO: {
    icon: IconLogoOnly,
    label: "KIRO",
    address: {
      "4": "0xB678E95F83aF08E7598EC21533F7585E83272799",
      "1": "0xb1191f691a355b43542bea9b8847bc73e7abb137",
      notSupportedChainId: "",
    },
  },
  LINK: {
    icon: LogoChainlink,
    label: "LINK",
    address: {
      "4": "0x01be23585060835e02b77ef475b0cc51aa1e0709",
      "1": "0x514910771af9ca656af840dff83e8264ecf986ca",
      notSupportedChainId: "",
    },
  },
  USDT: {
    icon: LogoUSDT,
    label: "Tether",
    address: {
      "4": "0xb19ed150325db38b397cb134533cb45a2b2b62a3",
      "1": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      notSupportedChainId: "",
    },
  },
  BNB: {
    icon: LogoBNB,
    label: "Binance Coin",
    address: {
      "4": "0x2211dc5e1b4c34efe0027561e2f36c2d63fbd01c",
      "1": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      notSupportedChainId: "",
    },
  },
  UNI: {
    icon: LogoUNI,
    label: "Uniswap",
    address: {
      "4": "0x7f0fae34de2b34d13da640afc2273366919cd0b2",
      "1": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      notSupportedChainId: "",
    },
  },
  SUSHI: {
    icon: LogoSUSHI,
    label: "Sushi Token",
    address: {
      "4": "0x1bfc4d6b40591b8c8e1ef8a36e4f15d54d760110",
      "1": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      notSupportedChainId: "",
    },
  },
} as const;

export const OnChainToken = types.enumeration(
  Object.keys(tokens).map((key) => key as keyof typeof tokens)
);

const OnChainTokens = types
  .model({
    token: types.optional(OnChainToken, "KIRO"),
    transactions: types.array(OnChainTransaction),
    isSigningTransaction: types.optional(types.boolean, false),
    isWaitingForSigner: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setToken: (token: typeof self.token) => {
      self.token = token;
    },
    getToken: () => {
      return self.token;
    },
  }));

export type IOnChainTokens = Instance<typeof OnChainTokens>;
export type TokenType = IOnChainTokens["token"];

const OnChainBackupStates = types.enumeration([
  "PENDING",
  "REGISTERED",
  "ENABLED",
  "ACTIVATED",
  "NONE",
]);

const OnChainBackup = types
  .model({
    address: types.optional(types.string, ""),
    ownerAddress: types.optional(types.string, ""),
    isOwner: types.optional(types.boolean, false),
    state: types.optional(OnChainBackupStates, "NONE"),
    walletAddress: types.optional(types.string, ""),
    timeout: types.optional(types.string, ""),
    formTimeout: types.optional(types.string, ""),
    timestamp: types.optional(types.string, ""),
    createCmd: types.optional(CmdBase.named("createCmd"), {}),
    getCmd: types.optional(CmdBase.named("getCmd"), {}),
    rejectCmd: types.optional(CmdBase.named("rejectCmd"), {}),
    removeCmd: types.optional(CmdBase.named("removeCmd"), {}),
    acceptCmd: types.optional(CmdBase.named("acceptCmd"), {}),
    startTimerCmd: types.optional(CmdBase.named("startTimerCmd"), {}),
    resetTimerCmd: types.optional(CmdBase.named("resetTimerCmd"), {}),
    activateByTimerCmd: types.optional(CmdBase.named("activateByTimerCmd"), {}),
    updateBackupDataCmd: types.optional(
      CmdBase.named("updateBackupDataCmd"),
      {}
    ),
  })
  .views((self) => ({
    get isCmdRunning() {
      return (
        self.createCmd.is.running ||
        self.rejectCmd.is.running ||
        self.removeCmd.is.running ||
        self.acceptCmd.is.running ||
        self.startTimerCmd.is.running ||
        self.resetTimerCmd.is.running ||
        self.activateByTimerCmd.is.running
      );
    },
    get timeLeft() {
      if (!parseInt(self.timestamp) || !parseInt(self.timeout)) return 0;
      return timestampWithTimeoutInSecondsToTimeLeftInSeconds(
        self.timestamp,
        self.timeout
      );
    },
    isBackup(address: string) {
      return self.walletAddress === address;
    },
  }))
  .actions((self) => {
    let initialState = {};
    const resetSelf = () => applySnapshot(self, initialState);
    onAddressChangeActions.push(resetSelf);
    return {
      afterCreate: () => {
        initialState = getSnapshot(self);
      },
      clear: () => {
        self.address = "";
        self.state = "NONE";
      },
      setAddress: (address: typeof self.address) => {
        if (isValidAddress(address)) {
          self.address = address;
          return;
        }
      },
      setIsOwner: (isOwner: string) => {
        self.isOwner = Boolean(isOwner);
      },
      setWalletAddress: (walletAddress: typeof self.walletAddress) => {
        if (isValidAddress(walletAddress)) {
          self.walletAddress = walletAddress;
          return;
        }
        self.walletAddress = "";
      },
      setOwnerAddress: (address: typeof self.ownerAddress) => {
        self.ownerAddress = address;
      },
      setState: (state: typeof self.state) => {
        self.state = state;
      },
      setTimeout: (timeout: typeof self.timeout) => {
        self.timeout = timeout;
      },
      setFormTimeout: (timeout: typeof self.timeout) => {
        self.formTimeout = timeout;
      },
      setTimestamp: (timestamp: typeof self.timestamp) => {
        self.timestamp = timestamp;
      },
    };
  });

const InheritanceForm = types.model({
  id: types.optional(types.string, ""),
  wallet: types.optional(types.string, ""),
  percent: types.optional(types.number, 0),
});

const Heir = types
  .model({
    id: types.optional(types.string, ""),
    isSent: types.optional(types.boolean, false),
    isRegistered: types.optional(types.boolean, false),
    walletAddress: types.optional(types.string, ""),
    percent: types.optional(types.number, 0),
  })
  .actions((self) => ({
    setName: (id: typeof self.id) => {
      self.id = id;
    },
    setIsSent: (isSent: typeof self.isSent) => {
      self.isSent = isSent;
    },
    setIsRegistered: (isRegistered: typeof self.isRegistered) => {
      self.isRegistered = isRegistered;
    },
    setWalletAddress: (address: typeof self.walletAddress) => {
      self.walletAddress = address;
    },
    setPercent: (percent: typeof self.percent) => {
      self.percent = percent;
    },
  }));

export type IHeir = SnapshotIn<typeof Heir>;

const Inheritance = types
  .model({
    form: types.optional(InheritanceForm, {}),
    heirs: types.array(Heir),
    isActivated: types.optional(types.boolean, false),
    isEnabled: types.optional(types.boolean, false),
    isHeirsChanged: types.optional(types.boolean, false),
    initHeirs: types.array(Heir),
    timeLeftCurrent: types.optional(types.string, ""),
    timeout: types.optional(types.string, ""),
    timestamp: types.optional(types.string, ""),
    totalPercent: types.optional(types.number, 0),
    totalTransferred: types.optional(types.string, ""),
    setInheritanceCmd: types.optional(CmdBase.named("setInheritanceCmd"), {}),
    clearInheritanceCmd: types.optional(
      CmdBase.named("clearInheritanceCmd"),
      {}
    ),
    setHeirsCmd: types.optional(CmdBase.named("setHeirsCmd"), {}),
    activateCmd: types.optional(CmdBase.named("activateCmd"), {}),
    activateByTimerCmd: types.optional(CmdBase.named("activateByTimerCmd"), {}),
    updateHeirsCmd: types.optional(CmdBase.named("updateHeirsCmd"), {}),
    isChanged: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get isCmdRunning() {
      return (
        self.setInheritanceCmd.is.running ||
        self.clearInheritanceCmd.is.running ||
        self.setHeirsCmd.is.running ||
        self.activateCmd.is.running ||
        self.updateHeirsCmd.is.running
      );
    },
    get timeLeft() {
      if (!parseInt(self.timestamp) || !parseInt(self.timeout)) return 0;
      return timestampWithTimeoutInSecondsToTimeLeftInSeconds(
        self.timestamp,
        self.timeout
      );
    },
  }))
  .actions((self) => {
    let initialState = {};
    const resetSelf = () => applySnapshot(self, initialState);

    onAddressChangeActions.push(resetSelf);
    return {
      afterCreate: () => {
        initialState = getSnapshot(self);
      },
      clear: () => {
        self.heirs.clear();
        self.initHeirs.clear();
        self.totalPercent = 0;
      },
      setTimestamp: (seconds: string) => {
        self.timestamp = seconds;
      },
      setTimeout: (seconds: string) => {
        self.timeout = seconds;
      },
      setTimeLeftCurrent: (seconds: string) => {
        self.timeLeftCurrent = seconds;
      },
      setTotalTransferred: (totalTransferred: typeof self.totalTransferred) => {
        if (parseFloat(totalTransferred) === 0) {
          self.totalTransferred = "";
          return;
        }
        self.totalTransferred = totalTransferred;
      },
      setIsChanged: (isChanged: typeof self.isChanged) => {
        self.isChanged = isChanged;
      },

      addHeir: (heir: IHeir, isInit?: boolean) => {
        heir.id = generateId();
        self.heirs.push(heir);
        self.totalPercent =
          self.totalPercent + (heir.percent ? heir.percent : 0);

        if (isInit) {
          self.initHeirs.push(heir);
        } else {
          self.isChanged = true;
        }
      },
      editHeir: (heir: { id: string; percent: number }) => {
        self.isChanged = true;
        const currentHeir = self.heirs.find((item) => item.id === heir.id);
        const percentChange = heir.percent - (currentHeir?.percent || 0);
        self.totalPercent = self.totalPercent + percentChange;
        currentHeir?.setPercent(heir.percent);
      },
      removeHeirById: (id: string) => {
        self.isChanged = true;
        const currentHeir = self.heirs.find((item) => item.id === id);
        if (!currentHeir) return;
        self.totalPercent = self.totalPercent - currentHeir.percent;
        self.heirs.remove(currentHeir);
      },
      resetChanges: () => {
        self.heirs.replace(self.initHeirs.map((i) => ({ ...i })));
        self.totalPercent = 0;
        self.heirs.forEach((h) => {
          self.totalPercent += h.percent;
        });
        self.isChanged = false;
      },
      saveChanges: () => {
        self.initHeirs.replace(self.heirs.map((i) => ({ ...i })));
        self.isChanged = false;
      },
      setIsActivated: (isActivated: typeof self.isActivated) => {
        self.isActivated = isActivated;
      },
      setIsEnabled: (isEnabled: typeof self.isEnabled) => {
        self.isEnabled = isEnabled;
      },
    };
  });

const onChainWalletDetails = types
  .model({
    account: types.optional(types.string, ""),
    isNoWallet: types.optional(types.boolean, false),
    isOwner: types.optional(types.boolean, false),
    dataIsLoaded: types.optional(types.boolean, false),
    isBackup: types.optional(types.boolean, false),
    balance: types.optional(types.string, ""),
    balanceInUsd: types.optional(types.string, ""),
    tokenBalance: types.optional(types.string, "0"),
    claimOwnershipCmd: types.optional(CmdBase.named("claimOwnershipCmd"), {}),
    createWalletCmd: types.optional(CmdBase.named("createWalletCmd"), {}),
    createTokenWalletCmd: types.optional(
      CmdBase.named("createTokenWalletCmd"),
      {}
    ),
    createWalletTransactionCmd: types.optional(
      CmdBase.named("createWalletTransactionCmd"),
      {}
    ),
    balanceCmd: types.optional(CmdBase.named("onChainWalletBalanceCmd"), {}),
    tokenBalanceCmd: types.optional(
      CmdBase.named("onChainWalletTokenBalanceCmd"),
      {}
    ),
  })
  .actions((self) => ({
    setAccount: (account: typeof self.account) => {
      if (!account) {
        self.account = "";
        return;
      }
      if (isValidAddress(account)) {
        self.account = account;
        return;
      }
    },
    setIsOwner: (isOwner: boolean) => {
      self.isOwner = isOwner;
    },
    setIsNoWallet: (isNoWallet: boolean) => {
      self.isNoWallet = isNoWallet;
    },
    setDataIsLoaded: (dataIsLoaded: boolean) => {
      self.dataIsLoaded = dataIsLoaded;
    },
    setIsBackup: (isBackup: boolean) => {
      self.isBackup = isBackup;
    },
    setBalance: (balance: string) => {
      self.balance = balance;
    },
    setBalanceInUsd: (balance: typeof self.balanceInUsd) => {
      self.balanceInUsd = balance;
    },
    setTokenBalance: (balance: string) => {
      self.tokenBalance = balance;
    },
  }));

export const AVAILABLE_RPC_URLS = {
  "1": "wss://mainnet.infura.io/ws/v3/14c73ecdbcaa464585aa7c438fdf6a77",
  "4": "wss://rinkeby.infura.io/ws/v3/14c73ecdbcaa464585aa7c438fdf6a77",
};

export const RPC_URLS = {
  ...AVAILABLE_RPC_URLS,
  notSupportedChainId: "notSupportedChainId",
};

export type ChainIds = keyof typeof RPC_URLS;

const ChainId = types.enumeration(
  Object.keys(RPC_URLS).map((id) => {
    const typedId = id as ChainIds;
    return typedId;
  })
);

export const Account = types
  .model("Account", {
    isAuthed: types.optional(types.boolean, false),
    isInit: types.optional(types.boolean, false),
    signer: types.optional(types.string, ""),
    ETH_USD: types.optional(types.number, 0),
    exchangeToUsdRate: types.optional(types.number, 0),
    transfer: types.optional(OnChainTransfer, {}),
    transactions: types.optional(OnChainTransactions, {}),
    tokens: types.optional(OnChainTokens, {}),
    backup: types.optional(OnChainBackup, {}),
    inheritance: types.optional(Inheritance, {}),
    onChainWalletDetails: types.optional(onChainWalletDetails, {}),
    allowance: types.optional(types.string, "-1"),
    address: types.optional(EthAddressPrimitive, ""),
    wallet: types.optional(Wallet, {}),
    chainId: types.optional(ChainId, "4"),
    active: types.optional(types.boolean, false),
    block: types.optional(types.number, -1),
    balance: types.optional(types.string, ""),
    tokenBalance: types.optional(types.string, ""),
    ethBalance: types.optional(types.string, ""),
    stakingBalance: types.optional(types.string, ""),
    rate: types.optional(types.number, 0),
    transfers: types.optional(Transfers, { name: "transfers" }),
    incoming: types.optional(Transfers, { name: "incoming" }),
    outgoing: types.optional(Transfers, { name: "outgoing" }),
    sendCmd: types.optional(SendCmd, {}),
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
    deviceInfo: types.optional(DeviceInfo, {}),
  })
  .views((self) => ({
    get safeTransferContract() {
      return self.safeTransferMap.get(getChainName(self.chainId));
    },
    get kiroTokenContract() {
      return self.kiroTokenMap.get(getChainName(self.chainId));
    },
    get ERC20TokensContract() {
      return self.ERC20TokensMap.get(getChainName(self.chainId))?.list || [];
    },
    get stakingContract() {
      return self.stakingMap.get(getChainName(self.chainId));
    },
    approvedToken(symbol: string, amount: string) {
      return !(symbol !== "ETH" && BigInt(self.allowance) < BigInt(amount));
    },
    transferFees(amount: string) {
      const safeTransfer = self.safeTransferMap.get(getChainName(self.chainId));
      if (safeTransfer) {
        const testAmount = parseFloat(amount);
        return safeTransfer.fees(testAmount > 0 ? amount : "0");
      }
      return "";
    },
    transferReward(amount: string) {
      const chainName = getChainName(self.chainId);
      const safeTransfer = self.safeTransferMap.get(chainName);
      if (safeTransfer) {
        const testAmount = parseFloat(amount);
        return safeTransfer.reward(
          testAmount > 0 ? amount : "0",
          self.stakingBalance || "0"
        );
      }
      return "";
    },
    ERC20TokenList(chainName: string) {
      const tokens = self.ERC20TokensMap.get(chainName);
      return tokens ? tokens.list : [];
    },
  }))
  .actions((self) => ({
    setExchangeToUsdRate(rate: typeof self.exchangeToUsdRate) {
      self.exchangeToUsdRate = rate;
    },
    setIsAuthed(isAuthed: boolean) {
      self.isAuthed = isAuthed;
    },
    send(to: string, value: string) {
      self.sendCmd.prepare({ to, value });
    },
    approve({ amount }: { amount: string }) {
      self.approvedCmd.prepare({ amount });
    },
    deposit({
      to,
      value,
      passcode,
      message = "",
    }: {
      to: string;
      value: string;
      passcode: string;
      message?: string;
    }) {
      const _publicSalt = new Uint16Array(10);
      const _privateSalt = new Uint16Array(10);
      window.crypto.getRandomValues(_publicSalt);
      window.crypto.getRandomValues(_privateSalt);
      const publicSalt = _publicSalt.join("");
      const privateSalt = _privateSalt.join("");
      const hashSeed = sha3(privateSalt + sha3(publicSalt + passcode));
      const secretHash = sha3(
        hashSeed ? hashSeed : privateSalt + sha3(publicSalt + passcode)
      );
      if (secretHash) {
        self.depositCmd.prepare({
          from: self.address,
          to,
          value,
          message,
          publicSalt,
          privateSalt,
          secretHash,
        });
      }
    },
    retrieve({ id }: { id: string }) {
      self.retrieveCmd.prepare({ id: id });
    },
    collect({ id, passcode }: { id: string; passcode: string }) {
      const item = self.incoming.map.get(id);
      if (item && item.salt) {
        const key = sha3(item.salt + passcode) || "";
        self.collectCmd.prepare({ id, key });
      }
    },
    connect(connector: Connectors) {
      self.connectCmd.prepare(connector);
    },
    disconnect() {
      self.disconnectCmd.prepare();
    },
    setAddress(address?: string) {
      if (!address) {
        self.address = "";
        return;
      }
      if (isValidAddress(address)) {
        self.address = address;
        return;
      }
    },
    setActive(newActive: boolean) {
      self.active = newActive;
    },
    setChainId(chainId: ChainIds) {
      self.chainId = chainId;
    },
    setBalance(balance: string) {
      self.balance = balance;
    },
    setTokenBalance(balance: string) {
      self.tokenBalance = balance;
    },
    setEthBalance(balance: string) {
      self.ethBalance = balance;
    },
    setStakingBalance(balance: string) {
      self.stakingBalance = balance;
    },
    setBlock(block: number) {
      self.block = block;
    },
    setRate(newRate: number) {
      self.rate = newRate;
    },
    setCurrency(currency: ERC20TokenItem) {
      self.currency.setData(currency);
    },
    setCurrencyBalance(balance: string) {
      self.currency.setBalance(balance);
    },
    setAllowance(allowance: string) {
      self.allowance = allowance;
    },

    setDeviceInfo(deviceInfo: DeviceInfoData) {
      self.deviceInfo.setData(deviceInfo);
    },
    setSafeTransferContract(chainName: string, data: ISafeTransferItem) {
      if (!chainName || !data) {
        return;
      }
      if (!self.safeTransferMap.has(chainName)) {
        self.safeTransferMap.set(chainName, SafeTransfer.create());
      }
      const {
        address = "",
        feesFormula = "",
        rewardFormula = "",
        synced = false,
      } = data;
      self.safeTransferMap
        .get(chainName)
        ?.setData({ address, feesFormula, rewardFormula, synced });
    },
    setStakingContract(chainName: string, data: IStakingItem) {
      if (!chainName || !data) return;
      if (!self.stakingMap.has(chainName)) {
        self.stakingMap.set(chainName, Staking.create());
      }
      const { address = "" } = data;
      self.stakingMap.get(chainName)?.setData({ address });
    },
    setKiroTokenContract(chainName: string, data: IKiroTokenItem) {
      if (!chainName || !data) return;
      if (!self.kiroTokenMap.has(chainName)) {
        self.kiroTokenMap.set(chainName, KiroToken.create());
      }
      const { address = "" } = data;
      self.kiroTokenMap.get(chainName)?.setData({ address });
    },
    setERC20TokenContract(chainName: string, data: Array<ERC20TokenItem>) {
      if (!chainName || !data) return;
      self.ERC20TokensMap.set(chainName, {});
      for (const { address, name, symbol, decimals, balance, rate } of data) {
        self.ERC20TokensMap.get(chainName)?.addToken({
          address,
          name,
          symbol,
          decimals,
          balance,
          rate,
        });
      }
    },
    setERC20TokenBalance(chainName: string, address: string, balance: string) {
      self.ERC20TokensMap.get(chainName)?.setBalance(address, balance);
    },
    setErc20TokenRate(chainName: string, address: string, rate: number) {
      self.ERC20TokensMap.get(chainName)?.setRate(address, rate);
    },
    clearERC20TokenBalances(chainName?: string) {
      chainName
        ? self.ERC20TokensMap.get(chainName)?.clearBalances()
        : self.ERC20TokensMap.forEach((token) => token.clearBalances());
    },
  }));

const store = Account.create();
export type AccountStoreType = ReturnType<typeof Account.create>;

onSnapshot(store, (snapshot) => {
  if (!prevAddress) {
    prevAddress = store.wallet.account;
    return;
  }
  if (prevAddress === snapshot.wallet.account) return;
  onAddressChangeActions.forEach((runAction) => {
    runAction();
  });
  prevAddress = snapshot.wallet.account;
});


export const accountStore: AccountStoreType = store;

let prevAddress: string | undefined;
const onAddressChangeActions: (() => void)[] = [];

export type IAccountStore = Instance<typeof accountStore>;

export const web3ProviderStore = Web3Provider.create();

export type ITransfers = Instance<typeof Transfers>;
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
