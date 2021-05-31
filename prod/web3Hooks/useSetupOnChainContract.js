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
import FactoryJSON from '../abi/Factory.json';
import WalletJSON from '../abi/Wallet.json';
import { useAccount } from '..';
import { useWeb3 } from '../hooks/useWeb3';
import { useDispatchContract } from '..';
import erc20Abi from '../abi/erc20.json';
import { isValidAddress } from '../utils/address';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { tokens as tokensConfig } from '../stores/account';
import { usePrevious } from '../hooks/usePrevious';
var OnChainWalletAddress = '0xC97Bf7C8f20D32BD28e92845Eb18cA4462160110';
export var useSetupOnChainContract = function () {
    var dispatchContact = useDispatchContract();
    var _a = useWeb3(), library = _a.library, address = _a.address;
    var _b = useAccount(), onChainWalletDetails = _b.onChainWalletDetails, wallet = _b.wallet, tokens = _b.tokens, chainId = _b.chainId;
    var createWalletTransactionCmd = onChainWalletDetails.createWalletTransactionCmd, claimOwnershipCmd = onChainWalletDetails.claimOwnershipCmd;
    var setupOnChainContract = function () {
        try {
            wallet.createWalletCmd.start();
            var factoryJsonAbi = FactoryJSON.abi;
            var contract = new library.eth.Contract(factoryJsonAbi, OnChainWalletAddress);
            dispatchContact({ payload: contract, type: 'setOnChainContract' });
            wallet.createWalletCmd.done();
            return contract;
        }
        catch (e) {
            wallet.createWalletCmd.failed({ message: e.message });
        }
        return undefined;
    };
    var __claimOwnershipCmd = useRef(claimOwnershipCmd);
    var __createWalletTransactionCmd = useRef(createWalletTransactionCmd);
    var tryToSetupContracts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var onChainContract, walletAccount, walletJsonAbi, contract, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!address || !library)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    onChainContract = setupOnChainContract();
                    return [4 /*yield*/, (onChainContract === null || onChainContract === void 0 ? void 0 : onChainContract.methods.getWallet(wallet.account).call())];
                case 2:
                    walletAccount = _a.sent();
                    if (isValidAddress(walletAccount)) {
                        onChainWalletDetails.setAccount(walletAccount);
                        walletJsonAbi = WalletJSON.abi;
                        contract = new library.eth.Contract(walletJsonAbi, walletAccount);
                        onChainWalletDetails.setIsNoWallet(false);
                        dispatchContact({ payload: contract, type: 'setOnChainWalletContract' });
                    }
                    else {
                        onChainWalletDetails.setAccount('');
                        onChainWalletDetails.setIsNoWallet(true);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    onChainWalletDetails.setAccount('');
                    onChainWalletDetails.setIsNoWallet(true);
                    throw new Error(err_1);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var tryToSetupTokenContract = function () { return __awaiter(void 0, void 0, void 0, function () {
        var erc20AbiItem, contract;
        return __generator(this, function (_a) {
            if (tokens.token === 'none')
                return [2 /*return*/];
            try {
                erc20AbiItem = erc20Abi;
                contract = new library.eth.Contract(erc20AbiItem, tokensConfig[tokens.token].address[chainId]);
                dispatchContact({ payload: contract, type: 'setOnChainTokenContract' });
            }
            catch (err) {
                dispatchContact({ payload: undefined, type: 'setOnChainTokenContract' });
                throw new Error(err);
            }
            return [2 /*return*/];
        });
    }); };
    var tryToSetupContractsAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    onChainWalletDetails.createWalletCmd.start();
                    return [4 /*yield*/, tryToSetupContracts()];
                case 1:
                    _a.sent();
                    onChainWalletDetails.createWalletCmd.done();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    onChainWalletDetails.createWalletCmd.failed({ message: e_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var tryToSetupTokenContractsAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    onChainWalletDetails.createTokenWalletCmd.start();
                    return [4 /*yield*/, tryToSetupTokenContract()];
                case 1:
                    _a.sent();
                    onChainWalletDetails.createTokenWalletCmd.done();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    onChainWalletDetails.createTokenWalletCmd.failed({ message: e_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var __tryToSetupContractsAsync = useRef(tryToSetupContractsAsync);
    var __tryToSetupTokenContractsAsync = useRef(tryToSetupTokenContractsAsync);
    useEffect(function () {
        var tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
        var createWalletTransactionCmd = __createWalletTransactionCmd.current;
        if (!createWalletTransactionCmd.is.done || createWalletTransactionCmd.is.running)
            return;
        tryToSetupContractsAsync();
    }, [createWalletTransactionCmd.is.done]);
    useEffect(function () {
        var tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
        var claimOwnershipCmd = __claimOwnershipCmd.current;
        if (!claimOwnershipCmd.is.done)
            return;
        tryToSetupContractsAsync();
    }, [claimOwnershipCmd.is.done]);
    var prevAccount = usePrevious(wallet.account);
    useEffect(function () {
        if (prevAccount === wallet.account)
            return;
        var tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
        tryToSetupContractsAsync();
    }, [wallet.account, prevAccount]);
    var prevChainId = usePrevious(chainId);
    useEffect(function () {
        if (prevChainId === chainId)
            return;
        var tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
        tryToSetupContractsAsync();
    }, [prevChainId, chainId]);
    var prevToken = usePrevious(tokens.token);
    useEffect(function () {
        if (prevToken === tokens.token)
            return;
        var tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
        tryToSetupTokenContractsAsync();
    }, [tokens.token, prevToken]);
    useEffect(function () {
        if (!onChainWalletDetails.createWalletCmd.is.done)
            return;
        var tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
        tryToSetupTokenContractsAsync();
    }, [onChainWalletDetails.createWalletCmd.is.done]);
    return null;
};
