import Web3 from 'web3';
import { useAccount } from '../context/account';
import { addMethod, string as yupString, number as yupNumber, } from 'yup';
addMethod(yupString, 'emptyAsUndefined', function () {
    return this.transform(value => (value ? value : undefined));
});
addMethod(yupNumber, 'emptyAsUndefined', function () {
    return this.transform((value, originalValue) => String(originalValue)?.trim() ? value : undefined);
});
addMethod(yupString, 'ethereumAddress', function (errorMessage) {
    return this.test(`test-ethereum-address`, errorMessage, function (value) {
        const { path, createError } = this;
        return (value && Web3.utils.isAddress(value)) || createError({ path, message: errorMessage });
    });
});
addMethod(yupString, 'ether', function (min, minErrorMessage, maxErrorMessage) {
    const { currency, balance, tokenBalance } = useAccount();
    return this.test(`test-ether`, 'ether failed', function (value) {
        const { path, createError } = this;
        value = value || '0';
        const decimal = value.indexOf('.');
        if (decimal > 0) {
            value = value.substr(0, decimal + 19);
        }
        const weiValue = Web3.utils.toBN(Web3.utils.toWei(value, 'ether'));
        const weiMin = Web3.utils.toBN(min);
        const weiMax = Web3.utils.toBN(currency.symbol === 'ETH' ? balance : tokenBalance);
        if (value && weiValue.gt(weiMax)) {
            return createError({
                path,
                message: `${maxErrorMessage} ${currency.symbol}`,
            });
        }
        if (value && weiValue.lt(weiMin)) {
            return createError({ path, message: minErrorMessage });
        }
        return true;
    });
});
