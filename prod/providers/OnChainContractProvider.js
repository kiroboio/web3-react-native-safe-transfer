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
import React, { useContext, useReducer } from 'react';
var initContract = {
    contract: undefined,
    tokenContract: undefined,
    walletContract: undefined,
};
var contractReducer = function (state, action) {
    switch (action.type) {
        case 'setOnChainContract':
            return __assign(__assign({}, state), { contract: action.payload });
        case 'setOnChainWalletContract':
            return __assign(__assign({}, state), { walletContract: action.payload });
        case 'setOnChainTokenContract':
            return __assign(__assign({}, state), { tokenContract: action.payload });
        case 'cleanContracts':
            return initContract;
        default:
            return state;
    }
};
var DispatchContext = React.createContext(undefined);
var ContractContext = React.createContext(initContract);
export var ContractProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(contractReducer, initContract), onChain = _b[0], dispatchOnChainContact = _b[1];
    return (React.createElement(ContractContext.Provider, { value: onChain },
        React.createElement(DispatchContext.Provider, { value: dispatchOnChainContact }, children)));
};
export var useDispatchContract = function () {
    var context = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('useOnChainContract context is missing');
    }
    return context;
};
export function useContract() {
    return useContext(ContractContext);
}
