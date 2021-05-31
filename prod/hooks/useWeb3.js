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
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
// import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
// import { LatticeConnector } from '@web3-react/lattice-connector'
import { FrameConnector } from '@web3-react/frame-connector';
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
import { MewConnectConnector } from '@myetherwallet/mewconnect-connector';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { useAccount } from '../context/account';
import { RPC_URLS } from '../stores/account';
var POLLING_INTERVAL = 12000;
export var Connectors;
(function (Connectors) {
    Connectors["InAppWallet"] = "InAppWallet";
    Connectors["Injected"] = "Injected";
    Connectors["WalletConnect"] = "WalletConnect";
    Connectors["WalletLink"] = "WalletLink";
    Connectors["MyEtherWallet"] = "MyEtherWallet";
    Connectors["Frame"] = "Frame";
})(Connectors || (Connectors = {}));
export var useWeb3 = function () {
    var _a;
    var _b = useWeb3React(), connector = _b.connector, library = _b.library, chainId = _b.chainId, account = _b.account, activate = _b.activate, deactivate = _b.deactivate, active = _b.active, error = _b.error;
    var defaultChainId = useAccount().chainId;
    var inAppWalletConnect = function () {
        return new InAppWalletConnector({ urls: RPC_URLS, defaultChainId: chainId ? chainId : Number(defaultChainId) });
    };
    var injected = function (params) { return new InjectedConnector(__assign({}, params)); }; // supportedChainIds: [1, 4] })
    var walletConnect = function (params) {
        return new WalletConnectConnector(__assign({ rpc: { 4: RPC_URLS[4] }, bridge: 'https://bridge.walletconnect.org', qrcode: true, pollingInterval: POLLING_INTERVAL }, params));
    };
    var walletLink = function (params) {
        return new WalletLinkConnector(__assign({ url: RPC_URLS[4], appName: 'dapp.kirobo.me' }, params));
    };
    var myEtherWallet = function (params) {
        return new MewConnectConnector(__assign({ url: RPC_URLS[1] }, params));
    };
    var frame = function (params) {
        return new FrameConnector(__assign({ supportedChainIds: [4] }, params));
    };
    var connectorByName = (_a = {},
        _a[Connectors.InAppWallet] = inAppWalletConnect,
        _a[Connectors.Injected] = injected,
        _a[Connectors.WalletConnect] = walletConnect,
        _a[Connectors.WalletLink] = walletLink,
        _a[Connectors.MyEtherWallet] = myEtherWallet,
        _a[Connectors.Frame] = frame,
        _a);
    var connectors = [];
    var connect = function (connectorName, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!connectors[0]) return [3 /*break*/, 2];
                        connectors[0] = { connector: connectorByName[connectorName](params) };
                        if (!connectors[0].connector) return [3 /*break*/, 2];
                        return [4 /*yield*/, activate(connectors[0].connector)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    var disconnect = function () {
        deactivate();
        delete connectors[0];
    };
    return {
        connect: connect,
        disconnect: disconnect,
        address: account,
        active: active,
        chainId: chainId,
        error: error,
        connector: connector,
        library: library,
        activate: activate,
    };
};
