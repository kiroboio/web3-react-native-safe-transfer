import Web3 from "web3";
import { useAccount } from "../context/account";
import { addMethod, string as yupString, number as yupNumber, } from "yup";
addMethod(yupString, "emptyAsUndefined", function () {
    return this.transform(function (value) { return (value ? value : undefined); });
});
addMethod(yupNumber, "emptyAsUndefined", function () {
    return this.transform(function (value, originalValue) { var _a; return ((_a = String(originalValue)) === null || _a === void 0 ? void 0 : _a.trim()) ? value : undefined; });
});
addMethod(yupString, "ethereumAddress", function (errorMessage) {
    return this.test("test-ethereum-address", errorMessage, function (value) {
        var _a = this, path = _a.path, createError = _a.createError;
        return ((value && Web3.utils.isAddress(value)) ||
            createError({ path: path, message: errorMessage }));
    });
});
addMethod(yupString, "ether", function (min, minErrorMessage, maxErrorMessage) {
    var _a = useAccount(), currency = _a.currency, balance = _a.balance, tokenBalance = _a.tokenBalance;
    return this.test("test-ether", "ether failed", function (value) {
        var _a = this, path = _a.path, createError = _a.createError;
        value = value || "0";
        var decimal = value.indexOf(".");
        if (decimal > 0) {
            value = value.substr(0, decimal + 19);
        }
        var weiValue = Web3.utils.toBN(Web3.utils.toWei(value, "ether"));
        var weiMin = Web3.utils.toBN(min);
        var weiMax = Web3.utils.toBN(currency.symbol === "ETH" ? balance : tokenBalance);
        if (value && weiValue.gt(weiMax)) {
            return createError({
                path: path,
                message: maxErrorMessage + " " + currency.symbol,
            });
        }
        if (value && weiValue.lt(weiMin)) {
            return createError({ path: path, message: minErrorMessage });
        }
        return true;
    });
});
