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
/**
 * @param children? React.ReactNode;
 * @param customHooks?: (() => void)[];
 * @param features?: ("onChainWallet"|"backup"|"inheritance")[]
 *
 * @returns JSX.Element
 *
 * 1. Give access to {@link accountStore}
 * ```
 * const { onChainWalletDetails, transactions, backup, wallet } = useAccount()
 * ```
 * 2. Activate web3 hooks
 *  - {@link useConnect}
 *  - {@link useDisconnect}
 *  - {@link useNewBlockSubscribe}
 *  - {@link useBalances}
 *  - {@link useTransactions}
 *  - {@link useRegularWallet}
 *  - {@link useCreateOnChainContract} _(optional)_
 *  - {@link useSetupOnChainContract} _(optional)_
 *  - {@link UseBackup} _(optional)_
 *  - {@link useInheritance} _(optional)_
 *
 * ### usage:
 *
 * ```
 * ReactDOM.render(
 *     <KiroboProvider features={["backup", "inheritance", "onChainWallet"]}>
 *        <App />
 *     </KiroboProvider>,
 *  document.getElementById('root')
 * )
 * ```
 *
 */
export var KiroboProvider = function (props) { return (React.createElement(AccountContext.Provider, { value: accountStore },
    React.createElement(ContractProvider, null,
        React.createElement(Web3Provider, __assign({}, props))),
    props.children)); };
