import React from "react";
import { observer } from "mobx-react-lite";
import "@metamask/detect-provider";
import { useRegularWallet, useNewBlockSubscribe, useBalances, useSetupOnChainContract, useTransactions, useBackup, useCreateOnChainContract, useInheritance, useConnect, useDisconnect, } from "../web3Hooks";
export var Web3ProviderUpdater = observer(function (_a) {
    var children = _a.children, customHooks = _a.customHooks, features = _a.features;
    var optionalHooks = new Set();
    var hooks = React.useRef(undefined);
    if (!hooks.current) {
        if (features === null || features === void 0 ? void 0 : features.includes("onChainWallet")) {
            optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract);
        }
        if (features === null || features === void 0 ? void 0 : features.includes("backup")) {
            optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract).add(useBackup);
        }
        if (features === null || features === void 0 ? void 0 : features.includes("inheritance")) {
            optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract).add(useInheritance);
        }
        hooks.current = [
            useRegularWallet,
            useNewBlockSubscribe,
            useBalances,
            useTransactions,
            useConnect,
            useDisconnect,
        ]
            .concat(Array.from(optionalHooks))
            .concat(customHooks || []);
    }
    hooks.current.map(function (useHook) {
        try {
            return useHook();
        }
        catch (e) {
            throw new Error(e);
        }
    });
    return React.createElement(React.Fragment, null, children);
});
