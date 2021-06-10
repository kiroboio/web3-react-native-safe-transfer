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
import { useState } from "react";
import SecureLS from "secure-ls";
var useSecureStorageEmptyRes = {
    error: { isError: true, content: undefined, isLocalStorageExist: false },
    storage: undefined,
    setItem: undefined,
    getItem: undefined,
    removeItem: undefined,
    removeAll: undefined,
    clear: undefined,
    getAllKeys: undefined,
    setNewSecureStorageConfig: undefined,
};
/**
 * 1. Secure data with various @param encodingType (base64/aes/des/rabbit/rc4/''), default aes.
 * 2. Advanced API wrapper over localStorage API, providing other basic utilities.
 * 3. Save data in multiple keys inside localStorage and secure-ls will always remember it's creation.
 *
 * @param encryptionSecret _will only be used for the Encryption and Decryption of data with AES, DES, RC4, RABBIT, and the library will discard it if no encoding / Base64 encoding method is choosen._
 * @param encodingType _default aes_
 * @param encryptionNamespace _is used to make multiple instances with different encryptionSecret and/or different encryptionSecret possible._
 * @returns
 * ```{
        error,
        storage: secureStorage,
        setItem,
        getItem,
        removeItem,
        removeAll,
        clear,
        getAllKeys,
        setNewSecureStorageConfig
      }```
 */
export var useSecureStorageWeb = function (encryptionSecret, encodingType, encryptionNamespace) {
    if (encodingType === void 0) { encodingType = "aes"; }
    var createNewSecureSecureStorage = function (encryptionSecret, encodingType) {
        if (encodingType === void 0) { encodingType = "aes"; }
        var createNewSecureLS = function () {
            return new SecureLS({
                encodingType: encodingType,
                encryptionSecret: encryptionSecret,
                isCompression: false,
                encryptionNamespace: encryptionNamespace,
            });
        };
        try {
            var newSecureLS = createNewSecureLS();
            newSecureLS.error = {
                isError: false,
                content: undefined,
                isLocalStorageExist: true,
            };
            return newSecureLS;
        }
        catch (e) {
            var res = useSecureStorageEmptyRes;
            res.error = { isError: true, content: e, isLocalStorageExist: true };
            return res;
        }
    };
    var _a = useState(createNewSecureSecureStorage(encryptionSecret, encodingType)), newSecureStorage = _a[0], setSecureStorageConfig = _a[1];
    var _b = useState({
        isError: false,
        content: undefined,
        isLocalStorageExist: true,
    }), error = _b[0], setError = _b[1];
    var secureStorageError = newSecureStorage;
    if (secureStorageError.error.isError) {
        return secureStorageError;
    }
    var secureStorage = newSecureStorage;
    var setNewSecureStorageConfig = function (encryptionSecret, encodingType) {
        if (encodingType === void 0) { encodingType = "aes"; }
        setSecureStorageConfig(createNewSecureSecureStorage(encryptionSecret, encodingType));
    };
    var handleSetError = function (e) {
        setError(function (errorState) { return (__assign(__assign({}, errorState), { isError: true, content: e })); });
        throw new Error(e.message);
    };
    var setItem = function (itemName, item) {
        try {
            secureStorage.set(itemName, item);
        }
        catch (e) {
            handleSetError(e);
        }
    };
    var getItem = function (itemName, isAllKeysData) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, secureStorage.get(itemName, isAllKeysData)];
            }
            catch (e) {
                handleSetError(e);
            }
            return [2 /*return*/];
        });
    }); };
    var removeItem = function (itemName) {
        try {
            secureStorage.remove(itemName);
        }
        catch (e) {
            handleSetError(e);
        }
    };
    var removeAll = function () {
        try {
            secureStorage.removeAll();
        }
        catch (e) {
            handleSetError(e);
        }
    };
    var clear = function () {
        try {
            secureStorage.clear();
        }
        catch (e) {
            handleSetError(e);
        }
    };
    var getAllKeys = function () {
        try {
            return secureStorage.getAllKeys();
        }
        catch (e) {
            handleSetError(e);
        }
        return [];
    };
    return {
        error: error,
        storage: secureStorage,
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        removeAll: removeAll,
        clear: clear,
        getAllKeys: getAllKeys,
        setNewSecureStorageConfig: setNewSecureStorageConfig,
    };
};
