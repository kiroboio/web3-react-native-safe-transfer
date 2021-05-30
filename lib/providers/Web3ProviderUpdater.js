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
import React, { useEffect } from "react";
import { useAccount, useWeb3Provider } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { observer } from "mobx-react-lite";
import "@metamask/detect-provider";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import { useRegularWallet, useBalances, useSetupOnChainContract, useTransactions, useBackup, useCreateOnChainContract, useInheritance, } from "../web3Hooks";
import { AVAILABLE_RPC_URLS } from "../stores/account";
export var Web3ProviderUpdater = observer(function (_a) {
    var children = _a.children, customHooks = _a.customHooks;
    var _b = useWeb3(), web3Connect = _b.connect, web3Disconnect = _b.disconnect, web3 = _b.library, web3Active = _b.active, web3ChainId = _b.chainId, web3Address = _b.address;
    var _c = useAccount(), setActive = _c.setActive, connectCmd = _c.connectCmd, disconnectCmd = _c.disconnectCmd, setChainId = _c.setChainId, setBlock = _c.setBlock;
    var setWeb3Block = useWeb3Provider().setBlock;
    var __connectCmd = useRef(connectCmd);
    var __disconnectCmd = useRef(disconnectCmd);
    var __web3 = useRef(web3);
    var __web3Connect = useRef(web3Connect);
    var __web3Disconnect = useRef(web3Disconnect);
    var __setActive = useRef(setActive);
    var __setChainId = useRef(setChainId);
    var __setWeb3Block = useRef(setWeb3Block);
    var __setBlock = useRef(setBlock);
    var hooks = [
        useRegularWallet,
        useBalances,
        useSetupOnChainContract,
        useTransactions,
        useBackup,
        useCreateOnChainContract,
        useInheritance,
    ];
    hooks.map(function (useHook) {
        try {
            return useHook();
        }
        catch (e) {
            throw new Error(e);
        }
    });
    React.useEffect(function () {
        var setBlock = __setBlock.current;
        if (!web3)
            return;
        web3.eth
            .subscribe("newBlockHeaders")
            .on("data", function (e) {
            if (!e.number)
                return;
            setBlock(e.number);
        })
            .on("connected", function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var blockNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3.eth.getBlockNumber()];
                    case 1:
                        blockNumber = _a.sent();
                        setBlock(blockNumber);
                        return [2 /*return*/];
                }
            });
        }); })
            .on("error", function (e) { return console.log("subscribe error", e); });
    }, [web3, web3Address]);
    useEffect(function () {
        var web3Connect = __web3Connect.current;
        var connectCmd = __connectCmd.current;
        if (connectCmd.is.ready && !connectCmd.is.running) {
            connectCmd.start();
            web3Connect(connectCmd.connector)
                .then(function () {
                connectCmd.done();
            })
                .catch(function (e) {
                connectCmd.failed({ message: e ? JSON.stringify(e) : "failed" });
            });
        }
    }, [connectCmd.is.ready]);
    useEffect(function () {
        var web3Disconnect = __web3Disconnect.current;
        var disconnectCmd = __disconnectCmd.current;
        var connectCmd = __connectCmd.current;
        var web3 = __web3.current;
        if (disconnectCmd.is.ready && !disconnectCmd.is.running) {
            disconnectCmd.start();
            web3.eth.clearSubscriptions(function (e) {
                return console.log("clear subscription", e);
            });
            web3Disconnect();
            disconnectCmd.done();
            connectCmd.clearCmd();
        }
    }, [disconnectCmd.is.ready]);
    useEffect(function () {
        var web3 = __web3.current;
        var setActive = __setActive.current;
        var setChainId = __setChainId.current;
        setActive(web3Active);
        if (web3ChainId) {
            if (Object.keys(AVAILABLE_RPC_URLS).includes(web3ChainId.toString())) {
                setChainId(web3ChainId.toString());
            }
            else {
                setChainId("notSupportedChainId");
            }
        }
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var blockNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!web3Address) return [3 /*break*/, 2];
                        return [4 /*yield*/, web3.eth.getBlockNumber()];
                    case 1:
                        blockNumber = _a.sent();
                        __setWeb3Block.current(blockNumber);
                        return [3 /*break*/, 3];
                    case 2:
                        __setWeb3Block.current(0);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
        if (web3 && web3Address) {
            web3.eth
                .subscribe("newBlockHeaders")
                .on("connected", function () { return __awaiter(void 0, void 0, void 0, function () {
                var blockNumber;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, web3.eth.getBlockNumber()];
                        case 1:
                            blockNumber = _a.sent();
                            __setWeb3Block.current(blockNumber);
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("error", function () {
                __setWeb3Block.current(0);
            })
                .on("data", function (block) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    __setWeb3Block.current(block.number);
                    return [2 /*return*/];
                });
            }); });
        }
    }, [web3Address, web3ChainId, web3Active]);
    return React.createElement(React.Fragment, null, children);
});
