import React from 'react';

import { AccountContext } from '../context/account';
import { accountStore } from '../stores/account';
import { Web3Provider } from './Web3Provider';
import { ContractProvider } from './OnChainContractProvider';

export const KiroboProvider: React.FC = props => (
  <AccountContext.Provider value={accountStore}>
    <ContractProvider>
      <Web3Provider />
    </ContractProvider>
    {props.children}
  </AccountContext.Provider>
);
