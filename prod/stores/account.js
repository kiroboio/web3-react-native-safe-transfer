var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { values } from "mobx";
import { applySnapshot } from "mobx-state-tree";
import { generateMnemonic } from "bip39";
import { v4 as generateId } from "uuid";
import { timestampWithTimeoutInSecondsToTimeLeftInSeconds } from "../utils/time";
import { castToSnapshot, getSnapshot, onSnapshot, types, } from "mobx-state-tree";
import { sha3, toBN } from "web3-utils";
import Web3 from "web3";
import { isValidAddress } from "../utils/address";
import { Chainlink, BNB, USDT, Kirobo, UNI, SUSHI, } from "../icons";
var getChainName = function (chainId) {
    if (chainId === "1")
        return "main";
    if (chainId === "4")
        return "rinkeby";
    return "";
};
var StatePrimitive = types.custom({
    name: "state",
    fromSnapshot: function (value) {
        return value;
    },
    toSnapshot: function (value) {
        return value;
    },
    isTargetType: function () {
        return true;
    },
    getValidationMessage: function () {
        return "";
        // if (/^-?\d+\.\d+$/.test(value)) return "" // OK
        // return `'${value}' doesn't look like a valid state`
    },
});
export var Token = types.model({
    address: types.optional(types.string, ""),
    decimals: types.optional(types.number, 0),
    symbol: types.optional(types.string, ""),
    type: types.optional(types.string, ""),
});
export var Transfer = types.model({
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
export var CmdPersistanceStatus = types
    .model({
    ready: types.optional(types.boolean, false),
    running: types.optional(types.boolean, false),
    done: types.optional(types.boolean, false),
    failed: types.optional(types.boolean, false),
    withFailMessage: types.optional(types.string, ""),
    withId: types.optional(types.number, 0),
})
    .actions(function (self) {
    var clear = function () {
        self.ready = false;
        self.running = false;
        self.done = false;
        self.failed = false;
        self.withFailMessage = "";
        self.withId = self.withId + 1;
    };
    var prepared = function () {
        self.ready = true;
        self.running = false;
        self.done = false;
        self.failed = false;
        self.withFailMessage = "";
        self.withId = self.withId + 1;
    };
    var started = function () {
        self.running = true;
        self.done = false;
        self.failed = false;
    };
    var finished = function (err) {
        self.ready = false;
        self.running = false;
        if (err) {
            self.failed = true;
            self.withFailMessage = err.err.message;
        }
        else {
            self.done = true;
            self.failed = false;
            self.withFailMessage = "";
        }
    };
    return { clear: clear, prepared: prepared, started: started, finished: finished };
});
export var CmdStatus = CmdPersistanceStatus.named("CmdStatus").actions(function (self) {
    var initialState = {};
    var afterCreate = function () {
        initialState = getSnapshot(self);
    };
    var resetSelf = function () { return applySnapshot(self, initialState); };
    onAddressChangeActions.push(resetSelf);
    return __assign({ afterCreate: afterCreate }, CmdPersistanceStatus.actions);
});
var CmdModel = {
    is: types.optional(CmdStatus, {}),
};
var CmdPersistentModel = {
    is: types.optional(CmdPersistanceStatus, {}),
};
var CmdActions = function (self) { return ({
    prepare: function () {
        self.is.prepared();
    },
    start: function () {
        self.is.started();
    },
    done: function () {
        self.is.finished();
    },
    failed: function (_a) {
        var message = _a.message;
        self.is.finished({ err: { message: message } });
    },
    clearErrors: function () {
        self.is.failed = false;
        self.is.withFailMessage = "";
    },
    clear: function () {
        self.is.clear();
    },
}); };
var CmdBase = types.model("CMDBase", CmdModel).actions(CmdActions);
var CmdPersistentBase = types
    .model("CmdPersistentBase", CmdPersistentModel)
    .actions(CmdActions);
export var SendCmd = CmdBase.named("SendCmd")
    .props({
    to: types.optional(types.string, ""),
    value: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    prepare: function (params) {
        if (!self.is.running) {
            self.to = params.to;
            self.value = params.value;
            self.is.prepared();
        }
    },
}); });
export var ConnectCmd = CmdPersistentBase.named("ConnectCmd")
    .props({
    connector: types.optional(types.string, ""),
    isConnected: types.optional(types.boolean, false),
})
    .actions(function (self) { return ({
    prepare: function (connector) {
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
    clearCmd: function () {
        self.isConnected = false;
        self.connector = "";
        self.clear();
    },
}); });
export var DisconnectCmd = CmdPersistentBase.named("DisconnectCmd").actions(function (self) { return ({
    prepare: function () {
        if (!self.is.running) {
            self.is.prepared();
        }
    },
}); });
export var SafeTransfer = types
    .model("SafeTransfer", {
    address: types.optional(types.string, ""),
    synced: types.optional(types.boolean, false),
    feesFormula: types.optional(types.string, ""),
    rewardFormula: types.optional(types.string, ""),
})
    .volatile(function () { return ({
    fees: function (value) { return value || "0"; },
    reward: function (value, stakingValue) {
        return value || stakingValue || "0";
    },
}); })
    .actions(function (self) { return ({
    setData: function (data) {
        if (self.feesFormula !== data.feesFormula && data.feesFormula) {
            try {
                var formula_1 = JSON.parse(data.feesFormula);
                self.fees = function (value) {
                    // eslint-disable-next-line no-new-func
                    return new Function(formula_1.arguments, formula_1.body)(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Web3.utils.BN, toBN, value);
                };
                self.feesFormula = data.feesFormula;
            }
            catch (e) {
                console.log("zxc error", e);
            }
        }
        if (self.rewardFormula !== data.rewardFormula && data.rewardFormula) {
            try {
                var formula_2 = JSON.parse(data.rewardFormula);
                self.reward = function (value, stakingValue) {
                    // eslint-disable-next-line no-new-func
                    return new Function(formula_2.arguments, formula_2.body)(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Web3.utils.BN, toBN, value, stakingValue);
                };
                self.rewardFormula = data.rewardFormula;
            }
            catch (e) {
                console.log("zxc error", e);
            }
        }
        self.synced = data.synced;
        self.address = data.address;
    },
}); });
export var Staking = types
    .model("Staking", {
    address: types.optional(types.string, ""),
    balance: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    setData: function (_a) {
        var address = _a.address;
        self.address = address;
    },
}); });
export var KiroToken = types
    .model("KiroToken", {
    address: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    setData: function (_a) {
        var address = _a.address;
        self.address = address;
    },
}); });
export var ERC20Token = types
    .model("ERC20Token", {
    address: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    symbol: types.optional(types.string, ""),
    decimals: types.optional(types.number, 18),
    balance: types.optional(types.string, ""),
    rate: types.optional(types.number, 0),
})
    .views(function (self) { return ({
    get tokenBalance() {
        return self.balance;
    },
}); })
    .actions(function (self) { return ({
    setData: function (_a) {
        var address = _a.address, name = _a.name, symbol = _a.symbol, decimals = _a.decimals, balance = _a.balance;
        self.address = address;
        self.name = name;
        self.symbol = symbol;
        self.decimals = decimals;
        self.balance = balance;
    },
    setBalance: function (balance) {
        self.balance = balance;
    },
    clearBalance: function () {
        self.balance = "";
    },
    setRate: function (rate) {
        self.rate = rate;
    },
}); });
export var ERC20Tokens = types
    .model("ERC20Token", {
    map: types.map(ERC20Token),
})
    .views(function (self) { return ({
    get list() {
        return Array.from(self.map.values());
    },
}); })
    .actions(function (self) { return ({
    addToken: function (_a) {
        var address = _a.address, name = _a.name, symbol = _a.symbol, decimals = _a.decimals, balance = _a.balance, rate = _a.rate;
        self.map.set(address, ERC20Token.create({ address: address, name: name, symbol: symbol, decimals: decimals, balance: balance, rate: rate }));
    },
    setBalance: function (address, balance) {
        var _a;
        (_a = self.map.get(address)) === null || _a === void 0 ? void 0 : _a.setBalance(balance);
    },
    clearBalances: function () {
        self.map.forEach(function (erc20Token) { return erc20Token.clearBalance(); });
    },
    setRate: function (address, rate) {
        var _a;
        (_a = self.map.get(address)) === null || _a === void 0 ? void 0 : _a.setRate(rate);
    },
}); });
export var DeviceInfo = types
    .model("DeviceInfo", {
    type: types.optional(types.string, ""),
    haveMetaMask: types.optional(types.boolean, false),
    ethereumProvider: types.optional(types.boolean, false),
    ready: types.optional(types.boolean, false),
})
    .actions(function (self) { return ({
    setData: function (_a) {
        var type = _a.type, haveMetaMask = _a.haveMetaMask, ethereumProvider = _a.ethereumProvider, ready = _a.ready;
        self.type = type;
        self.haveMetaMask = haveMetaMask;
        self.ethereumProvider = ethereumProvider;
        self.ready = ready;
    },
}); });
var EthAddressPrimitive = types.custom({
    name: "Eth Address",
    fromSnapshot: function (value) {
        return value;
    },
    toSnapshot: function (value) {
        return value.toString();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isTargetType: function (value) {
        return value instanceof String;
    },
    getValidationMessage: function (value) {
        if (value === "" || /^0x[a-fA-F0-9]{40}$/.test(value))
            return "";
        return "'" + value + "' doesn't look like a valid ethereum address";
    },
});
export var ApprovedCmd = CmdBase.named("ApprovedCmd")
    .props({
    amount: types.optional(types.string, "1.157920892373162e+59"),
})
    .actions(function (self) { return ({
    prepare: function (params) {
        if (!self.is.running) {
            self.amount = params.amount;
            self.is.prepared();
        }
    },
}); });
export var DepositCmd = CmdBase.named("DepositCmd")
    .props({
    from: types.optional(types.string, ""),
    to: types.optional(types.string, ""),
    value: types.optional(types.string, ""),
    publicSalt: types.optional(types.string, ""),
    privateSalt: types.optional(types.string, ""),
    secretHash: types.optional(types.string, ""),
    message: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    prepare: function (params) {
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
}); });
export var FetchCmd = CmdBase.named("FetchCmd")
    .props({
    list: types.optional(types.string, ""),
    amount: types.optional(types.number, 0),
})
    .actions(function (self) { return ({
    prepare: function (params) {
        if (!self.is.running) {
            self.list = params.list;
            self.amount = params.amount;
            self.is.prepared();
        }
    },
}); });
export var RetrieveCmd = CmdBase.named("RetrieveCmd")
    .props({
    id: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    prepare: function (params) {
        if (!self.is.running) {
            self.id = params.id;
            self.is.prepared();
        }
    },
}); });
export var CollectCmd = CmdBase.named("CollectCmd")
    .props({
    id: types.optional(types.string, ""),
    key: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    prepare: function (params) {
        if (!self.is.running) {
            self.id = params.id;
            self.key = params.key;
            self.is.prepared();
        }
    },
}); });
export var Transfers = types
    .model("Transfers", {
    name: types.string,
    map: types.map(Transfer),
    count: types.optional(types.number, 0),
    fetched: types.optional(types.number, 0),
    address: types.optional(types.string, ""),
    fetchCmd: types.optional(FetchCmd, {}),
})
    .views(function (self) { return ({
    get list() {
        return Array.from(self.map.values());
    },
}); })
    .actions(function (self) { return ({
    setFetched: function (count) {
        self.fetched = count;
    },
    add: function (_a) {
        var address = _a.address, transfers = _a.transfers, count = _a.count;
        if (!self.address) {
            self.address = address;
        }
        else if (self.address !== address) {
            return;
        }
        for (var _i = 0, transfers_1 = transfers; _i < transfers_1.length; _i++) {
            var transfer = transfers_1[_i];
            self.map.put(Transfer.create(transfer));
        }
        self.count = count;
    },
    upsert: function (address, transfer) {
        if (!self.address) {
            self.address = address;
        }
        else if (self.address !== address) {
            return;
        }
        if (!self.map.has(transfer.id)) {
            self.count = self.count + 1;
        }
        self.map.set(transfer.id, Transfer.create(transfer));
    },
    delete: function (address, id) {
        if (self.address === address) {
            if (self.map.delete(id)) {
                self.count = self.count - 1;
            }
        }
    },
    remove: function (address, filter) {
        var res = [];
        if (self.address === address) {
            self.map.forEach(function (transfer) {
                if (filter(transfer)) {
                    res.push(castToSnapshot(getSnapshot(transfer)));
                    if (self.map.delete(transfer.id)) {
                        self.count = self.count - 1;
                    }
                }
            });
        }
        return res;
    },
    clear: function () {
        self.map.clear();
        self.fetched = 0;
        self.count = 0;
        // self.fetchId = self.fetchId + 1
        self.address = "";
        self.fetchCmd.clear();
    },
    fetch: function (amount) {
        self.fetchCmd.prepare({ list: self.name, amount: amount });
    },
}); })
    .views(function (self) { return ({
    get list() {
        return (values(self.map)
            .filter(function () { return true; })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .sort(function (a, b) {
            return a.updatedAt.getTime() < b.updatedAt.getTime()
                ? 1
                : a.updatedAt.getTime() === b.updatedAt.getTime()
                    ? 0
                    : -1;
        }));
    },
    get activeCount() {
        var count = 0;
        self.map.forEach(function (item) {
            if (item.state === "new")
                count += 1;
        });
        return count;
    },
}); });
var Mnemonic = types
    .model("Mnemonic", {
    data: types.optional(types.string, ""),
    clearCmd: types.optional(CmdBase.named("ClearCmd"), {}),
    removeCmd: types.optional(CmdBase.named("RemoveCmd"), {}),
    restoreCmd: types.optional(CmdBase.named("RestoreCmd"), {}),
})
    .actions(function (self) { return ({
    set: function (mnemonic) {
        self.data = mnemonic ? mnemonic : "";
    },
    clear: function () {
        self.clearCmd.is.prepared();
    },
    remove: function () {
        self.removeCmd.is.prepared();
    },
    restore: function () {
        self.restoreCmd.is.prepared();
    },
}); });
var WalletAddressCmd = CmdBase.named("WalletAddressCmd")
    .props({
    address: types.optional(types.string, ""),
})
    .actions(function (self) { return ({
    prepare: function (address) {
        if (self.is.running)
            return;
        self.address = address ? address : "";
        self.is.prepared();
    },
}); });
var Wallet = types
    .model("Wallet", {
    mnemonic: types.optional(Mnemonic, {}),
    activeAccount: types.optional(types.string, ""),
    accounts: types.array(types.string),
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
    .actions(function (self) { return ({
    removeWalletAddress: function (address) {
        self.removeAddressCmd.prepare(address);
    },
    addWalletAddress: function () {
        self.addAddressCmd.prepare();
    },
    setAccounts: function (accounts) {
        self.accounts = accounts;
    },
    setActiveAccount: function (activeAccount) {
        self.activeAccount = activeAccount || "";
    },
    generateMnemonic: function () {
        self.mnemonic.set(generateMnemonic());
    },
    setMnemonic: function (mnemonic) {
        self.mnemonic.set(mnemonic);
    },
    getMnemonic: function () {
        return self.mnemonic.data;
    },
    tryRestoreMnemonicFromStorage: function () {
        self.mnemonic.restore();
    },
    clearMnemonic: function () {
        self.mnemonic.clear();
    },
    removeMnemonic: function () {
        self.mnemonic.remove();
    },
    changeMnemonic: function (mnemonic) {
        self.mnemonic.set(mnemonic);
    },
    setBalance: function (balance) {
        self.balance = balance;
    },
    setBalanceInUsd: function (balance) {
        self.balanceInUsd = balance;
    },
    setTokenBalance: function (balance) {
        self.tokenBalance = balance;
    },
    setAccount: function (account) {
        if (!account) {
            self.account = "";
            return;
        }
        if (isValidAddress(account)) {
            self.account = account;
            return;
        }
    },
}); });
var OnChainWalletType = types.enumeration(["onChain", "regular"]);
var TransactionState = types.enumeration([
    "pending",
    "success",
    "failed",
    "idle",
    "queue",
    "rejected",
    "init",
]);
var TransactionLog = types.model({
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
var TransactionReceipt = types.model({
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
export var TransactionType = types.enumeration([
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
var OnChainTransaction = types
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
    .actions(function (self) {
    var updateStatus = function (status) {
        self.receipt.status = status;
    };
    var update = function (trx) {
        self = trx;
    };
    var setType = function (type) {
        self.type = type;
    };
    var setFrom = function (from) {
        self.from = from;
    };
    var setValueToDisplay = function (value) {
        self.valueToDisplay = value;
    };
    var setValueInWei = function (value) {
        self.valueInWei = value;
    };
    return {
        updateStatus: updateStatus,
        update: update,
        setType: setType,
        setFrom: setFrom,
        setValueToDisplay: setValueToDisplay,
        setValueInWei: setValueInWei,
    };
});
var ChainBackupData = types.model({
    backupAddress: types.optional(types.string, ""),
    backupTimeout: types.optional(types.number, 0),
});
var OnChainTransactions = types
    .model({
    items: types.array(OnChainTransaction),
    currentTransactionId: types.optional(types.string, ""),
    isSigningTransaction: types.optional(types.boolean, false),
    isWaitingForSigner: types.optional(types.boolean, false),
    backupData: types.optional(ChainBackupData, {}),
})
    .actions(function (self) {
    var initialState = {};
    var resetSelf = function () { return applySnapshot(self, initialState); };
    onAddressChangeActions.push(resetSelf);
    var afterCreate = function () {
        initialState = getSnapshot(self);
    };
    var createTransaction = function (_a) {
        var to = _a.to, from = _a.from, value = _a.value, valueToDisplay = _a.valueToDisplay, valueInWei = _a.valueInWei, type = _a.type, wallet = _a.wallet, data = _a.data, gas = _a.gas;
        var newTransaction = {
            to: to || "",
            value: value,
            type: type,
            wallet: wallet,
            from: from || "",
            valueToDisplay: valueToDisplay || "",
            valueInWei: valueInWei || "",
            data: data || "",
            id: generateId(),
            state: "idle",
            gas: gas || 0,
        };
        var transaction = OnChainTransaction.create(newTransaction);
        self.currentTransactionId = transaction.id;
        self.items.push(transaction);
        return transaction;
    };
    var clear = function () {
        self.items.clear();
    };
    var getTransactionById = function (id) {
        if (!id)
            return;
        var transaction = self.items.find(function (trx) { return trx.id === id; });
        return transaction;
    };
    var getLastTransaction = function () {
        var lastTransaction = self.items[self.items.length - 1];
        return lastTransaction;
    };
    var updatePendingTransactionByHash = function (hash, status) {
        var transaction = self.items.find(function (item) { return item.txHash === hash; });
        transaction === null || transaction === void 0 ? void 0 : transaction.updateStatus(status);
    };
    var updateTransactionState = function (id, state) {
        var transaction = self.items.find(function (trx) { return trx.id === id; });
        if (!transaction)
            return;
        transaction.state = state;
    };
    var updateTransactionReceipt = function (id, receipt) {
        var transaction = self.items.find(function (trx) { return trx.id === id; });
        if (!transaction)
            return;
        var blockHash = receipt.blockHash, blockNumber = receipt.blockNumber, transactionHash = receipt.transactionHash, transactionIndex = receipt.transactionIndex, to = receipt.to, from = receipt.from, gasUsed = receipt.gasUsed, cumulativeGasUsed = receipt.cumulativeGasUsed, status = receipt.status, logs = receipt.logs, logsBloom = receipt.logsBloom, contractAddress = receipt.contractAddress;
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
        logs.forEach(function (log) {
            var address = log.address, blockHash = log.blockHash, blockNumber = log.blockNumber, data = log.data, id = log.id, logIndex = log.logIndex, removed = log.removed, transactionHash = log.transactionHash, transactionIndex = log.transactionIndex;
            transaction.receipt.logs.push({
                address: address,
                blockHash: blockHash,
                blockNumber: blockNumber,
                data: data,
                id: id,
                logIndex: logIndex,
                removed: removed,
                transactionHash: transactionHash,
                transactionIndex: transactionIndex,
            });
        });
    };
    var updateTransactionRequest = function (id, trx) {
        var transaction = self.items.find(function (trx) { return trx.id === id; });
        if (!transaction)
            return;
        transaction.update(trx);
    };
    return {
        afterCreate: afterCreate,
        createTransaction: createTransaction,
        clear: clear,
        getTransactionById: getTransactionById,
        getLastTransaction: getLastTransaction,
        updatePendingTransactionByHash: updatePendingTransactionByHash,
        updateTransactionReceipt: updateTransactionReceipt,
        updateTransactionRequest: updateTransactionRequest,
        updateTransactionState: updateTransactionState,
    };
});
export var DrawerContent;
(function (DrawerContent) {
    DrawerContent["NONE"] = "none";
    DrawerContent["BACKUP"] = "backup";
    DrawerContent["CREATE_WALLET"] = "createWallet";
    DrawerContent["DELETE_BACKUP"] = "delete_backup";
    DrawerContent["MOVE"] = "move";
    DrawerContent["RESET_BACKUP_TIMER"] = "resetBackupTimer";
    DrawerContent["SEND"] = "send";
    DrawerContent["SEND_TOKENS"] = "sendTokens";
    DrawerContent["MOVE_TOKENS"] = "moveTokens";
    DrawerContent["START_TIMER"] = "startTimer";
    DrawerContent["CREATE_HEIR"] = "createHeir";
    DrawerContent["EDIT_HEIR"] = "editHeir";
    DrawerContent["START_INHERITANCE_TIMER"] = "startInheritanceTimer";
    DrawerContent["WALLET_SETTINGS"] = "walletSettings";
})(DrawerContent || (DrawerContent = {}));
var NONE = DrawerContent.NONE, BACKUP = DrawerContent.BACKUP, CREATE_WALLET = DrawerContent.CREATE_WALLET, DELETE_BACKUP = DrawerContent.DELETE_BACKUP, MOVE = DrawerContent.MOVE, RESET_BACKUP_TIMER = DrawerContent.RESET_BACKUP_TIMER, SEND = DrawerContent.SEND, SEND_TOKENS = DrawerContent.SEND_TOKENS, MOVE_TOKENS = DrawerContent.MOVE_TOKENS, START_TIMER = DrawerContent.START_TIMER, START_INHERITANCE_TIMER = DrawerContent.START_INHERITANCE_TIMER, CREATE_HEIR = DrawerContent.CREATE_HEIR, EDIT_HEIR = DrawerContent.EDIT_HEIR, WALLET_SETTINGS = DrawerContent.WALLET_SETTINGS;
var OnChainTransferType = types.enumeration([
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
var OnChainTransfer = types
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
    .actions(function (self) { return ({
    setWalletType: function (wallet) {
        self.wallet = wallet;
    },
    setTo: function (to) {
        self.to = to;
    },
    setFrom: function (from) {
        self.from = from;
    },
    setAmount: function (amount) {
        self.amount = amount;
    },
    setDestination: function (destination) {
        self.destination = destination;
    },
    setType: function (type) {
        self.type = type;
    },
    setHeirId: function (id) {
        self.heirId = id;
    },
    setHeirAddress: function (address) {
        self.heirAddress = address;
    },
    setHeirPercent: function (percent) {
        self.heirPercent = percent;
    },
}); });
export var tokens = {
    // DAI: { icon: LogoDai, label: 'DAI', address: '0x0d5263b7969144a852d58505602f630f9b20239d' },
    // ANT: { icon: LogoAnt, label: 'ANT', address: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea' },
    none: {
        icon: function () { return null; },
        label: null,
        address: { "4": "", "1": "", notSupportedChainId: "" },
    },
    KIRO: {
        icon: Kirobo,
        label: "KIRO",
        address: {
            "4": "0xB678E95F83aF08E7598EC21533F7585E83272799",
            "1": "0xb1191f691a355b43542bea9b8847bc73e7abb137",
            notSupportedChainId: "",
        },
    },
    LINK: {
        icon: Chainlink,
        label: "LINK",
        address: {
            "4": "0x01be23585060835e02b77ef475b0cc51aa1e0709",
            "1": "0x514910771af9ca656af840dff83e8264ecf986ca",
            notSupportedChainId: "",
        },
    },
    USDT: {
        icon: USDT,
        label: "Tether",
        address: {
            "4": "0xb19ed150325db38b397cb134533cb45a2b2b62a3",
            "1": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            notSupportedChainId: "",
        },
    },
    BNB: {
        icon: BNB,
        label: "Binance Coin",
        address: {
            "4": "0x2211dc5e1b4c34efe0027561e2f36c2d63fbd01c",
            "1": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
            notSupportedChainId: "",
        },
    },
    UNI: {
        icon: UNI,
        label: "Uniswap",
        address: {
            "4": "0x7f0fae34de2b34d13da640afc2273366919cd0b2",
            "1": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            notSupportedChainId: "",
        },
    },
    SUSHI: {
        icon: SUSHI,
        label: "Sushi Token",
        address: {
            "4": "0x1bfc4d6b40591b8c8e1ef8a36e4f15d54d760110",
            "1": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
            notSupportedChainId: "",
        },
    },
};
export var OnChainToken = types.enumeration(Object.keys(tokens).map(function (key) { return key; }));
var OnChainTokens = types
    .model({
    token: types.optional(OnChainToken, "KIRO"),
    transactions: types.array(OnChainTransaction),
    isSigningTransaction: types.optional(types.boolean, false),
    isWaitingForSigner: types.optional(types.boolean, false),
})
    .actions(function (self) { return ({
    setToken: function (token) {
        self.token = token;
    },
    getToken: function () {
        return self.token;
    },
}); });
var OnChainBackupStates = types.enumeration([
    "PENDING",
    "REGISTERED",
    "ENABLED",
    "ACTIVATED",
    "NONE",
]);
var OnChainBackup = types
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
    updateBackupDataCmd: types.optional(CmdBase.named("updateBackupDataCmd"), {}),
})
    .views(function (self) { return ({
    get isCmdRunning() {
        return (self.createCmd.is.running ||
            self.rejectCmd.is.running ||
            self.removeCmd.is.running ||
            self.acceptCmd.is.running ||
            self.startTimerCmd.is.running ||
            self.resetTimerCmd.is.running ||
            self.activateByTimerCmd.is.running);
    },
    get timeLeft() {
        if (!parseInt(self.timestamp) || !parseInt(self.timeout))
            return 0;
        return timestampWithTimeoutInSecondsToTimeLeftInSeconds(self.timestamp, self.timeout);
    },
    isBackup: function (address) {
        return self.walletAddress === address;
    },
}); })
    .actions(function (self) {
    var initialState = {};
    var resetSelf = function () { return applySnapshot(self, initialState); };
    onAddressChangeActions.push(resetSelf);
    return {
        afterCreate: function () {
            initialState = getSnapshot(self);
        },
        clear: function () {
            self.address = "";
            self.state = "NONE";
        },
        setAddress: function (address) {
            if (isValidAddress(address)) {
                self.address = address;
                return;
            }
        },
        setIsOwner: function (isOwner) {
            self.isOwner = Boolean(isOwner);
        },
        setWalletAddress: function (walletAddress) {
            if (isValidAddress(walletAddress)) {
                self.walletAddress = walletAddress;
                return;
            }
            self.walletAddress = "";
        },
        setOwnerAddress: function (address) {
            self.ownerAddress = address;
        },
        setState: function (state) {
            self.state = state;
        },
        setTimeout: function (timeout) {
            self.timeout = timeout;
        },
        setFormTimeout: function (timeout) {
            self.formTimeout = timeout;
        },
        setTimestamp: function (timestamp) {
            self.timestamp = timestamp;
        },
    };
});
var InheritanceForm = types.model({
    id: types.optional(types.string, ""),
    wallet: types.optional(types.string, ""),
    percent: types.optional(types.number, 0),
});
var Heir = types
    .model({
    id: types.optional(types.string, ""),
    isSent: types.optional(types.boolean, false),
    isRegistered: types.optional(types.boolean, false),
    walletAddress: types.optional(types.string, ""),
    percent: types.optional(types.number, 0),
})
    .actions(function (self) { return ({
    setName: function (id) {
        self.id = id;
    },
    setIsSent: function (isSent) {
        self.isSent = isSent;
    },
    setIsRegistered: function (isRegistered) {
        self.isRegistered = isRegistered;
    },
    setWalletAddress: function (address) {
        self.walletAddress = address;
    },
    setPercent: function (percent) {
        self.percent = percent;
    },
}); });
var Inheritance = types
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
    clearInheritanceCmd: types.optional(CmdBase.named("clearInheritanceCmd"), {}),
    setHeirsCmd: types.optional(CmdBase.named("setHeirsCmd"), {}),
    activateCmd: types.optional(CmdBase.named("activateCmd"), {}),
    activateByTimerCmd: types.optional(CmdBase.named("activateByTimerCmd"), {}),
    updateHeirsCmd: types.optional(CmdBase.named("updateHeirsCmd"), {}),
    isChanged: types.optional(types.boolean, false),
})
    .views(function (self) { return ({
    get isCmdRunning() {
        return (self.setInheritanceCmd.is.running ||
            self.clearInheritanceCmd.is.running ||
            self.setHeirsCmd.is.running ||
            self.activateCmd.is.running ||
            self.updateHeirsCmd.is.running);
    },
    get timeLeft() {
        if (!parseInt(self.timestamp) || !parseInt(self.timeout))
            return 0;
        return timestampWithTimeoutInSecondsToTimeLeftInSeconds(self.timestamp, self.timeout);
    },
}); })
    .actions(function (self) {
    var initialState = {};
    var resetSelf = function () { return applySnapshot(self, initialState); };
    onAddressChangeActions.push(resetSelf);
    return {
        afterCreate: function () {
            initialState = getSnapshot(self);
        },
        clear: function () {
            self.heirs.clear();
            self.initHeirs.clear();
            self.totalPercent = 0;
        },
        setTimestamp: function (seconds) {
            self.timestamp = seconds;
        },
        setTimeout: function (seconds) {
            self.timeout = seconds;
        },
        setTimeLeftCurrent: function (seconds) {
            self.timeLeftCurrent = seconds;
        },
        setTotalTransferred: function (totalTransferred) {
            if (parseFloat(totalTransferred) === 0) {
                self.totalTransferred = "";
                return;
            }
            self.totalTransferred = totalTransferred;
        },
        setIsChanged: function (isChanged) {
            self.isChanged = isChanged;
        },
        addHeir: function (heir, isInit) {
            heir.id = generateId();
            self.heirs.push(heir);
            self.totalPercent =
                self.totalPercent + (heir.percent ? heir.percent : 0);
            if (isInit) {
                self.initHeirs.push(heir);
            }
            else {
                self.isChanged = true;
            }
        },
        editHeir: function (heir) {
            self.isChanged = true;
            var currentHeir = self.heirs.find(function (item) { return item.id === heir.id; });
            var percentChange = heir.percent - ((currentHeir === null || currentHeir === void 0 ? void 0 : currentHeir.percent) || 0);
            self.totalPercent = self.totalPercent + percentChange;
            currentHeir === null || currentHeir === void 0 ? void 0 : currentHeir.setPercent(heir.percent);
        },
        removeHeirById: function (id) {
            self.isChanged = true;
            var currentHeir = self.heirs.find(function (item) { return item.id === id; });
            if (!currentHeir)
                return;
            self.totalPercent = self.totalPercent - currentHeir.percent;
            self.heirs.remove(currentHeir);
        },
        resetChanges: function () {
            self.heirs.replace(self.initHeirs.map(function (i) { return (__assign({}, i)); }));
            self.totalPercent = 0;
            self.heirs.forEach(function (h) {
                self.totalPercent += h.percent;
            });
            self.isChanged = false;
        },
        saveChanges: function () {
            self.initHeirs.replace(self.heirs.map(function (i) { return (__assign({}, i)); }));
            self.isChanged = false;
        },
        setIsActivated: function (isActivated) {
            self.isActivated = isActivated;
        },
        setIsEnabled: function (isEnabled) {
            self.isEnabled = isEnabled;
        },
    };
});
var onChainWalletDetails = types
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
    createTokenWalletCmd: types.optional(CmdBase.named("createTokenWalletCmd"), {}),
    createWalletTransactionCmd: types.optional(CmdBase.named("createWalletTransactionCmd"), {}),
    balanceCmd: types.optional(CmdBase.named("onChainWalletBalanceCmd"), {}),
    tokenBalanceCmd: types.optional(CmdBase.named("onChainWalletTokenBalanceCmd"), {}),
})
    .actions(function (self) { return ({
    setAccount: function (account) {
        if (!account) {
            self.account = "";
            return;
        }
        if (isValidAddress(account)) {
            self.account = account;
            return;
        }
    },
    setIsOwner: function (isOwner) {
        self.isOwner = isOwner;
    },
    setIsNoWallet: function (isNoWallet) {
        self.isNoWallet = isNoWallet;
    },
    setDataIsLoaded: function (dataIsLoaded) {
        self.dataIsLoaded = dataIsLoaded;
    },
    setIsBackup: function (isBackup) {
        self.isBackup = isBackup;
    },
    setBalance: function (balance) {
        self.balance = balance;
    },
    setBalanceInUsd: function (balance) {
        self.balanceInUsd = balance;
    },
    setTokenBalance: function (balance) {
        self.tokenBalance = balance;
    },
}); });
export var AVAILABLE_RPC_URLS = {
    "1": "wss://mainnet.infura.io/ws/v3/14c73ecdbcaa464585aa7c438fdf6a77",
    "4": "wss://rinkeby.infura.io/ws/v3/14c73ecdbcaa464585aa7c438fdf6a77",
};
export var RPC_URLS = __assign(__assign({}, AVAILABLE_RPC_URLS), { notSupportedChainId: "notSupportedChainId" });
var ChainId = types.enumeration(Object.keys(RPC_URLS).map(function (id) {
    var typedId = id;
    return typedId;
}));
export var Account = types
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
    .views(function (self) { return ({
    get safeTransferContract() {
        return self.safeTransferMap.get(getChainName(self.chainId));
    },
    get kiroTokenContract() {
        return self.kiroTokenMap.get(getChainName(self.chainId));
    },
    get ERC20TokensContract() {
        var _a;
        return ((_a = self.ERC20TokensMap.get(getChainName(self.chainId))) === null || _a === void 0 ? void 0 : _a.list) || [];
    },
    get stakingContract() {
        return self.stakingMap.get(getChainName(self.chainId));
    },
    approvedToken: function (symbol, amount) {
        return !(symbol !== "ETH" && BigInt(self.allowance) < BigInt(amount));
    },
    transferFees: function (amount) {
        var safeTransfer = self.safeTransferMap.get(getChainName(self.chainId));
        if (safeTransfer) {
            var testAmount = parseFloat(amount);
            return safeTransfer.fees(testAmount > 0 ? amount : "0");
        }
        return "";
    },
    transferReward: function (amount) {
        var chainName = getChainName(self.chainId);
        var safeTransfer = self.safeTransferMap.get(chainName);
        if (safeTransfer) {
            var testAmount = parseFloat(amount);
            return safeTransfer.reward(testAmount > 0 ? amount : "0", self.stakingBalance || "0");
        }
        return "";
    },
    ERC20TokenList: function (chainName) {
        var tokens = self.ERC20TokensMap.get(chainName);
        return tokens ? tokens.list : [];
    },
}); })
    .actions(function (self) { return ({
    setExchangeToUsdRate: function (rate) {
        self.exchangeToUsdRate = rate;
    },
    setIsAuthed: function (isAuthed) {
        self.isAuthed = isAuthed;
    },
    send: function (to, value) {
        self.sendCmd.prepare({ to: to, value: value });
    },
    approve: function (_a) {
        var amount = _a.amount;
        self.approvedCmd.prepare({ amount: amount });
    },
    deposit: function (_a) {
        var to = _a.to, value = _a.value, passcode = _a.passcode, _b = _a.message, message = _b === void 0 ? "" : _b;
        var _publicSalt = new Uint16Array(10);
        var _privateSalt = new Uint16Array(10);
        window.crypto.getRandomValues(_publicSalt);
        window.crypto.getRandomValues(_privateSalt);
        var publicSalt = _publicSalt.join("");
        var privateSalt = _privateSalt.join("");
        var hashSeed = sha3(privateSalt + sha3(publicSalt + passcode));
        var secretHash = sha3(hashSeed ? hashSeed : privateSalt + sha3(publicSalt + passcode));
        if (secretHash) {
            self.depositCmd.prepare({
                from: self.address,
                to: to,
                value: value,
                message: message,
                publicSalt: publicSalt,
                privateSalt: privateSalt,
                secretHash: secretHash,
            });
        }
    },
    retrieve: function (_a) {
        var id = _a.id;
        self.retrieveCmd.prepare({ id: id });
    },
    collect: function (_a) {
        var id = _a.id, passcode = _a.passcode;
        var item = self.incoming.map.get(id);
        if (item && item.salt) {
            var key = sha3(item.salt + passcode) || "";
            self.collectCmd.prepare({ id: id, key: key });
        }
    },
    connect: function (connector) {
        self.connectCmd.prepare(connector);
    },
    disconnect: function () {
        self.disconnectCmd.prepare();
    },
    setAddress: function (address) {
        if (!address) {
            self.address = "";
            return;
        }
        if (isValidAddress(address)) {
            self.address = address;
            return;
        }
    },
    setActive: function (newActive) {
        self.active = newActive;
    },
    setChainId: function (chainId) {
        self.chainId = chainId;
    },
    setBalance: function (balance) {
        self.balance = balance;
    },
    setTokenBalance: function (balance) {
        self.tokenBalance = balance;
    },
    setEthBalance: function (balance) {
        self.ethBalance = balance;
    },
    setStakingBalance: function (balance) {
        self.stakingBalance = balance;
    },
    setBlock: function (block) {
        self.block = block;
    },
    setRate: function (newRate) {
        self.rate = newRate;
    },
    setCurrency: function (currency) {
        self.currency.setData(currency);
    },
    setCurrencyBalance: function (balance) {
        self.currency.setBalance(balance);
    },
    setAllowance: function (allowance) {
        self.allowance = allowance;
    },
    setDeviceInfo: function (deviceInfo) {
        self.deviceInfo.setData(deviceInfo);
    },
    setSafeTransferContract: function (chainName, data) {
        var _a;
        if (!chainName || !data) {
            return;
        }
        if (!self.safeTransferMap.has(chainName)) {
            self.safeTransferMap.set(chainName, SafeTransfer.create());
        }
        var _b = data.address, address = _b === void 0 ? "" : _b, _c = data.feesFormula, feesFormula = _c === void 0 ? "" : _c, _d = data.rewardFormula, rewardFormula = _d === void 0 ? "" : _d, _e = data.synced, synced = _e === void 0 ? false : _e;
        (_a = self.safeTransferMap
            .get(chainName)) === null || _a === void 0 ? void 0 : _a.setData({ address: address, feesFormula: feesFormula, rewardFormula: rewardFormula, synced: synced });
    },
    setStakingContract: function (chainName, data) {
        var _a;
        if (!chainName || !data)
            return;
        if (!self.stakingMap.has(chainName)) {
            self.stakingMap.set(chainName, Staking.create());
        }
        var _b = data.address, address = _b === void 0 ? "" : _b;
        (_a = self.stakingMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.setData({ address: address });
    },
    setKiroTokenContract: function (chainName, data) {
        var _a;
        if (!chainName || !data)
            return;
        if (!self.kiroTokenMap.has(chainName)) {
            self.kiroTokenMap.set(chainName, KiroToken.create());
        }
        var _b = data.address, address = _b === void 0 ? "" : _b;
        (_a = self.kiroTokenMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.setData({ address: address });
    },
    setERC20TokenContract: function (chainName, data) {
        var _a;
        if (!chainName || !data)
            return;
        self.ERC20TokensMap.set(chainName, {});
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var _b = data_1[_i], address = _b.address, name_1 = _b.name, symbol = _b.symbol, decimals = _b.decimals, balance = _b.balance, rate = _b.rate;
            (_a = self.ERC20TokensMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.addToken({
                address: address,
                name: name_1,
                symbol: symbol,
                decimals: decimals,
                balance: balance,
                rate: rate,
            });
        }
    },
    setERC20TokenBalance: function (chainName, address, balance) {
        var _a;
        (_a = self.ERC20TokensMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.setBalance(address, balance);
    },
    setErc20TokenRate: function (chainName, address, rate) {
        var _a;
        (_a = self.ERC20TokensMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.setRate(address, rate);
    },
    clearERC20TokenBalances: function (chainName) {
        var _a;
        chainName
            ? (_a = self.ERC20TokensMap.get(chainName)) === null || _a === void 0 ? void 0 : _a.clearBalances()
            : self.ERC20TokensMap.forEach(function (token) { return token.clearBalances(); });
    },
}); });
var store = Account.create();
onSnapshot(store, function (snapshot) {
    if (!prevAddress) {
        prevAddress = store.wallet.account;
        return;
    }
    if (prevAddress === snapshot.wallet.account)
        return;
    onAddressChangeActions.forEach(function (runAction) {
        runAction();
    });
    prevAddress = snapshot.wallet.account;
});
export var accountStore = store;
var prevAddress;
var onAddressChangeActions = [];
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
