var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import Web3 from 'web3';
import { utils } from 'ethers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Connectors } from '../hooks/useWeb3';
import SecureLS from 'secure-ls';
var InAppWalletConnector = /** @class */ (function (_super) {
    __extends(InAppWalletConnector, _super);
    function InAppWalletConnector(_a) {
        var urls = _a.urls, defaultChainId = _a.defaultChainId;
        var _this = _super.call(this) || this;
        _this.secureStorage = new SecureLS();
        _this.getPaths = function () {
            try {
                return _this.secureStorage.get('paths') || {};
            }
            catch (e) {
                return {};
            }
        };
        _this.paths = _this.getPaths();
        _this.addresses = [];
        _this.name = Connectors.InAppWallet;
        _this.web3 = new Web3();
        _this.hdNode = undefined;
        _this.getPrivateKeys = function () {
            if (!InAppWalletConnector.mnemonic)
                throw new Error('mnemonic not found');
            var privateKeys = [];
            var hdNode = _this.hdNode;
            if (!hdNode)
                return [];
            var walletFirst = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH);
            if (_this.paths[walletFirst.address]) {
                Object.keys(_this.paths[walletFirst.address]).map(function (key) {
                    return privateKeys.push(hdNode.derivePath("m/44'/60'/0'/0/" + key).privateKey);
                });
            }
            else {
                _this.paths[walletFirst.address] = { 0: walletFirst.address };
                privateKeys.push(walletFirst.privateKey);
            }
            return privateKeys;
        };
        _this.setWeb3 = function () {
            if (!InAppWalletConnector.mnemonic)
                throw new Error('mnemonic not found');
            _this.hdNode = utils.HDNode.fromMnemonic(InAppWalletConnector.mnemonic);
            var provider = new Web3.providers.WebsocketProvider(_this.providers[_this.chainId || 4]);
            var web3 = new Web3(provider);
            var privateKeys = _this.getPrivateKeys();
            var addresses = new Set();
            for (var _i = 0, privateKeys_1 = privateKeys; _i < privateKeys_1.length; _i++) {
                var privateKey = privateKeys_1[_i];
                var address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
                web3.eth.accounts.wallet.add({
                    privateKey: privateKey,
                    address: address,
                });
                addresses.add(address);
            }
            _this.addresses = Array.from(addresses);
            InAppWalletConnector.activeAccount = InAppWalletConnector.activeAccount || _this.addresses[0];
            _this.web3 = web3;
        };
        _this.addWalletAddress = function () {
            var hdNode = _this.hdNode;
            if (!hdNode)
                return;
            var walletFirstAddress = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH).address;
            var setNewAddress = function (privateKey) {
                var address = _this.web3.eth.accounts.privateKeyToAccount(privateKey).address;
                _this.web3.eth.accounts.wallet.add({
                    privateKey: privateKey,
                    address: address,
                });
                _this.addresses.push(address);
                _this.secureStorage.set('paths', _this.paths);
            };
            var onEmptyKeyNotFounded = function () {
                var keysAmount = Object.keys(_this.paths[walletFirstAddress]).length;
                var walletAccount = hdNode.derivePath("m/44'/60'/0'/0/" + keysAmount);
                _this.paths[walletFirstAddress][keysAmount] = walletAccount.address;
                var privateKey = walletAccount.privateKey;
                setNewAddress(privateKey);
            };
            var index = 0;
            for (var _i = 0, _a = Object.keys(_this.paths[walletFirstAddress]); _i < _a.length; _i++) {
                var key = _a[_i];
                if (Number(key) !== index) {
                    var walletAccount = hdNode.derivePath("m/44'/60'/0'/0/" + index);
                    _this.paths[walletFirstAddress][index] = walletAccount.address;
                    var privateKey = walletAccount.privateKey;
                    setNewAddress(privateKey);
                    break;
                }
                else if (index === Object.keys(_this.paths[walletFirstAddress]).length - 1) {
                    onEmptyKeyNotFounded();
                }
                index++;
            }
        };
        _this.removeWalletAddress = function (address) {
            var hdNode = _this.hdNode;
            if (!hdNode)
                return;
            _this.web3.eth.accounts.wallet.remove(address);
            _this.addresses = _this.addresses.filter(function (a) { return a !== address; });
            var walletFirstAddress = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH).address;
            Object.keys(_this.paths[walletFirstAddress]).forEach(function (key) {
                if (_this.paths[walletFirstAddress][Number(key)] === address) {
                    delete _this.paths[walletFirstAddress][Number(key)];
                    _this.secureStorage.set('paths', _this.paths);
                }
            });
        };
        _this.providers = urls;
        _this.chainId = defaultChainId || 4;
        _this.setWeb3();
        return _this;
    }
    InAppWalletConnector.clearMnemonic = function () {
        InAppWalletConnector.mnemonic = undefined;
    };
    InAppWalletConnector.setMnemonic = function (mnemonic) {
        InAppWalletConnector.mnemonic = mnemonic;
    };
    InAppWalletConnector.prototype.handleAccountChanged = function (account) {
        console.log("handleAccountChanged", account);
        InAppWalletConnector.setActiveAccount(account);
        if (!account)
            return;
        this.emitUpdate({ account: account });
    };
    InAppWalletConnector.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        provider: this.providers[this.chainId],
                        chainId: this.chainId,
                        account: InAppWalletConnector.activeAccount || this.addresses[0],
                    }];
            });
        });
    };
    InAppWalletConnector.prototype.getProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.providers[this.chainId]];
            });
        });
    };
    InAppWalletConnector.prototype.getChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.chainId];
            });
        });
    };
    InAppWalletConnector.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, InAppWalletConnector.activeAccount || this.addresses[0]];
            });
        });
    };
    InAppWalletConnector.prototype.deactivate = function () {
        return;
    };
    InAppWalletConnector.prototype.changeChainId = function (chainId) {
        this.chainId = Number(chainId);
        this.emitUpdate({ provider: this.providers[chainId.toString()], chainId: chainId });
    };
    InAppWalletConnector.DEFAULT_PATH = "m/44'/60'/0'/0/0";
    InAppWalletConnector.setActiveAccount = function (account) {
        InAppWalletConnector.activeAccount = account;
    };
    return InAppWalletConnector;
}(AbstractConnector));
export default InAppWalletConnector;
