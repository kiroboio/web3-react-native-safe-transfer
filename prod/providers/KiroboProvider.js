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
import React from "react";
import { AccountContext } from "../context/account";
import { accountStore } from "../stores/account";
import { Web3Provider } from "./Web3Provider";
import { ContractProvider } from "./OnChainContractProvider";
export var KiroboProvider = function (props) { return (React.createElement(AccountContext.Provider, { value: accountStore },
    React.createElement(ContractProvider, null,
        React.createElement(Web3Provider, __assign({}, props))),
    props.children)); };
