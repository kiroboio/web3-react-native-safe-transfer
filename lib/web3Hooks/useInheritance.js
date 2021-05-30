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
import { useAccount, useContract } from '..';
import { usePrevious } from '../hooks/usePrevious';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { useProcessTransactions } from '../hooks/useProcessTransactions';
var parseHeir = function (heir) {
    var ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
    if (heir === ZERO_BYTES32) {
        return null;
    }
    return {
        walletAddress: heir.slice(0, 42),
        isSent: heir.slice(42, 44) !== '00' ? true : false,
        percent: parseInt(heir.slice(44, 48), 16) / 100,
        isRegistered: true,
    };
};
var useInheritance = function () {
    var _a = useAccount(), transactions = _a.transactions, onChainWalletDetails = _a.onChainWalletDetails, inheritance = _a.inheritance, wallet = _a.wallet;
    var sendTransaction = useProcessTransactions().sendTransaction;
    var createTransaction = transactions.createTransaction;
    var isActivated = inheritance.isActivated, isEnabled = inheritance.isEnabled, heirs = inheritance.heirs, setHeirsCmd = inheritance.setHeirsCmd, setInheritanceCmd = inheritance.setInheritanceCmd, clearInheritanceCmd = inheritance.clearInheritanceCmd, updateHeirsCmd = inheritance.updateHeirsCmd, activateCmd = inheritance.activateCmd, activateByTimerCmd = inheritance.activateByTimerCmd;
    var walletContract = useContract().walletContract;
    var INHERITANCE_DATA_METHODS = [
        { getter: 'getHeirs', setter: inheritance.addHeir },
        { getter: 'getInheritanceTimestamp', setter: inheritance.setTimestamp },
        { getter: 'getInheritanceTimeout', setter: inheritance.setTimeout },
        { getter: 'isInheritanceActivated', setter: inheritance.setIsActivated },
        { getter: 'getTotalTransfered', setter: inheritance.setTotalTransferred },
    ];
    function setHeirs() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, addresses, bps, trxRequest, _b, trx;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = heirs.reduce(function (acc, heir) {
                            acc.addresses.push(heir.walletAddress);
                            acc.bps.push(heir.percent * 100);
                            return acc;
                        }, { addresses: [], bps: [] }), addresses = _a.addresses, bps = _a.bps;
                        if (!walletContract)
                            return [2 /*return*/];
                        trxRequest = {
                            from: wallet.account,
                            to: onChainWalletDetails.account,
                            type: 'SET HEIRS',
                        };
                        _b = trxRequest;
                        return [4 /*yield*/, walletContract.methods.setHeirs(addresses, bps).encodeABI()];
                    case 1:
                        _b.data = _c.sent();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function setInheritance() {
        return __awaiter(this, void 0, void 0, function () {
            var trxRequest, seconds, _a, trx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!walletContract)
                            return [2 /*return*/];
                        trxRequest = {
                            to: onChainWalletDetails.account,
                            type: 'ENABLE INHERITANCE',
                        };
                        seconds = inheritance.timeLeftCurrent;
                        _a = trxRequest;
                        return [4 /*yield*/, walletContract.methods.setInheritance(seconds).encodeABI()];
                    case 1:
                        _a.data = _b.sent();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var activateInheritance = function () { return __awaiter(void 0, void 0, void 0, function () {
        var trxRequest, _a, trx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!walletContract)
                        return [2 /*return*/];
                    trxRequest = {
                        to: onChainWalletDetails.account,
                        type: 'ENABLE INHERITANCE',
                    };
                    _a = trxRequest;
                    return [4 /*yield*/, walletContract.methods.activateInheritance().encodeABI()];
                case 1:
                    _a.data = _b.sent();
                    trx = createTransaction(trxRequest);
                    return [4 /*yield*/, sendTransaction(trx)];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    function clearInheritance() {
        return __awaiter(this, void 0, void 0, function () {
            var trxRequest, trx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!walletContract)
                            return [2 /*return*/];
                        trxRequest = {
                            to: onChainWalletDetails.account,
                            type: 'DISABLE INHERITANCE',
                        };
                        trxRequest.data = walletContract.methods.clearInheritance().encodeABI();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var prevHeirsData = usePrevious([]);
    var updateCurrentHeirs = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!walletContract)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(INHERITANCE_DATA_METHODS.map(function (method) { return __awaiter(void 0, void 0, void 0, function () {
                            var data, setter;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, walletContract.methods[method.getter]().call()];
                                    case 1:
                                        data = _a.sent();
                                        if (method.getter === 'getHeirs') {
                                            if (!prevHeirsData ||
                                                (prevHeirsData &&
                                                    Boolean(data.find(function (item, i) {
                                                        var prevData = prevHeirsData;
                                                        return item !== prevData[i];
                                                    })))) {
                                                inheritance.clear();
                                                data.forEach(function (heir) {
                                                    var parsedHeir = parseHeir(heir);
                                                    if (!parsedHeir)
                                                        return;
                                                    method.setter(parsedHeir, true);
                                                });
                                                prevHeirsData = data;
                                            }
                                        }
                                        else {
                                            setter = method.setter;
                                            setter(data);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    updateHeirsCmd.failed({ message: e_1.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var inheritanceEvents = [
        'InheritanceActivated',
        'InheritanceChanged',
        'InheritanceHeirsChanged',
        'InheritancePayment',
        'InheritanceRemoved',
    ];
    var __inheritanceEvents = useRef(inheritanceEvents);
    var __updateCurrentHeirs = useRef(updateCurrentHeirs);
    var __inheritance = useRef(inheritance);
    var __setHeirs = useRef(setHeirs);
    var __setHeirsCmd = useRef(setHeirsCmd);
    var __updateHeirsCmd = useRef(updateHeirsCmd);
    var __setInheritanceCmd = useRef(setInheritanceCmd);
    var __setInheritance = useRef(setInheritance);
    var __clearInheritanceCmd = useRef(clearInheritanceCmd);
    var __clearInheritance = useRef(clearInheritance);
    var __activateByTimerCmd = useRef(activateByTimerCmd);
    var __activateCmd = useRef(activateCmd);
    var __activateInheritance = useRef(activateInheritance);
    useEffect(function () {
        var updateCurrentHeirs = __updateCurrentHeirs.current;
        var inheritanceEvents = __inheritanceEvents.current;
        if (!walletContract)
            return;
        walletContract.events
            .allEvents()
            .on('data', function (e) {
            var inheritanceEvent = e;
            if (!inheritanceEvents.includes(inheritanceEvent.event))
                return;
            updateCurrentHeirs();
        })
            .on('error', function (e) {
            var inheritanceEvent = e;
            if (!inheritanceEvents.includes(inheritanceEvent.event))
                return;
            updateCurrentHeirs();
        });
    }, [walletContract]);
    useEffect(function () {
        if (!inheritance.timestamp || !inheritance.timeout)
            return;
    }, [inheritance.timestamp, inheritance.timeout]);
    useEffect(function () {
        var updateCurrentHeirs = __updateCurrentHeirs.current;
        var inheritance = __inheritance.current;
        if (!walletContract) {
            inheritance.clear();
            return;
        }
        updateCurrentHeirs();
    }, [walletContract]);
    useEffect(function () {
        var inheritance = __inheritance.current;
        var setHeirs = __setHeirs.current;
        var setHeirsCmd = __setHeirsCmd.current;
        var updateHeirsCmd = __updateHeirsCmd.current;
        if (!setHeirsCmd.is.ready || setHeirsCmd.is.running)
            return;
        var setHeirsAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        setHeirsCmd.start();
                        return [4 /*yield*/, setHeirs()];
                    case 1:
                        _a.sent();
                        setHeirsCmd.done();
                        inheritance.saveChanges();
                        updateHeirsCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        setHeirsCmd.failed({ message: e_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        setHeirsAsync();
    }, [setHeirsCmd.is.ready]);
    useEffect(function () {
        var setInheritanceCmd = __setInheritanceCmd.current;
        var setInheritance = __setInheritance.current;
        var updateHeirsCmd = __updateHeirsCmd.current;
        if (!setInheritanceCmd.is.ready || setInheritanceCmd.is.running)
            return;
        var setInheritanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        setInheritanceCmd.start();
                        return [4 /*yield*/, setInheritance()];
                    case 1:
                        _a.sent();
                        setInheritanceCmd.done();
                        updateHeirsCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        setInheritanceCmd.failed({ message: e_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        setInheritanceAsync();
    }, [setInheritanceCmd.is.ready]);
    useEffect(function () {
        var clearInheritanceCmd = __clearInheritanceCmd.current;
        var clearInheritance = __clearInheritance.current;
        var updateHeirsCmd = __updateHeirsCmd.current;
        if (!clearInheritanceCmd.is.ready || clearInheritanceCmd.is.running)
            return;
        var clearInheritanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        clearInheritanceCmd.start();
                        return [4 /*yield*/, clearInheritance()];
                    case 1:
                        _a.sent();
                        clearInheritanceCmd.done();
                        updateHeirsCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        clearInheritanceCmd.failed({ message: e_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        clearInheritanceAsync();
    }, [clearInheritanceCmd.is.ready]);
    useEffect(function () {
        var activateByTimerCmd = __activateByTimerCmd.current;
        if (!activateByTimerCmd.is.ready || activateByTimerCmd.is.running)
            return;
        activateByTimerCmd.start();
    }, [activateByTimerCmd.is.ready]);
    useEffect(function () {
        var activateByTimerCmd = __activateByTimerCmd.current;
        if (!isActivated)
            return;
        activateByTimerCmd.done();
    }, [isActivated]);
    useEffect(function () {
        var activateByTimerCmd = __activateByTimerCmd.current;
        if (!isEnabled)
            return;
        activateByTimerCmd.done();
    }, [isEnabled]);
    useEffect(function () {
        var updateHeirsCmd = __updateHeirsCmd.current;
        var activateCmd = __activateCmd.current;
        var activateInheritance = __activateInheritance.current;
        if (!activateCmd.is.ready || activateCmd.is.running)
            return;
        var activateInheritanceAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        activateCmd.start();
                        return [4 /*yield*/, activateInheritance()];
                    case 1:
                        _a.sent();
                        activateCmd.done();
                        updateHeirsCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        activateCmd.failed({ message: e_5.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        activateInheritanceAsync();
    }, [activateCmd.is.ready]);
    useEffect(function () {
        var updateHeirsCmd = __updateHeirsCmd.current;
        var updateCurrentHeirs = __updateCurrentHeirs.current;
        if (!updateHeirsCmd.is.ready || updateHeirsCmd.is.running)
            return;
        var updateHeirsCmdAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        updateHeirsCmd.start();
                        return [4 /*yield*/, updateCurrentHeirs()];
                    case 1:
                        _a.sent();
                        updateHeirsCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        updateHeirsCmd.failed({ message: e_6.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        updateHeirsCmdAsync();
    }, [updateHeirsCmd.is.ready]);
};
export { useInheritance };
