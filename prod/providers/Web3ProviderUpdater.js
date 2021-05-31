import React from "react";
import { observer } from "mobx-react-lite";
import "@metamask/detect-provider";
import { useRegularWallet, useNewBlockSubscribe, useBalances, useSetupOnChainContract, useTransactions, useBackup, useCreateOnChainContract, useInheritance, useConnect, useDisconnect, } from "../web3Hooks";
export var Web3ProviderUpdater = observer(function (_a) {
    var children = _a.children, customHooks = _a.customHooks;
    var hooks = [
        useRegularWallet,
        useNewBlockSubscribe,
        useBalances,
        useSetupOnChainContract,
        useTransactions,
        useBackup,
        useCreateOnChainContract,
        useInheritance,
        useConnect,
        useDisconnect,
    ].concat(customHooks || []);
    hooks.map(function (useHook) {
        try {
            return useHook();
        }
        catch (e) {
            throw new Error(e);
        }
    });
    return React.createElement(React.Fragment, null, children);
});
