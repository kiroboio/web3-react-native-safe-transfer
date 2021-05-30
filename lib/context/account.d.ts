import React from 'react';
import { AccountStoreType, web3ProviderStore } from '../stores/account';
export declare const AccountContext: React.Context<AccountStoreType>;
export declare function useAccount(): AccountStoreType;
export declare const Web3ProviderContext: React.Context<{
    block: number;
    balance: string;
} & import("mobx-state-tree/dist/internal").NonEmptyObject & {
    setBlock(block: number): void;
    setBalance(balance: string): void;
} & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
    block: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    setBlock(block: number): void;
    setBalance(balance: string): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
export declare function useWeb3Provider(): typeof web3ProviderStore;
