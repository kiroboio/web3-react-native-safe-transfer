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
import { toWei } from 'web3-utils';
import { useAccount, useContract } from '..';
import { tokens as tokensConfig } from '../stores/account';
import { useWeb3 } from './useWeb3';
import { toJS } from 'mobx';
var useProcessTransactions = function () {
    var web3Connect = useWeb3();
    var onChain = useContract();
    var onChainWalletContract = onChain.walletContract;
    var tokensContract = onChain.tokenContract;
    var _a = useAccount(), transactions = _a.transactions, tokens = _a.tokens, wallet = _a.wallet, chainId = _a.chainId;
    var selectedToken = tokens.token;
    var sendTransaction = function (trx) { return __awaiter(void 0, void 0, void 0, function () {
        var currentTransaction, from, to, value, data, web3TransactionSendData, nonce, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    trx.transactionCmd.start();
                    currentTransaction = __assign({}, trx);
                    if (!currentTransaction.valueToDisplay)
                        currentTransaction.valueToDisplay = currentTransaction.value;
                    currentTransaction.value = toWei(currentTransaction.value);
                    currentTransaction.gas = currentTransaction.gas * 2;
                    if (!currentTransaction.from && web3Connect.address)
                        currentTransaction.from = web3Connect.address;
                    from = currentTransaction.from, to = currentTransaction.to, value = currentTransaction.value, data = currentTransaction.data;
                    web3TransactionSendData = { from: from };
                    return [4 /*yield*/, web3Connect.library.eth.getTransactionCount(from, 'pending')];
                case 1:
                    nonce = _b.sent();
                    if (value)
                        web3TransactionSendData.value = value;
                    if (data)
                        web3TransactionSendData.data = data;
                    if (to)
                        web3TransactionSendData.to = to;
                    if (nonce)
                        web3TransactionSendData.nonce = nonce;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    _a = web3TransactionSendData;
                    return [4 /*yield*/, web3Connect.library.eth.estimateGas(web3TransactionSendData)];
                case 3:
                    _a.gas =
                        (_b.sent()) * 2;
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    web3TransactionSendData.gas = 40000;
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        web3Connect.library.eth
                            .sendTransaction(web3TransactionSendData)
                            .on('transactionHash', function (txHash) {
                            currentTransaction.txHash = txHash;
                            currentTransaction.timestamp = new Date();
                            transactions.updateTransactionRequest(currentTransaction.id, currentTransaction);
                        })
                            .on('receipt', function (receipt) {
                            var tReceipt = receipt;
                            if (!tReceipt.status) {
                                reject('Transaction failed');
                            }
                            transactions.updateTransactionReceipt(currentTransaction.id, tReceipt);
                            trx === null || trx === void 0 ? void 0 : trx.transactionCmd.done();
                            resolve(transactions);
                        })
                            .on('error', function (err) {
                            trx.transactionCmd.failed({ message: err.message });
                            reject(err);
                        });
                    })];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var sendTokenTransaction = function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
        var currentTransaction, gas, e_2, nonce, txHash, receipt, e_3;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 8, , 9]);
                    transaction.transactionCmd.start();
                    currentTransaction = __assign({}, toJS(transaction));
                    gas = void 0;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, web3Connect.library.eth.estimateGas(currentTransaction)];
                case 2:
                    gas = (_c.sent()) * 4;
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _c.sent();
                    gas = 100000;
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, web3Connect.library.eth.getTransactionCount(wallet.account, 'pending')];
                case 5:
                    nonce = _c.sent();
                    return [4 /*yield*/, (tokensContract === null || tokensContract === void 0 ? void 0 : tokensContract.methods.transfer(currentTransaction.to, currentTransaction.valueInWei).send({ from: wallet.account, gas: gas, nonce: nonce }))];
                case 6:
                    txHash = _c.sent();
                    currentTransaction.txHash = txHash;
                    currentTransaction.timestamp = new Date();
                    transactions.updateTransactionRequest(currentTransaction.id, currentTransaction);
                    return [4 /*yield*/, ((_b = (_a = web3Connect.library) === null || _a === void 0 ? void 0 : _a.eth) === null || _b === void 0 ? void 0 : _b.getTransactionReceipt(txHash.transactionHash))];
                case 7:
                    receipt = (_c.sent());
                    currentTransaction.receipt = receipt;
                    if (!(receipt === null || receipt === void 0 ? void 0 : receipt.status)) {
                        transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.failed({ message: 'Transaction failed' });
                    }
                    transactions.updateTransactionReceipt(currentTransaction.id, receipt);
                    transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.done();
                    return [3 /*break*/, 9];
                case 8:
                    e_3 = _c.sent();
                    transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.failed({ message: e_3.message });
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var sendOnChainTokenTransaction = function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
        var currentTransaction, gas, e_4, nonce, txHash, _a, e_5, receipt, e_6;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 12, , 13]);
                    transaction.transactionCmd.start();
                    currentTransaction = __assign({}, toJS(transaction));
                    gas = void 0;
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, web3Connect.library.eth.estimateGas(currentTransaction)];
                case 2:
                    gas = (_d.sent()) * 4;
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _d.sent();
                    gas = 100000;
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, web3Connect.library.eth.getTransactionCount(wallet.account, 'pending')];
                case 5:
                    nonce = _d.sent();
                    return [4 /*yield*/, (onChainWalletContract === null || onChainWalletContract === void 0 ? void 0 : onChainWalletContract.methods.transfer20(tokensConfig[selectedToken].address[chainId], currentTransaction.to, currentTransaction.valueInWei).send({ from: wallet.account, gas: gas, nonce: nonce }))];
                case 6:
                    txHash = _d.sent();
                    currentTransaction.txHash = txHash;
                    currentTransaction.timestamp = new Date();
                    _d.label = 7;
                case 7:
                    _d.trys.push([7, 9, , 10]);
                    _a = currentTransaction;
                    return [4 /*yield*/, web3Connect.library.eth.estimateGas(currentTransaction)];
                case 8:
                    _a.gas = _d.sent();
                    return [3 /*break*/, 10];
                case 9:
                    e_5 = _d.sent();
                    currentTransaction.gas = 100000;
                    return [3 /*break*/, 10];
                case 10:
                    transactions.updateTransactionRequest(currentTransaction.id, currentTransaction);
                    return [4 /*yield*/, ((_c = (_b = web3Connect.library) === null || _b === void 0 ? void 0 : _b.eth) === null || _c === void 0 ? void 0 : _c.getTransactionReceipt(txHash.transactionHash))];
                case 11:
                    receipt = (_d.sent());
                    currentTransaction.receipt = receipt;
                    if (!(receipt === null || receipt === void 0 ? void 0 : receipt.status)) {
                        transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.failed({ message: 'Transaction failed' });
                    }
                    transactions.updateTransactionRequest(currentTransaction.id, currentTransaction);
                    transactions.updateTransactionReceipt(currentTransaction.id, receipt);
                    transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.done();
                    return [3 /*break*/, 13];
                case 12:
                    e_6 = _d.sent();
                    transaction === null || transaction === void 0 ? void 0 : transaction.transactionCmd.failed({ message: e_6.message });
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    }); };
    return { sendTransaction: sendTransaction, sendTokenTransaction: sendTokenTransaction, sendOnChainTokenTransaction: sendOnChainTokenTransaction };
};
export { useProcessTransactions };
