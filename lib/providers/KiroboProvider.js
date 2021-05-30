import React from 'react';
import { AccountContext } from '../context/account';
import { accountStore } from '../stores/account';
import { Web3Provider } from './Web3Provider';
import { ContractProvider } from './OnChainContractProvider';
export const KiroboProvider = (props) => (React.createElement(AccountContext.Provider, { value: accountStore },
    React.createElement(ContractProvider, null,
        React.createElement(Web3Provider, { customHooks: props.customHooks })),
    props.children));
