import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import Web3 from "web3";
import { ChainIds } from "../stores/account";
export declare enum Connectors {
    InAppWallet = "InAppWallet",
    Injected = "Injected",
    WalletConnect = "WalletConnect",
    WalletLink = "WalletLink",
    MyEtherWallet = "MyEtherWallet",
    Frame = "Frame"
}
export interface IConnectParams {
    readonly supportedChainIds?: number[];
}
declare type ConnectorType = Required<Web3ReactContextInterface>["connector"] & {
    addWalletAddress?: () => void;
    removeWalletAddress?: (a: string) => void;
    handleAccountChanged?: (a: string) => void;
    changeChainId?: (chainId: ChainIds) => void;
};
export interface IWeb3ReactContext<T> {
    connect: (connectorName: Connectors, params?: IConnectParams) => Promise<void>;
    disconnect: () => void;
    connector?: ConnectorType;
    library: T;
    chainId?: number;
    address?: null | string;
    active: boolean;
    error?: Error;
    activate: (connector: AbstractConnector, onError?: ((error: Error) => void) | undefined, throwErrors?: boolean | undefined) => Promise<void>;
}
/**
 * {@link IWeb3ReactContext}
 *
 * @returns IWeb3ReactContext
 */
export declare const useWeb3: () => IWeb3ReactContext<Web3>;
export {};
