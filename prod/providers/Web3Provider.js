import React from "react";
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { Web3ProviderUpdater } from './Web3ProviderUpdater';
import { Connectors } from '..';
import { observer } from 'mobx-react-lite';
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
        React.createElement(Web3ProviderUpdater, { customHooks: props.customHooks })));
});
