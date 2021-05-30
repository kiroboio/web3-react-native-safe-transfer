import axios from 'axios';
export var getRate = function () {
    return axios
        .get('https://api.coingecko.com/api/v3/exchange_rates', {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
        .then(function (response) {
        var _a, _b, _c, _d, _e, _f;
        var eth = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.rates) === null || _b === void 0 ? void 0 : _b.eth) === null || _c === void 0 ? void 0 : _c.value;
        var usd = (_f = (_e = (_d = response.data) === null || _d === void 0 ? void 0 : _d.rates) === null || _e === void 0 ? void 0 : _e.usd) === null || _f === void 0 ? void 0 : _f.value;
        if (Boolean(eth) && Boolean(usd))
            return Math.round((usd / eth) * 10000) / 10000;
        throw new Error('rate error');
    })
        .catch(function (err) {
        throw new Error(err);
    });
};
