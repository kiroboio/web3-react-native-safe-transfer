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
import * as React from "react";
import { useContract, useAccount } from "..";
import { useWeb3 } from "../hooks/useWeb3";
import { getRate } from "../services/rates.service";
import { fromWei } from "web3-utils";
import { formatEther } from "../utils/ethereum";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import { usePrevious } from "../hooks/usePrevious";
var getRateTimeout;
var convertCryptoToFiat = function (rate, value) {
    var result = value.toString();
    if (result !== "0") {
        var balanceInString = fromWei(value).toString();
        result = (parseFloat(balanceInString) * rate).toString();
    }
    return formatEther(parseFloat(result));
};
export var useBalances = function () {
    var _a = useWeb3(), account = _a.address, library = _a.library;
    var _b = useAccount(), onChainWalletDetails = _b.onChainWalletDetails, wallet = _b.wallet, setExchangeToUsdRate = _b.setExchangeToUsdRate, block = _b.block, transactions = _b.transactions, tokens = _b.tokens, chainId = _b.chainId;
    var onChain = useContract();
    var onChainWalletContract = onChain.walletContract;
    var _c = React.useState(), rate = _c[0], setRate = _c[1];
    var updateRate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var rate_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getRate()];
                case 1:
                    rate_1 = _a.sent();
                    setExchangeToUsdRate(rate_1);
                    setRate(rate_1);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    clearTimeout(getRateTimeout);
                    getRateTimeout = setTimeout(updateRate, 5000);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var __updateRate = useRef(updateRate);
    var __setBalanceInUsdOnChainWallet = useRef(onChainWalletDetails.setBalanceInUsd);
    var __setBalanceInUsdWallet = useRef(wallet.setBalanceInUsd);
    var __block = useRef(block);
    var __walletBalanceCmd = useRef(wallet.balanceCmd);
    var __walletTokenBalanceCmd = useRef(wallet.tokenBalanceCmd);
    var __onChainWalletBalanceCmd = useRef(onChainWalletDetails.balanceCmd);
    var __onChainWalletTokenBalanceCmd = useRef(onChainWalletDetails.tokenBalanceCmd);
    var __walletAccount = useRef(wallet.account);
    var __onChainWalletDetailsAccount = useRef(onChainWalletDetails.account);
    var __wallet = useRef(wallet);
    React.useEffect(function () {
        var updateRate = __updateRate.current;
        updateRate();
    }, []);
    React.useEffect(function () {
        var setBalanceInUsd = __setBalanceInUsdOnChainWallet.current;
        if (!rate || !onChainWalletDetails.balance)
            return;
        var convertBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
            var convertedBalance;
            return __generator(this, function (_a) {
                convertedBalance = convertCryptoToFiat(rate, onChainWalletDetails.balance);
                setBalanceInUsd(String(convertedBalance));
                return [2 /*return*/];
            });
        }); };
        convertBalance();
    }, [onChainWalletDetails.balance, rate]);
    React.useEffect(function () {
        var setBalanceInUsd = __setBalanceInUsdWallet.current;
        if (!rate || !wallet.balance)
            return;
        var convertBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
            var convertedBalance;
            return __generator(this, function (_a) {
                convertedBalance = convertCryptoToFiat(rate, wallet.balance);
                setBalanceInUsd(String(convertedBalance));
                return [2 /*return*/];
            });
        }); };
        convertBalance();
    }, [wallet.balance, rate]);
    var setWalletTokenBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tokenContract, balance, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenContract = onChain.tokenContract;
                    if (!tokenContract || !wallet.account)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenContract.methods
                            .balanceOf(wallet.account)
                            .call()];
                case 2:
                    balance = _a.sent();
                    wallet.setTokenBalance(balance);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    throw new Error(err_1);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var setOnChainWalletTokenBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tokenContract, balance, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenContract = onChain.tokenContract;
                    if (!tokenContract)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, tokenContract.methods
                            .balanceOf(onChainWalletDetails.account)
                            .call()];
                case 2:
                    balance = _a.sent();
                    onChainWalletDetails.setTokenBalance(balance);
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    throw new Error(err_2);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var setOnChainWalletBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
        var balance, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onChainWalletContract || !onChainWalletDetails.account)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onChainWalletContract.methods
                            .getBalance()
                            .call()];
                case 2:
                    balance = _a.sent();
                    onChainWalletDetails.setBalance(balance.toString());
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    throw new Error(err_3);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var setWalletEthBalance = function () { return __awaiter(void 0, void 0, void 0, function () {
        var balance, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!account)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (library === null || library === void 0 ? void 0 : library.eth.getBalance(account))];
                case 2:
                    balance = _a.sent();
                    wallet.setBalance(balance);
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    throw new Error(err_4);
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var __setWalletEthBalance = useRef(setWalletEthBalance);
    var __setWalletTokenBalance = useRef(setWalletTokenBalance);
    var __setOnChainWalletBalance = useRef(setOnChainWalletBalance);
    var __setOnChainWalletTokenBalance = useRef(setOnChainWalletTokenBalance);
    React.useEffect(function () {
        var walletBalanceCmd = __walletBalanceCmd.current;
        var setWalletEthBalance = __setWalletEthBalance.current;
        if (!walletBalanceCmd.is.ready || walletBalanceCmd.is.running)
            return;
        var getBalanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        walletBalanceCmd.start();
                        return [4 /*yield*/, setWalletEthBalance()];
                    case 1:
                        _a.sent();
                        walletBalanceCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        walletBalanceCmd.failed({ message: e_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        getBalanceAsync();
    }, [wallet.balanceCmd.is.ready]);
    React.useEffect(function () {
        var onChainBalanceCmd = __onChainWalletBalanceCmd.current;
        var setOnChainWalletBalance = __setOnChainWalletBalance.current;
        if (!onChainBalanceCmd.is.ready || onChainBalanceCmd.is.running)
            return;
        var getBalanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        onChainBalanceCmd.start();
                        return [4 /*yield*/, setOnChainWalletBalance()];
                    case 1:
                        _a.sent();
                        onChainBalanceCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        onChainBalanceCmd.failed({ message: e_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        getBalanceAsync();
    }, [onChainWalletDetails.balanceCmd.is.ready]);
    React.useEffect(function () {
        var walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        var setWalletTokenBalance = __setWalletTokenBalance.current;
        if (!walletTokenBalanceCmd.is.ready || walletTokenBalanceCmd.is.running)
            return;
        var getBalanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        walletTokenBalanceCmd.start();
                        return [4 /*yield*/, setWalletTokenBalance()];
                    case 1:
                        _a.sent();
                        walletTokenBalanceCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        walletTokenBalanceCmd.failed({ message: e_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        getBalanceAsync();
    }, [wallet.tokenBalanceCmd.is.ready]);
    React.useEffect(function () {
        var onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        var setOnChainWalletTokenBalance = __setOnChainWalletTokenBalance.current;
        if (!onChainWalletTokenBalanceCmd.is.ready ||
            onChainWalletTokenBalanceCmd.is.running)
            return;
        var getBalanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        onChainWalletTokenBalanceCmd.start();
                        return [4 /*yield*/, setOnChainWalletTokenBalance()];
                    case 1:
                        _a.sent();
                        onChainWalletTokenBalanceCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        onChainWalletTokenBalanceCmd.failed({ message: e_5.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        getBalanceAsync();
    }, [onChainWalletDetails.tokenBalanceCmd.is.ready]);
    var setAllBalances = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            wallet.balanceCmd.prepare();
            onChainWalletDetails.balanceCmd.prepare();
            wallet.tokenBalanceCmd.prepare();
            onChainWalletDetails.tokenBalanceCmd.prepare();
            return [2 /*return*/];
        });
    }); };
    var __setAllBalances = useRef(setAllBalances);
    var successTransactions = transactions.items.filter(function (trx) { return trx.state === "success"; });
    var prevBlock = usePrevious(block);
    React.useEffect(function () {
        var block = __block.current;
        var setAllBalances = __setAllBalances.current;
        var updateRate = __updateRate.current;
        if (!prevBlock || !block)
            return;
        if (block === prevBlock)
            return;
        updateRate();
        setAllBalances();
    }, [block, prevBlock]);
    var prevChainId = usePrevious(chainId);
    React.useEffect(function () {
        var setAllBalances = __setAllBalances.current;
        var updateRate = __updateRate.current;
        var wallet = __wallet.current;
        if (!prevChainId)
            return;
        if (prevChainId === chainId)
            return;
        if (chainId === "notSupportedChainId") {
            wallet.setBalance("0");
            wallet.setBalanceInUsd("0");
            wallet.setTokenBalance("0");
            return;
        }
        updateRate();
        setAllBalances();
    }, [chainId, prevChainId, onChain.tokenContract]);
    React.useEffect(function () {
        var setAllBalances = __setAllBalances.current;
        if (!successTransactions.length)
            return;
        setAllBalances();
    }, [successTransactions.length]);
    React.useEffect(function () {
        if (!wallet.createWalletCmd.is.done)
            return;
        var balanceCmd = __walletBalanceCmd.current;
        balanceCmd.prepare();
    }, [wallet.createWalletCmd.is.done]);
    React.useEffect(function () {
        if (!onChainWalletDetails.createWalletCmd.is.done)
            return;
        var onChainWalletBalanceCmd = __onChainWalletBalanceCmd.current;
        onChainWalletBalanceCmd.prepare();
    }, [onChainWalletDetails.createWalletCmd.is.done]);
    React.useEffect(function () {
        if (!onChain.tokenContract)
            return;
        var walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        walletTokenBalanceCmd.prepare();
    }, [onChain.tokenContract]);
    React.useEffect(function () {
        if (!onChainWalletDetails.createTokenWalletCmd.is.done)
            return;
        var onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        onChainWalletTokenBalanceCmd.prepare();
    }, [onChainWalletDetails.createTokenWalletCmd.is.done]);
    var prevToken = usePrevious(tokens.token);
    React.useEffect(function () {
        if (prevToken === tokens.token)
            return;
        var walletAccount = __walletAccount.current;
        if (!walletAccount)
            return;
        var walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        walletTokenBalanceCmd.prepare();
        var onChainWalletDetailsAccount = __onChainWalletDetailsAccount.current;
        if (!onChainWalletDetailsAccount)
            return;
        var onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        onChainWalletTokenBalanceCmd.prepare();
    }, [tokens.token, prevToken]);
};
