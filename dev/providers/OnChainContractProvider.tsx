import React, { useContext, useReducer } from 'react';
import { Contract } from 'web3-eth-contract';

export type OnChainContractState = {
  contract?: Contract;
  walletContract?: Contract;
  tokenContract?: Contract;
};
type OnChainContractAction = {
  payload?: Contract;
  type:
    | 'setOnChainContract'
    | 'setOnChainWalletContract'
    | 'setOnChainTokenContract'
    | 'cleanContracts';
};

export type DispatchOnChainContract = React.Dispatch<OnChainContractAction>;

const initContract = {
  contract: undefined,
  tokenContract: undefined,
  walletContract: undefined,
};

const contractReducer = (state: OnChainContractState, action: OnChainContractAction) => {
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

const DispatchContext = React.createContext<((a: OnChainContractAction) => void) | undefined>(
  undefined
);
const ContractContext = React.createContext<OnChainContractState>(initContract);

export const ContractProvider = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | null;
}) => {
  const [onChain, dispatchOnChainContact] = useReducer(contractReducer, initContract);

  return (
    <ContractContext.Provider value={onChain}>
      <DispatchContext.Provider value={dispatchOnChainContact}>{children}</DispatchContext.Provider>
    </ContractContext.Provider>
  );
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
