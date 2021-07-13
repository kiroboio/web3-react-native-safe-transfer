import { values } from "mobx";
import { EthTransferResponseDto, EthTokenInfo } from "../dto/EthTransfersDto";
import { IAnyType } from "mobx-state-tree";
import { generateMnemonic } from "bip39";

import { isPlatform } from "@ionic/react";

import { castToSnapshot, getSnapshot, Instance, types} from "mobx-state-tree";

import { sha3, toBN } from "web3-utils";

import Web3 from "web3";
import { Connectors } from "../hooks/useWeb3";

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

export interface ITransferToken extends Instance<typeof Token> {}

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
  })
  .actions((self) => ({
    update(state: EthTransferResponseDto["state"], txid?: string) {
      self.updatedAt = new Date();
      self.state = state;
      if (txid) self.txid = txid;
    },
  }));

export interface ITransfer extends Instance<typeof Transfer> {}

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
    finished(err?: {
      err: { message: string };
    }) {
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

export interface ICmdStatus extends Instance<typeof CmdStatus> {}

const CmdModel = {
  is: types.optional(CmdStatus, {}),
};

const CmdActions = (self: { is: Instance<typeof CmdStatus> }) => ({
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

export interface ICmdActions extends Instance<typeof CmdActions> {}

const CmdBase = types.model("CMDBase", CmdModel).actions(CmdActions);

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

export interface IConnectCmd extends Instance<typeof ConnectCmd> {}

export const DisconnectCmd = CmdBase.named("DisconnectCmd").actions((self) => ({
  prepare() {
    if (!self.is.running) {
      self.is.prepared();
    }
  },
}));

export interface IDisconnectCmd extends Instance<typeof DisconnectCmd> {}

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

export interface ISafeTransfer extends Instance<typeof SafeTransfer> {}
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

export interface IStaking extends Instance<typeof Staking> {}
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

export interface IKiroToken extends Instance<typeof KiroToken> {}

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

export interface IERC20Tokens extends Instance<typeof ERC20Tokens> {}

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

export interface IDeviceInfo extends Instance<typeof DeviceInfo> {}

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
export const ApprovedCmd = CmdBase.named("ApprovedCmd")
  .props({
    amount: types.optional(
      types.string,
      "115792089237316195423570985008687907853269984665640564039457584007913129639935"
    ),
  })
  .actions((self) => ({
    prepare() {
      if (!self.is.running) {
        self.is.prepared();
      }
    },
  }));

export interface IApprovedCmd extends Instance<typeof ApprovedCmd> {}
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

export interface IDepositCmd extends Instance<typeof DepositCmd> {}
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

export interface IFetchCmd extends Instance<typeof FetchCmd> {}
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

export interface ICollectCmd extends Instance<typeof CollectCmd> {}
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
      } else if (self.address !== address) return;
      if (!self.map.has(transfer.id)) {
        self.count = self.count + 1;
      }
      self.map.set(transfer.id, Transfer.create(transfer));
    },
    update(
      address: string,
      transfer: {
        id: string;
        state: EthTransferResponseDto["state"];
        txid?: string;
      }
    ) {
      if (!self.address) {
        self.address = address;
      } else if (self.address !== address) return;
      self.map.get(transfer.id)?.update(transfer.state, transfer?.txid);
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
  }));
export interface IWallet extends Instance<typeof Wallet> {}
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
    deviceInfo: types.optional(DeviceInfo, {}),
    left: types.optional(types.number, 10),
    factor: types.optional(types.number, 1),
    maxRewards: types.optional(types.number, 10),
    gasPriceMap: types.map(types.string),
  })
  .views((self) => ({
    get safeTransferContract() {
      return self.safeTransferMap.get(getChainName(self.chainId));
    },
    get kiroTokenContract() {
      return self.kiroTokenMap.get(getChainName(self.chainId));
    },
    get ERC20TokensContract() {
      return (
        self.ERC20TokensMap.get(
          getChainName(self.chainId > 0 ? self.chainId : 1)
        )?.list || []
      );
    },
    get stakingContract() {
      return self.stakingMap.get(getChainName(self.chainId));
    },
    get gasPrice() {
      return (
        self.gasPriceMap.get(
          getChainName(self.chainId > 0 ? self.chainId : 1)
        ) || ""
      );
    },
    approvedToken(symbol: string, amount: string) {
      const { toBN } = Web3.utils;
      const isApproved = !(
        symbol !== "ETH" && toBN(self.allowance).cmp(toBN(amount)) === -1
      );
      if (isApproved && self.approvedCmd.is.running) self.approvedCmd.done();
      return isApproved;
    },
    transferFees(amount: string) {
      const safeTransfer = self.safeTransferMap.get(
        getChainName(self.chainId > 0 ? self.chainId : 1)
      );
      if (safeTransfer)
        return safeTransfer.fees(parseFloat(amount) > 0 ? amount : "0");
      return "";
    },
    transferReward(amount: string, fees: string) {
      const safeTransfer = self.safeTransferMap.get(
        getChainName(self.chainId > 0 ? self.chainId : 1)
      );
      if (safeTransfer) {
        if (self.left <= 0) return 0;
        return (
          self.factor *
          +safeTransfer.reward(
            parseFloat(amount) ? amount : "0",
            self.stakingBalance || "0",
            parseFloat(fees) ? fees : "0"
          )
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
    approve() {
      self.approvedCmd.prepare();
    },
    /**
     *
     * @param {string} params.to ethereum address to send
     * @param {string} params.value value to send in wei
     * @param {string} params.passcode secure code to collect or retrieve transaction
     * @param {string} params.message optional message to send
     *
     * @returns {void}
     */
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
      const secretHash = sha3(
        sha3(privateSalt + sha3(publicSalt + passcode)) || ""
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
      console.log("connect preparee");
    },
    disconnect() {
      self.disconnectCmd.prepare();
    },
    setAddress(address: string) {
      self.address = address;
    },
    setActive(newActive: boolean) {
      self.active = newActive;
    },
    setChainId(chainId: number) {
      self.chainId = chainId;
    },
    setBalance(balance: string) {
      self.balance = balance;
    },
    setTokenBalance(balance: string) {
      self.tokenBalance = balance;
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
    setRewardsParams(factor: number, left: number) {
      self.factor = factor;
      self.left = left;
    },
    setMaxRewards(maxRewards: number) {
      self.maxRewards = maxRewards;
    },
    setGasPrice(chainName: string, gasPrice: string) {
      self.gasPriceMap.set(chainName, gasPrice);
    },
  }));

export const accountStore = Account.create();
export const web3ProviderStore = Web3Provider.create();


export interface IWeb3Provider extends Instance<typeof Web3Provider> {}
export interface IAccount extends Instance<typeof Account> {}


//onSnapshot(accountStore, (snapshot) => console.log('zxc', snapshot))
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
