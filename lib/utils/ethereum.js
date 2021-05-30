import numeral from 'numeral';
import Web3 from 'web3';
export var etherToWei = function (value) {
    return Web3.utils.toWei((value === null || value === void 0 ? void 0 : value.toString()) || '0', 'ether');
};
export var weiToEther = function (value) {
    return Web3.utils.fromWei('' + value, 'ether');
};
export var formatEther = function (value, format // '0,0.0[00000]'
) {
    if (!format) {
        var val = typeof value === 'number' ? value : parseFloat(value);
        var precision = val > 0 ? Math.max(0, Math.log(val) / Math.LN10 + 1 + 1e-15) : 0;
        if (precision < 6) {
            format = "00.0[" + '0'.repeat(6 - precision) + "]";
        }
        else {
            format = '0.0';
        }
    }
    return numeral(value).format(format);
};
var ethereum = {
    weiToEther: weiToEther,
    etherToWei: etherToWei,
    formatEther: formatEther,
};
export default ethereum;
