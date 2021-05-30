import React, { useContext } from 'react';
import { AccountStoreType, web3ProviderStore, accountStore } from '../stores/account';

export const AccountContext: AccountStoreType = React.createContext(accountStore) as any;

export function useAccount(): AccountStoreType {
  return useContext(AccountContext as any);
}

export const Web3ProviderContext = React.createContext(web3ProviderStore);

export function useWeb3Provider(): typeof web3ProviderStore {
  return useContext(Web3ProviderContext);
}
