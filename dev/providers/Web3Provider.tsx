import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Web3 from 'web3'
import { Web3ProviderUpdater } from './Web3ProviderUpdater'
import { IInAppWalletConnector } from '../customConnectors/InAppWalletConnector'
import { Connectors } from '..'
import { provider } from 'web3/node_modules/web3-core';

const getLibrary = (
  provider: provider,
  connector?: AbstractConnector | IInAppWalletConnector
) => {
  if (connector) {
    const appConnector = connector as IInAppWalletConnector
    if (appConnector.name === Connectors.InAppWallet) {
      const web3 = appConnector.web3
      return web3
    }
  }
  return new Web3(provider)
}

export const Web3Provider: React.FC = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderUpdater />
    </Web3ReactProvider>
  )
}


