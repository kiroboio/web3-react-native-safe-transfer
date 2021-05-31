import React from "react";
import { AccountContext } from "../context/account";
import { accountStore } from "../stores/account";
import { Web3Provider } from "./Web3Provider";
import { ContractProvider } from "./OnChainContractProvider";

export interface KiroboProps {
  children?: React.ReactNode;
  customHooks?: (() => void)[];
}

export const KiroboProvider = (props: KiroboProps): JSX.Element => (
  <AccountContext.Provider value={accountStore}>
    <ContractProvider>
      <Web3Provider customHooks={props.customHooks} />
    </ContractProvider>
    {props.children}
  </AccountContext.Provider>
);
