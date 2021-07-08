import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Web3 from 'web3'
import { Web3ProviderUpdater } from './Web3ProviderUpdater'
import { IInAppWalletConnector } from '../customConnectors/InAppWalletConnector'
import { Connectors } from '..'

const getLibrary = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any,
  connector?: AbstractConnector | IInAppWalletConnector
) => {
  // const chainId = (provider as any).chainId
  // const chain: any = { 1: 'mainnet', 4: 'rinkeby' }
  // const chainName = chain[+chainId]
  // console.log('get library:', +chainId)
  // if (chainName) {
  //   return new Web3(`wss://${chainName}.infura.io/ws/v3/14c73ecdbcaa464585aa7c438fdf6a77`)
  if (connector) {
    const appConnector = connector as IInAppWalletConnector
    if (appConnector.name === Connectors.InAppWallet) {
      const web3 = appConnector?.web3
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
