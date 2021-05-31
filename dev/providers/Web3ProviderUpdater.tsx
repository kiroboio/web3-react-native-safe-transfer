import React from "react";
import { observer } from "mobx-react-lite";
import "@metamask/detect-provider";
import {
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
} from "../web3Hooks";
import { KiroboProps } from "./KiroboProvider";

export const Web3ProviderUpdater = observer(
  ({ children, customHooks }: KiroboProps) => {
    const hooks = [
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

    hooks.map((useHook) => {
      try {
        return useHook();
      } catch (e) {
        throw new Error(e);
      }
    });

    return <>{children}</>;
  }
);
