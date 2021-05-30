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
import { useState } from 'react';
import useSecureStorage from './useSecureStorage';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { generateMnemonic } from 'bip39';
var initError = { isError: false, content: '' };
var useWallet = function () {
    var _a = useState(), provider = _a[0], setProvider = _a[1];
    var _b = useState(), mnemonic = _b[0], setMnemonic = _b[1];
    var _c = useState(initError), error = _c[0], setError = _c[1];
    var storage = useSecureStorage();
    var getCredentialsFromStorage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var secureStorageSuccess, storageMnemonic, storageRpc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (storage.error.isError) {
                        setError({ isError: true, content: storage.error.content });
                        return [2 /*return*/, { mnemonic: undefined, rpc: undefined }];
                    }
                    secureStorageSuccess = storage;
                    return [4 /*yield*/, secureStorageSuccess.getItem('mnemonic')];
                case 1:
                    storageMnemonic = _a.sent();
                    return [4 /*yield*/, secureStorageSuccess.getItem('rpc')];
                case 2:
                    storageRpc = _a.sent();
                    return [2 /*return*/, { mnemonic: storageMnemonic, rpc: storageRpc }];
            }
        });
    }); };
    var setCredentialsToStorage = function (rpc, mnemonic) {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        var secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        secureStorageSuccess.setItem('rpc', rpc);
        setError({ isError: false, content: undefined });
    };
    var setNewMnemonic = function (mnemonic) {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        if (!mnemonic) {
            InAppWalletConnector.clearMnemonic();
        }
        else {
            InAppWalletConnector.setMnemonic(mnemonic);
        }
        var secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        setMnemonic(mnemonic);
    };
    var getActiveAccountFromStorage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var secureStorageSuccess;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (storage.error.isError) {
                        setError({ isError: true, content: storage.error.content });
                        return [2 /*return*/];
                    }
                    secureStorageSuccess = storage;
                    return [4 /*yield*/, secureStorageSuccess.getItem('activeAccount')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var setActiveAccount = function (account) {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        InAppWalletConnector.setActiveAccount(account);
        var secureStorageSuccess = storage;
        secureStorageSuccess.setItem('activeAccount', account);
    };
    var generateNewMnemonic = function () {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        var mnemonic = generateMnemonic();
        InAppWalletConnector.setMnemonic(mnemonic);
        var secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        setMnemonic(mnemonic);
    };
    var getMnemonic = function () { return __awaiter(void 0, void 0, void 0, function () {
        var secureStorageSuccess, storageMnemonic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (storage.error.isError) {
                        setError({ isError: true, content: storage.error.content });
                        return [2 /*return*/];
                    }
                    secureStorageSuccess = storage;
                    return [4 /*yield*/, secureStorageSuccess.getItem('mnemonic')];
                case 1:
                    storageMnemonic = _a.sent();
                    return [2 /*return*/, storageMnemonic];
            }
        });
    }); };
    return {
        error: error,
        mnemonic: mnemonic,
        provider: provider,
        getMnemonic: getMnemonic,
        setNewMnemonic: setNewMnemonic,
        generateNewMnemonic: generateNewMnemonic,
        setProvider: setProvider,
        getCredentialsFromStorage: getCredentialsFromStorage,
        setCredentialsToStorage: setCredentialsToStorage,
        getActiveAccountFromStorage: getActiveAccountFromStorage,
        setActiveAccount: setActiveAccount,
    };
};
export default useWallet;
