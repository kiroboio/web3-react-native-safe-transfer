var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useEffect } from 'react';
import { useAccount } from '../context/account';
import { useWeb3, Connectors } from '../hooks/useWeb3';
import useWallet from '../hooks/useWallet';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { usePrevious } from '../hooks/usePrevious';
export var useRegularWallet = function () {
    var _a;
    var _b = useWeb3(), web3Connector = _b.connector, web3 = _b.library, web3Account = _b.address;
    var _c = useAccount(), connectCmd = _c.connectCmd, disconnectCmd = _c.disconnectCmd, wallet = _c.wallet, chainId = _c.chainId;
    var _d = useWallet(), getMnemonic = _d.getMnemonic, setNewMnemonic = _d.setNewMnemonic, getActiveAccountFromStorage = _d.getActiveAccountFromStorage, setActiveAccount = _d.setActiveAccount;
    var __connectCmd = useRef(connectCmd);
    var __disconnectCmd = useRef(disconnectCmd);
    var __setAccount = useRef(wallet.setAccount);
    var __web3 = useRef(web3);
    var __web3Connector = useRef(web3Connector);
    var __setNewMnemonic = useRef(setNewMnemonic);
    var __getMnemonic = useRef(getMnemonic);
    var __wallet = useRef(wallet);
    var __setActiveAccount = useRef(setActiveAccount);
    var __getActiveAccountFromStorage = useRef(getActiveAccountFromStorage);
    useEffect(function () {
        var web3Connector = __web3Connector.current;
        var connectCmd = __connectCmd.current;
        if (!web3Connector)
            return;
        if (connectCmd.connector !== Connectors.InAppWallet)
            return;
        if (!web3Connector.changeChainId)
            return;
        web3Connector.changeChainId(chainId);
    }, [chainId]);
    useEffect(function () {
        var setNewMnemonic = __setNewMnemonic.current;
        if (!wallet.mnemonic.data)
            return;
        setNewMnemonic(wallet.mnemonic.data);
    }, [wallet.mnemonic.data]);
    useEffect(function () {
        var web3Connector = __web3Connector.current;
        var wallet = __wallet.current;
        if (!wallet.addAddressCmd.is.ready || wallet.addAddressCmd.is.running)
            return;
        try {
            wallet.addAddressCmd.start();
            if (!wallet.mnemonic.data)
                throw new Error('no mnemonic');
            if (!web3Connector)
                throw new Error('connector not started');
            if (!(web3Connector === null || web3Connector === void 0 ? void 0 : web3Connector.addWalletAddress))
                throw new Error('wrong connector');
            web3Connector === null || web3Connector === void 0 ? void 0 : web3Connector.addWalletAddress();
            wallet.addAddressCmd.done();
        }
        catch (e) {
            wallet.addAddressCmd.failed({ message: e.message || e.reason });
        }
    }, [wallet.addAddressCmd.is.ready]);
    useEffect(function () {
        var web3Connector = __web3Connector.current;
        var wallet = __wallet.current;
        if (!wallet.removeAddressCmd.is.ready || wallet.removeAddressCmd.is.running)
            return;
        try {
            wallet.removeAddressCmd.start();
            if (!wallet.mnemonic.data)
                throw new Error('no mnemonic');
            if (!web3Connector)
                throw new Error('connector not started');
            if (!(web3Connector === null || web3Connector === void 0 ? void 0 : web3Connector.removeWalletAddress))
                throw new Error('wrong connector');
            web3Connector === null || web3Connector === void 0 ? void 0 : web3Connector.removeWalletAddress(wallet.removeAddressCmd.address);
            wallet.removeAddressCmd.done();
        }
        catch (e) {
            wallet.removeAddressCmd.failed({ message: e.message || e.reason });
        }
    }, [wallet.removeAddressCmd.is.ready]);
    useEffect(function () {
        var getMnemonic = function () { return __awaiter(void 0, void 0, void 0, function () {
            var setNewMnemonic, wallet, mnemonic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setNewMnemonic = __setNewMnemonic.current;
                        wallet = __wallet.current;
                        return [4 /*yield*/, __getMnemonic.current()];
                    case 1:
                        mnemonic = _a.sent();
                        if (!wallet.mnemonic.restoreCmd.is.ready || wallet.mnemonic.restoreCmd.is.running)
                            return [2 /*return*/];
                        try {
                            wallet.mnemonic.restoreCmd.start();
                            if (!mnemonic || mnemonic === "undefined") {
                                throw new Error('no mnemonic');
                            }
                            wallet.mnemonic.set(mnemonic);
                            setNewMnemonic(mnemonic);
                            wallet.mnemonic.restoreCmd.done();
                        }
                        catch (e) {
                            wallet.mnemonic.restoreCmd.failed({ message: e.message || e.reason });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        getMnemonic();
    }, [wallet.mnemonic.restoreCmd.is.ready]);
    var web3WalletAddressesAmount = ((_a = __web3.current) === null || _a === void 0 ? void 0 : _a.eth.accounts.wallet)
        ? Object.keys(__web3.current.eth.accounts.wallet)
        : null;
    useEffect(function () {
        var wallet = __wallet.current;
        var connectCmd = __connectCmd.current;
        var web3 = __web3.current;
        if (connectCmd.connector !== Connectors.InAppWallet)
            return;
        if (!wallet.mnemonic.data)
            return;
        var accounts = new Set();
        Object.keys(web3.eth.accounts.wallet).forEach(function (key) {
            var _a;
            if (!((_a = web3.eth.accounts.wallet[parseInt(key)]) === null || _a === void 0 ? void 0 : _a.address))
                return;
            accounts.add(web3.eth.accounts.wallet[parseInt(key)].address);
        });
        var uniqueAccountsArray = Array.from(accounts);
        if (!uniqueAccountsArray.includes(wallet.activeAccount)) {
            wallet.setActiveAccount(uniqueAccountsArray[0]);
            InAppWalletConnector.setActiveAccount(uniqueAccountsArray[0]);
        }
        else {
            wallet.setActiveAccount(wallet.activeAccount);
            InAppWalletConnector.setActiveAccount(wallet.activeAccount);
        }
        wallet.setAccounts(uniqueAccountsArray);
    }, [web3WalletAddressesAmount]);
    useEffect(function () {
        var getActiveAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
            var wallet, activeAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wallet = __wallet.current;
                        return [4 /*yield*/, __getActiveAccountFromStorage.current()];
                    case 1:
                        activeAccount = _a.sent();
                        if (!activeAccount)
                            return [2 /*return*/];
                        wallet.setActiveAccount(activeAccount);
                        InAppWalletConnector.setActiveAccount(activeAccount);
                        return [2 /*return*/];
                }
            });
        }); };
        getActiveAccount();
    }, []);
    useEffect(function () {
        var wallet = __wallet.current;
        var web3Connector = __web3Connector.current;
        var setActiveAccount = __setActiveAccount.current;
        if (!(web3Connector === null || web3Connector === void 0 ? void 0 : web3Connector.handleAccountChanged))
            return;
        web3Connector.handleAccountChanged(wallet.activeAccount);
        setActiveAccount(wallet.activeAccount);
    }, [wallet.activeAccount]);
    useEffect(function () {
        var setAccount = __setAccount.current;
        if (!web3Account)
            return;
        setAccount(web3Account);
    }, [connectCmd.is.ready, web3Account]);
    var prevAccount = usePrevious(web3Account);
    useEffect(function () {
        var setAccount = __setAccount.current;
        if (!web3Account)
            return;
        if (prevAccount === web3Account)
            return;
        setAccount(web3Account);
    }, [web3Account, prevAccount]);
    useEffect(function () {
        var setAccount = __setAccount.current;
        var disconnectCmd = __disconnectCmd.current;
        var wallet = __wallet.current;
        if (!disconnectCmd.is.done)
            return;
        setAccount("");
        wallet.setMnemonic(undefined);
    }, [disconnectCmd.is.done]);
};
