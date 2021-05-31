import React from "react";
import { Contract } from "web3-eth/node_modules/web3-eth-contract";
export declare type OnChainContractState = {
    contract?: Contract;
    walletContract?: Contract;
    tokenContract?: Contract;
};
declare type OnChainContractAction = {
    payload?: Contract;
    type: "setOnChainContract" | "setOnChainWalletContract" | "setOnChainTokenContract" | "cleanContracts";
};
export declare type DispatchOnChainContract = React.Dispatch<OnChainContractAction>;
export declare const ContractProvider: ({ children, }: {
    children?: JSX.Element | JSX.Element[] | null | undefined;
}) => JSX.Element;
export declare const useDispatchContract: () => (a: OnChainContractAction) => void;
export declare function useContract(): OnChainContractState;
export {};
