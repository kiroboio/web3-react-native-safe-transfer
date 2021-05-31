import Web3 from 'web3';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Connectors } from '../hooks/useWeb3';
import { ChainIds } from '../stores/account';
export interface NetworkConnectorArguments {
    urls: {
        [chainId: number]: string;
    };
    defaultChainId?: number;
}
interface IInAppWalletConnector extends AbstractConnector {
    name: string;
    web3: Web3;
    activate(): Promise<{
        provider: string;
        chainId: number;
        account: string;
    }>;
    getProvider(): Promise<string>;
    getChainId(): Promise<number>;
    getAccount(): Promise<string | null>;
    deactivate(): void;
    setWeb3(): void;
    changeChainId(chainId: ChainIds): void;
}
declare class InAppWalletConnector extends AbstractConnector implements IInAppWalletConnector {
    private secureStorage;
    static DEFAULT_PATH: string;
    static activeAccount: string | undefined;
    private getPaths;
    paths: {
        [key: string]: {
            [key: number]: string;
        };
    };
    static setActiveAccount: (account: string | undefined) => void;
    addresses: string[];
    name: Connectors;
    web3: Web3;
    private readonly providers;
    private chainId;
    private static mnemonic;
    static clearMnemonic(): void;
    static setMnemonic(mnemonic: string): void;
    private hdNode;
    getPrivateKeys: () => string[];
    constructor({ urls, defaultChainId }: NetworkConnectorArguments & {
        path?: string;
    });
    setWeb3: () => void;
    handleAccountChanged(account?: string): void;
    addWalletAddress: () => void;
    removeWalletAddress: (address: string) => void;
    static account?: string;
    activate(): Promise<{
        provider: string;
        chainId: number;
        account: string;
    }>;
    getProvider(): Promise<string>;
    getChainId(): Promise<number>;
    getAccount(): Promise<string>;
    deactivate(): undefined;
    changeChainId(chainId: ChainIds): void;
}
export default InAppWalletConnector;
export type { IInAppWalletConnector };
