import React, { useContext } from 'react';
import { web3ProviderStore, accountStore } from '../stores/account';
export var AccountContext = React.createContext(accountStore);
export function useAccount() {
    return useContext(AccountContext);
}
export var Web3ProviderContext = React.createContext(web3ProviderStore);
export function useWeb3Provider() {
    return useContext(Web3ProviderContext);
}
