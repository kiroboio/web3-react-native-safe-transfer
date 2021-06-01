import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import Web3 from "web3";
import { Web3ProviderUpdater } from "./Web3ProviderUpdater";
import { IInAppWalletConnector } from "../customConnectors/InAppWalletConnector";
import { Connectors } from "../hooks/useWeb3";
import { KiroboProps } from "./KiroboProvider";
import { observer } from "mobx-react-lite";

const getLibrary = (
  provider: string,
  connector?: AbstractConnector | IInAppWalletConnector
) => {
  if (connector) {
    const appConnector = connector as IInAppWalletConnector;
    if (appConnector.name === Connectors.InAppWallet) {
      appConnector.setWeb3();
      return appConnector.web3;
    }
  }
  return new Web3(provider);
};

export const Web3Provider = observer((props: KiroboProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderUpdater {...props} />
    </Web3ReactProvider>
  );
});