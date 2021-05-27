import React, { useContext } from 'react';
import { accountStore, web3ProviderStore } from '../stores/account';

export const AccountContext = React.createContext(accountStore);

export function useAccount(): typeof accountStore {
  return useContext(AccountContext);
}

export const Web3ProviderContext = React.createContext(web3ProviderStore);

export function useWeb3Provider(): typeof web3ProviderStore {
  return useContext(Web3ProviderContext);
}
