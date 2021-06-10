import React from "react";
import { useBackup } from "../web3Hooks";
export interface KiroboProps {
    children?: React.ReactNode;
    customHooks?: (() => void)[];
    features?: ("onChainWallet" | "backup" | "inheritance")[];
}
export declare type UseBackup = typeof useBackup;
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
export declare const KiroboProvider: (props: KiroboProps) => JSX.Element;
