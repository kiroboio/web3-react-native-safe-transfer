import React from "react";
import { AccountContext } from "../context/account";
import { accountStore } from "../stores/account";
import { Web3Provider } from "./Web3Provider";
import { ContractProvider } from "./OnChainContractProvider";

export interface KiroboProps {
  children?: React.ReactNode;
  customHooks?: (() => void)[];
  features?: ("onChainWallet"|"backup"|"inheritance")[]
}

export const KiroboProvider = (props: KiroboProps): JSX.Element => (
  <AccountContext.Provider value={accountStore}>
    <ContractProvider>
      <Web3Provider {...props} />
    </ContractProvider>
    {props.children}
  </AccountContext.Provider>
);
