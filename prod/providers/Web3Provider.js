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
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Web3ProviderUpdater } from "./Web3ProviderUpdater";
import { Connectors } from "../hooks/useWeb3";
import { observer } from "mobx-react-lite";
var getLibrary = function (provider, connector) {
    if (connector) {
        var appConnector = connector;
        if (appConnector.name === Connectors.InAppWallet) {
            appConnector.setWeb3();
            return appConnector.web3;
        }
    }
    return new Web3(provider);
};
export var Web3Provider = observer(function (props) {
    return (React.createElement(Web3ReactProvider, { getLibrary: getLibrary },
        React.createElement(Web3ProviderUpdater, __assign({}, props))));
});
