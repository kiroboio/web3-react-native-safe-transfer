import React, { useContext, useReducer } from 'react';
const initContract = {
    contract: undefined,
    tokenContract: undefined,
    walletContract: undefined,
};
const contractReducer = (state, action) => {
    switch (action.type) {
        case 'setOnChainContract':
            return { ...state, contract: action.payload };
        case 'setOnChainWalletContract':
            return { ...state, walletContract: action.payload };
        case 'setOnChainTokenContract':
            return { ...state, tokenContract: action.payload };
        case 'cleanContracts':
            return initContract;
        default:
            return state;
    }
};
const DispatchContext = React.createContext(undefined);
const ContractContext = React.createContext(initContract);
export const ContractProvider = ({ children, }) => {
    const [onChain, dispatchOnChainContact] = useReducer(contractReducer, initContract);
    return (React.createElement(ContractContext.Provider, { value: onChain },
        React.createElement(DispatchContext.Provider, { value: dispatchOnChainContact }, children)));
};
export const useDispatchContract = () => {
    const context = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('useOnChainContract context is missing');
    }
    return context;
};
export function useContract() {
    return useContext(ContractContext);
}
