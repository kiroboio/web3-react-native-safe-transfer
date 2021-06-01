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
  ({ children, customHooks, features }: KiroboProps) => {
    const optionalHooks: Set<() => void> = new Set();

    const hooks = React.useRef<(() => void)[] | undefined>(undefined);
    if(!hooks.current) {
      if(features?.includes("onChainWallet")) {  
          optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract)
      }
      if(features?.includes("backup")) {  
          optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract).add(useBackup)
      }
      if(features?.includes("inheritance")) {  
          optionalHooks.add(useCreateOnChainContract).add(useSetupOnChainContract).add(useInheritance)
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
      .concat(customHooks || [])
    }

    hooks.current.map((useHook) => {
      try {
        return useHook();
      } catch (e) {
        throw new Error(e);
      }
    });

    return <>{children}</>;
  }
);
