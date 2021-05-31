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
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { useProcessTransactions } from '../hooks/useProcessTransactions';
var useBackup = function () {
    var _a = useAccount(), onChainWalletDetails = _a.onChainWalletDetails, transactions = _a.transactions, backup = _a.backup, wallet = _a.wallet;
    var sendTransaction = useProcessTransactions().sendTransaction;
    var createTransaction = transactions.createTransaction;
    var walletContract = useContract().walletContract;
    var updateBackupDataCmd = backup.updateBackupDataCmd, startTimerCmd = backup.startTimerCmd, acceptCmd = backup.acceptCmd, removeCmd = backup.removeCmd, rejectCmd = backup.rejectCmd, createCmd = backup.createCmd, resetTimerCmd = backup.resetTimerCmd, activateByTimerCmd = backup.activateByTimerCmd, state = backup.state;
    var claimOwnershipCmd = onChainWalletDetails.claimOwnershipCmd;
    var onChainWalletAccount = onChainWalletDetails.account;
    var onChainWalletContract = walletContract;
    var backupEvents = [
        'BackupActivated',
        'BackupChanged',
        'BackupEnabled',
        'BackupPayment',
        'BackupRegistered',
        'BackupRemoved',
        'OwnershipReclaimed',
        'OwnershipTransferred'
    ];
    var removeBackup = function () { return __awaiter(void 0, void 0, void 0, function () {
        var trxRequest, trx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onChainWalletContract)
                        return [2 /*return*/];
                    trxRequest = {
                        to: onChainWalletAccount,
                        from: wallet.account,
                        value: '0',
                        type: 'REMOVE BACKUP',
                    };
                    trxRequest.data = onChainWalletContract.methods.removeBackup().encodeABI();
                    trx = createTransaction(trxRequest);
                    return [4 /*yield*/, sendTransaction(trx)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var createBackup = function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, formTimeout, trxRequest, setBackup, trx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = backup.address, formTimeout = backup.formTimeout;
                    if (!onChainWalletContract)
                        return [2 /*return*/];
                    trxRequest = {
                        to: onChainWalletAccount,
                        type: 'SET BACKUP',
                        from: wallet.account,
                        value: '0',
                    };
                    setBackup = onChainWalletContract.methods.setBackup(address, formTimeout);
                    trxRequest.data = setBackup.encodeABI();
                    trx = createTransaction(trxRequest);
                    return [4 /*yield*/, sendTransaction(trx)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var backupStates = ['PENDING', 'REGISTERED', 'ENABLED', 'ACTIVATED'];
    var GET_BACKUP_DATA_METHODS = [
        {
            name: 'getBackupState',
            setter: function (stateIndex) { return backup.setState(backupStates[Number(stateIndex)]); },
        },
        { name: 'getBackupWallet', setter: backup.setWalletAddress },
        { name: 'owner', setter: backup.setOwnerAddress },
        { name: 'isOwner', setter: backup.setIsOwner },
        { name: 'getBackupTimeout', setter: backup.setTimeout },
        { name: 'getBackupTimestamp', setter: backup.setTimestamp },
    ];
    var updateBackupData = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onChainWalletContract)
                        return [2 /*return*/];
                    return [4 /*yield*/, Promise.all(GET_BACKUP_DATA_METHODS.map(function (method) { return __awaiter(void 0, void 0, void 0, function () {
                            var someData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, onChainWalletContract.methods[method.name]().call()];
                                    case 1:
                                        someData = _a.sent();
                                        method.setter(someData);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var __backupEvents = useRef(backupEvents);
    var __createBackup = useRef(createBackup);
    var __updateBackupData = useRef(updateBackupData);
    var __updateBackupDataCmd = useRef(updateBackupDataCmd);
    var __startTimerCmd = useRef(startTimerCmd);
    var __acceptCmd = useRef(acceptCmd);
    var __createCmd = useRef(createCmd);
    var __removeCmd = useRef(removeCmd);
    var __rejectCmd = useRef(rejectCmd);
    var __resetTimerCmd = useRef(resetTimerCmd);
    var __claimOwnershipCmd = useRef(claimOwnershipCmd);
    var __activateByTimerCmd = useRef(activateByTimerCmd);
    useEffect(function () {
        var updateBackupData = __updateBackupData.current;
        var backupEvents = __backupEvents.current;
        if (!walletContract)
            return;
        walletContract.events
            .allEvents()
            .on('data', function (e) {
            var backupEvent = e;
            if (!backupEvents.includes(backupEvent.event))
                return;
            updateBackupData();
        })
            .on('error', function (e) {
            var backupEvent = e;
            if (!backupEvents.includes(backupEvent.event))
                return;
            updateBackupData();
        });
    }, [walletContract]);
    useEffect(function () {
        var activateByTimerCmd = __activateByTimerCmd.current;
        if (!activateByTimerCmd.is.ready || activateByTimerCmd.is.running)
            return;
        activateByTimerCmd.start();
    }, [activateByTimerCmd.is.ready]);
    useEffect(function () {
        var activateByTimerCmd = __activateByTimerCmd.current;
        activateByTimerCmd.done();
    }, [state]);
    function approveBackup() {
        return __awaiter(this, void 0, void 0, function () {
            var trxRequest, trx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!onChainWalletContract)
                            return [2 /*return*/];
                        trxRequest = {
                            from: wallet.account,
                            to: onChainWalletAccount,
                            type: 'SET BACKUP',
                            value: '0',
                        };
                        trxRequest.data = onChainWalletContract.methods.accept().encodeABI();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function rejectBackup() {
        return __awaiter(this, void 0, void 0, function () {
            var trxRequest, trx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!onChainWalletContract)
                            return [2 /*return*/];
                        trxRequest = {
                            to: onChainWalletAccount,
                            type: 'DECLINE BACKUP',
                        };
                        trxRequest = onChainWalletContract.methods.decline().encodeABI();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function resetBackupTimer() {
        return __awaiter(this, void 0, void 0, function () {
            var walletAddress, timeout, trxRequest, trx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!onChainWalletContract)
                            return [2 /*return*/];
                        walletAddress = backup.walletAddress, timeout = backup.timeout;
                        trxRequest = {
                            to: onChainWalletAccount,
                            type: 'RESET BACKUP TIMER',
                        };
                        trxRequest.data = onChainWalletContract.methods.setBackup(walletAddress, timeout).encodeABI();
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var startBackupTimer = function () { return __awaiter(void 0, void 0, void 0, function () {
        var trxRequest, _a, trx;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!onChainWalletContract)
                        return [2 /*return*/];
                    trxRequest = {
                        to: onChainWalletAccount,
                        from: wallet.account,
                        type: 'START TIMER',
                        value: '0',
                    };
                    _a = trxRequest;
                    return [4 /*yield*/, onChainWalletContract.methods.enable().encodeABI()];
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
    var __startBackupTimer = useRef(startBackupTimer);
    useEffect(function () {
        var startTimerCmd = __startTimerCmd.current;
        var startBackupTimer = __startBackupTimer.current;
        var startBackupTimerAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!startTimerCmd.is.ready || startTimerCmd.is.running)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        startTimerCmd.start();
                        return [4 /*yield*/, startBackupTimer()];
                    case 2:
                        _a.sent();
                        startTimerCmd.done();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        startTimerCmd.failed({ message: e_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        startBackupTimerAsync();
    }, [startTimerCmd.is.ready]);
    useEffect(function () {
        var startTimerCmd = __startTimerCmd.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!startTimerCmd.is.done || startTimerCmd.is.running)
            return;
        updateBackupDataCmd.prepare();
    }, [startTimerCmd.is.done]);
    useEffect(function () {
        var createCmd = __createCmd.current;
        var createBackup = __createBackup.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        var createBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!createCmd.is.ready || createCmd.is.running)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        createCmd.start();
                        return [4 /*yield*/, createBackup()];
                    case 2:
                        _a.sent();
                        createCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        createCmd.failed({ message: e_2.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        createBackupAsync();
    }, [createCmd.is.ready]);
    useEffect(function () {
        var updateBackupData = __updateBackupData.current;
        if (!walletContract) {
            return;
        }
        updateBackupData();
    }, [walletContract]);
    var __removeBackup = useRef(removeBackup);
    useEffect(function () {
        var removeCmd = __removeCmd.current;
        var removeBackup = __removeBackup.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!removeCmd.is.ready || removeCmd.is.running)
            return;
        var removeBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        removeCmd.start();
                        return [4 /*yield*/, removeBackup()];
                    case 1:
                        _a.sent();
                        removeCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        removeCmd.failed({ message: e_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        removeBackupAsync();
    }, [removeCmd.is.ready]);
    var __rejectBackup = useRef(rejectBackup);
    useEffect(function () {
        var rejectCmd = __rejectCmd.current;
        var rejectBackup = __rejectBackup.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!rejectCmd.is.ready || rejectCmd.is.running)
            return;
        var rejectBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        rejectCmd.start();
                        return [4 /*yield*/, rejectBackup()];
                    case 1:
                        _a.sent();
                        rejectCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        rejectCmd.failed({ message: e_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        rejectBackupAsync();
    }, [rejectCmd.is.ready]);
    var __resetBackupTimer = useRef(resetBackupTimer);
    useEffect(function () {
        var resetTimerCmd = __resetTimerCmd.current;
        var resetBackupTimer = __resetBackupTimer.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!resetTimerCmd.is.ready || resetTimerCmd.is.running)
            return;
        var resetBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        resetTimerCmd.start();
                        return [4 /*yield*/, resetBackupTimer()];
                    case 1:
                        _a.sent();
                        resetTimerCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        resetTimerCmd.failed({ message: e_5.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        resetBackupAsync();
    }, [resetTimerCmd.is.ready]);
    var __approveBackup = useRef(approveBackup);
    useEffect(function () {
        var acceptCmd = __acceptCmd.current;
        var approveBackup = __approveBackup.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!acceptCmd.is.ready || acceptCmd.is.running)
            return;
        var approveBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        acceptCmd.start();
                        return [4 /*yield*/, approveBackup()];
                    case 1:
                        _a.sent();
                        acceptCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        acceptCmd.failed({ message: e_6.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        approveBackupAsync();
    }, [acceptCmd.is.ready]);
    useEffect(function () {
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        var updateBackupData = __updateBackupData.current;
        if (!updateBackupDataCmd.is.ready || updateBackupDataCmd.is.running)
            return;
        var approveBackupAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        updateBackupDataCmd.start();
                        return [4 /*yield*/, updateBackupData()];
                    case 1:
                        _a.sent();
                        updateBackupDataCmd.done();
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        updateBackupDataCmd.failed({ message: e_7.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        approveBackupAsync();
    }, [updateBackupDataCmd.is.ready]);
    function claimReclaimOwnership(type) {
        return __awaiter(this, void 0, void 0, function () {
            var trxRequest, trx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!onChainWalletContract)
                            return [2 /*return*/];
                        onChainWalletContract.methods.claimOwnership().encodeABI();
                        trxRequest = {
                            to: onChainWalletAccount,
                            type: type,
                        };
                        if (backup.isBackup(wallet.account)) {
                            trxRequest.data = onChainWalletContract.methods.claimOwnership().encodeABI();
                        }
                        else {
                            trxRequest.data = onChainWalletContract.methods.reclaimOwnership().encodeABI();
                        }
                        trx = createTransaction(trxRequest);
                        return [4 /*yield*/, sendTransaction(trx)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var __claimReclaimOwnership = useRef(claimReclaimOwnership);
    useEffect(function () {
        var claimOwnershipCmd = __claimOwnershipCmd.current;
        var claimReclaimOwnership = __claimReclaimOwnership.current;
        var updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!claimOwnershipCmd.is.ready || claimOwnershipCmd.is.running)
            return;
        var claimReclaimOwnershipAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        claimOwnershipCmd.start();
                        return [4 /*yield*/, claimReclaimOwnership('CLAIM OWNERSHIP')];
                    case 1:
                        _a.sent();
                        claimOwnershipCmd.done();
                        updateBackupDataCmd.prepare();
                        return [3 /*break*/, 3];
                    case 2:
                        e_8 = _a.sent();
                        claimOwnershipCmd.failed({ message: e_8.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        claimReclaimOwnershipAsync();
    }, [claimOwnershipCmd.is.ready]);
};
export { useBackup };
