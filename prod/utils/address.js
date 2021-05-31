import web3 from 'web3';
export var isValidAddress = function (address) {
    if (parseFloat(web3.utils.hexToNumberString(address)) === 0)
        return false;
    return web3.utils.isAddress(address);
};
