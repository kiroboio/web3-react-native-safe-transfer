import React, { useContext, useReducer } from "react";
import { Contract } from "web3-eth/node_modules/web3-eth-contract";
import Web3 from "web3";
import safeTransferABI from '../abi/safeTransfer.json'
import erc20ABI from '../abi/erc20.json'
import { AbiItem } from "web3-utils";

export type SafeTransferContractState = {
  safeTransferContract?: Contract;
  erc20TokenContract?: Contract;
};

type SafeTransferContractAction = {
  payload?: Contract;
  type: "setSafeTransferContract" | "setErc20TokenContract" | "cleanContracts";
};

export type DispatchSafeTransferContract = React.Dispatch<SafeTransferContractAction>;

const initContract = {
  safeTransferContract: new new Web3().eth.Contract(safeTransferABI as AbiItem[]),
  erc20TokenContract:  new new Web3().eth.Contract(erc20ABI as AbiItem[]),
};

const contractReducer = (
  state: SafeTransferContractState,
  action: SafeTransferContractAction
) => {
  switch (action.type) {
    case "setSafeTransferContract":
      return { ...state, safeTransferContract: action.payload };
    case "setErc20TokenContract":
      return { ...state, erc20TokenContract: action.payload };
    case "cleanContracts":
      return initContract;
    default:
      return state;
  }
};

const DispatchContext =
  React.createContext<((a: SafeTransferContractAction) => void) | undefined>(
    undefined
  );
const ContractContext = React.createContext<SafeTransferContractState>(initContract);

export const SafeTransferContractProvider = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | null;
}) => {
  const [safeTransferContract, dispatchSafeTransferContract] = useReducer(
    contractReducer,
    initContract
  );

  return (
    <ContractContext.Provider value={safeTransferContract}>
      <DispatchContext.Provider value={dispatchSafeTransferContract}>
        {children}
      </DispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export const useDispatchSafeTransferContract = () => {
  const context = React.useContext(DispatchContext);

  if (context === undefined) {
    throw new Error("useSafeTransferContract context is missing");
  }

  return context;
};

export function useSafeTransferContract() {
  return useContext(ContractContext);
}
