/// <reference types="react" />
import { EthTransferResponseDto, EthTokenInfo } from "../dto/EthTransfersDto";
import { IAnyType, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { Instance } from "mobx-state-tree";
import { Connectors } from "../hooks/useWeb3";
import { LogoChainlink, IconLogoOnly } from "../assets";
export interface ITransferItem {
    id: string;
    from: string;
    to: string;
    value: string;
    fees: string;
    salt: string;
    secretHash: string;
    state: EthTransferResponseDto["state"];
    txid: string;
    updatedAt: Date;
    confirmedBlock: number;
    message: string;
    token?: EthTokenInfo;
}
export declare const Token: import("mobx-state-tree").IModelType<{
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const Transfer: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    txid: import("mobx-state-tree").ISimpleType<string>;
    from: import("mobx-state-tree").ISimpleType<string>;
    to: import("mobx-state-tree").ISimpleType<string>;
    value: import("mobx-state-tree").ISimpleType<string>;
    fees: import("mobx-state-tree").ISimpleType<string>;
    salt: import("mobx-state-tree").ISimpleType<string>;
    secretHash: import("mobx-state-tree").ISimpleType<string>;
    state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
    updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
    confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
    message: import("mobx-state-tree").ISimpleType<string>;
    token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface SendCmdParams {
    to: string;
    value: string;
}
export declare type Callback = (err?: {
    err: {
        message: string;
    };
}) => void;
export declare const CmdPersistanceStatus: import("mobx-state-tree").IModelType<{
    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {
    clear: () => void;
    prepared: () => void;
    started: () => void;
    finished: (err?: {
        err: {
            message: string;
        };
    } | undefined) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const CmdStatus: import("mobx-state-tree").IModelType<{
    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {
    clear: () => void;
    prepared: () => void;
    started: () => void;
    finished: (err?: {
        err: {
            message: string;
        };
    } | undefined) => void;
} & {
    afterCreate: () => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const SendCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: SendCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const ConnectCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    connector: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    isConnected: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(connector: Connectors | undefined): void;
    clearCmd(): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const DisconnectCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface ISafeTransferItem {
    address: string;
    synced: boolean;
    feesFormula: string;
    rewardFormula: string;
}
export declare const SafeTransfer: import("mobx-state-tree").IModelType<{
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    synced: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    feesFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    rewardFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    fees: (value: string) => string;
    reward: (value: string, stakingValue: string) => string;
} & {
    setData(data: ISafeTransferItem): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface IStakingItem {
    address: string;
}
export declare const Staking: import("mobx-state-tree").IModelType<{
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    setData({ address }: IStakingItem): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface IKiroTokenItem {
    address: string;
}
export declare const KiroToken: import("mobx-state-tree").IModelType<{
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    setData({ address }: IKiroTokenItem): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface ERC20TokenItem {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    rate?: number;
}
export declare const ERC20Token: import("mobx-state-tree").IModelType<{
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {
    readonly tokenBalance: string;
} & {
    setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
    setBalance(balance: string): void;
    clearBalance(): void;
    setRate(rate: number): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const ERC20Tokens: import("mobx-state-tree").IModelType<{
    map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, {
    readonly list: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        balance: string;
        rate: number;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
} & {
    addToken({ address, name, symbol, decimals, balance, rate, }: ERC20TokenItem): void;
    setBalance(address: string, balance: string): void;
    clearBalances(): void;
    setRate(address: string, rate: number): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface DeviceInfoData {
    type: string;
    haveMetaMask: boolean;
    ethereumProvider: boolean;
    ready: boolean;
}
export declare const DeviceInfo: import("mobx-state-tree").IModelType<{
    type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    haveMetaMask: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    ethereumProvider: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
}, {
    setData({ type, haveMetaMask, ethereumProvider, ready }: DeviceInfoData): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface ApprovedCmdParams {
    amount: string;
}
export declare const ApprovedCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: ApprovedCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface DepositCmdParams {
    from: string;
    to: string;
    value: string;
    publicSalt: string;
    privateSalt: string;
    secretHash: string;
    message: string;
}
export declare const DepositCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    publicSalt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    privateSalt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    secretHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    message: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: DepositCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface FetchCmdParams {
    list: string;
    amount: number;
}
export declare const FetchCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    list: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: FetchCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface RetrieveCmdParams {
    id: string;
}
export declare const RetrieveCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: RetrieveCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export interface CollectCmdParams {
    id: string;
    key: string;
}
export declare const CollectCmd: import("mobx-state-tree").IModelType<{
    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        clear: () => void;
        prepared: () => void;
        started: () => void;
        finished: (err?: {
            err: {
                message: string;
            };
        } | undefined) => void;
    } & {
        afterCreate: () => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
} & {
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    key: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    prepare(): void;
    start(): void;
    done(): void;
    failed({ message }: {
        message: string;
    }): void;
    clearErrors(): void;
    clear(): void;
} & {
    prepare(params: CollectCmdParams): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const Transfers: import("mobx-state-tree").IModelType<{
    name: import("mobx-state-tree").ISimpleType<string>;
    map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    count: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    fetched: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    fetchCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        list: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: FetchCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
}, {
    readonly list: ({
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
} & {
    setFetched(count: number): void;
    add({ address, transfers, count, }: {
        address: string;
        transfers: ITransferItem[];
        count: number;
    }): void;
    upsert(address: string, transfer: ITransferItem): void;
    delete(address: string, id: string): void;
    remove(address: string, filter: (item: ITransferItem) => boolean): ITransferItem[];
    clear(): void;
    fetch(amount: number): void;
} & {
    readonly list: (number | [any] | "Map" | ((() => string) & (() => string)) | (() => void) | ((key: string) => boolean) | ((key: string) => boolean) | (() => IterableIterator<string>) | (() => IterableIterator<{
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((callbackfn: (value: {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, key: string, map: import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, thisArg?: any) => void) | ((key: string) => ({
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined) | ((key: string, value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | (() => IterableIterator<[string, {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | ((other: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((values: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }>>) | (() => Map<string, {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((listener: (changes: import("mobx").IMapDidChange<string, {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, fireImmediately?: boolean | undefined) => import("mobx").Lambda) | ((handler: import("mobx").IInterceptor<import("mobx").IMapWillChange<string, {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>>) => import("mobx").Lambda) | (() => IterableIterator<[string, {
        id: string;
        txid: string;
        from: string;
        to: string;
        value: string;
        fees: string;
        salt: string;
        secretHash: string;
        state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
        updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
        confirmedBlock: number;
        message: string;
        token: {
            address: string;
            decimals: number;
            symbol: string;
            type: string;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | [import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        id: import("mobx-state-tree").ISimpleType<string>;
        txid: import("mobx-state-tree").ISimpleType<string>;
        from: import("mobx-state-tree").ISimpleType<string>;
        to: import("mobx-state-tree").ISimpleType<string>;
        value: import("mobx-state-tree").ISimpleType<string>;
        fees: import("mobx-state-tree").ISimpleType<string>;
        salt: import("mobx-state-tree").ISimpleType<string>;
        secretHash: import("mobx-state-tree").ISimpleType<string>;
        state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
        updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
        confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
        message: import("mobx-state-tree").ISimpleType<string>;
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>] | undefined)[];
    readonly activeCount: number;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare const Web3Provider: import("mobx-state-tree").IModelType<{
    block: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
}, {
    setBlock(block: number): void;
    setBalance(balance: string): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
declare const TransactionReceipt: import("mobx-state-tree").IModelType<{
    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type ITransactionReceipt = Instance<typeof TransactionReceipt>;
export declare type ITransactionReceiptSnapshotIn = SnapshotIn<typeof TransactionReceipt>;
export declare const TransactionType: import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">;
declare const OnChainTransaction: import("mobx-state-tree").IModelType<{
    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
    timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
    value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
    gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
}, {
    updateStatus: (status: boolean) => void;
    update: (trx: {
        data: string;
        error: string;
        from: string;
        fiat: string;
        gasPrice: string;
        id: string;
        isPending: boolean;
        receipt: {
            blockHash: string;
            blockNumber: number;
            contractAddress: string | undefined;
            cumulativeGasUsed: number;
            from: string;
            gasUsed: number;
            logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
            logsBloom: string;
            status: boolean;
            to: string;
            transactionHash: string;
            transactionIndex: number;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
        timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
        to: string;
        txHash: string;
        type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
        value: string;
        valueInWei: string;
        valueToDisplay: string;
        nonce: number;
        wallet: "onChain" | "regular";
        gas: number;
        transactionCmd: {
            is: {
                ready: boolean;
                running: boolean;
                done: boolean;
                failed: boolean;
                withFailMessage: string;
                withId: number;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
        timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
        value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
        gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
    setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
    setFrom: (from: string) => void;
    setValueToDisplay: (value: string) => void;
    setValueInWei: (value: string) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type ITransaction = Instance<typeof OnChainTransaction>;
export declare type ITransactionType = ITransaction["type"];
export declare type ITransactionSnapshotIn = SnapshotIn<typeof OnChainTransaction>;
export declare type ITransactionSnapshotOut = SnapshotOut<typeof OnChainTransaction>;
export declare enum DrawerContent {
    NONE = "none",
    BACKUP = "backup",
    CREATE_WALLET = "createWallet",
    DELETE_BACKUP = "delete_backup",
    MOVE = "move",
    RESET_BACKUP_TIMER = "resetBackupTimer",
    SEND = "send",
    SEND_TOKENS = "sendTokens",
    MOVE_TOKENS = "moveTokens",
    START_TIMER = "startTimer",
    CREATE_HEIR = "createHeir",
    EDIT_HEIR = "editHeir",
    START_INHERITANCE_TIMER = "startInheritanceTimer",
    WALLET_SETTINGS = "walletSettings"
}
export declare const tokens: {
    readonly none: {
        readonly icon: () => null;
        readonly label: null;
        readonly address: {
            readonly "4": "";
            readonly "1": "";
            readonly notSupportedChainId: "";
        };
    };
    readonly KIRO: {
        readonly icon: typeof IconLogoOnly;
        readonly label: "KIRO";
        readonly address: {
            readonly "4": "0xB678E95F83aF08E7598EC21533F7585E83272799";
            readonly "1": "0xb1191f691a355b43542bea9b8847bc73e7abb137";
            readonly notSupportedChainId: "";
        };
    };
    readonly LINK: {
        readonly icon: typeof LogoChainlink;
        readonly label: "LINK";
        readonly address: {
            readonly "4": "0x01be23585060835e02b77ef475b0cc51aa1e0709";
            readonly "1": "0x514910771af9ca656af840dff83e8264ecf986ca";
            readonly notSupportedChainId: "";
        };
    };
    readonly USDT: {
        readonly icon: () => JSX.Element;
        readonly label: "Tether";
        readonly address: {
            readonly "4": "0xb19ed150325db38b397cb134533cb45a2b2b62a3";
            readonly "1": "0xdac17f958d2ee523a2206206994597c13d831ec7";
            readonly notSupportedChainId: "";
        };
    };
    readonly BNB: {
        readonly icon: () => JSX.Element;
        readonly label: "Binance Coin";
        readonly address: {
            readonly "4": "0x2211dc5e1b4c34efe0027561e2f36c2d63fbd01c";
            readonly "1": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
            readonly notSupportedChainId: "";
        };
    };
    readonly UNI: {
        readonly icon: () => JSX.Element;
        readonly label: "Uniswap";
        readonly address: {
            readonly "4": "0x7f0fae34de2b34d13da640afc2273366919cd0b2";
            readonly "1": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
            readonly notSupportedChainId: "";
        };
    };
    readonly SUSHI: {
        readonly icon: () => JSX.Element;
        readonly label: "Sushi Token";
        readonly address: {
            readonly "4": "0x1bfc4d6b40591b8c8e1ef8a36e4f15d54d760110";
            readonly "1": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";
            readonly notSupportedChainId: "";
        };
    };
};
export declare const OnChainToken: import("mobx-state-tree").ISimpleType<"none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI">;
declare const OnChainTokens: import("mobx-state-tree").IModelType<{
    token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI">, [undefined]>;
    transactions: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
            logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
        timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
        value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
        gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        updateStatus: (status: boolean) => void;
        update: (trx: {
            data: string;
            error: string;
            from: string;
            fiat: string;
            gasPrice: string;
            id: string;
            isPending: boolean;
            receipt: {
                blockHash: string;
                blockNumber: number;
                contractAddress: string | undefined;
                cumulativeGasUsed: number;
                from: string;
                gasUsed: number;
                logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                logsBloom: string;
                status: boolean;
                to: string;
                transactionHash: string;
                transactionIndex: number;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
            timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
            to: string;
            txHash: string;
            type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
            value: string;
            valueInWei: string;
            valueToDisplay: string;
            nonce: number;
            wallet: "onChain" | "regular";
            gas: number;
            transactionCmd: {
                is: {
                    ready: boolean;
                    running: boolean;
                    done: boolean;
                    failed: boolean;
                    withFailMessage: string;
                    withId: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
        setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
        setFrom: (from: string) => void;
        setValueToDisplay: (value: string) => void;
        setValueInWei: (value: string) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    isSigningTransaction: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    isWaitingForSigner: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
}, {
    setToken: (token: "none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI") => void;
    getToken: () => "none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI";
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IOnChainTokens = Instance<typeof OnChainTokens>;
export declare type TokenType = IOnChainTokens["token"];
declare const Heir: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    isSent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    isRegistered: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    walletAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    percent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
}, {
    setName: (id: string) => void;
    setIsSent: (isSent: boolean) => void;
    setIsRegistered: (isRegistered: boolean) => void;
    setWalletAddress: (address: string) => void;
    setPercent: (percent: number) => void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IHeir = SnapshotIn<typeof Heir>;
export declare const AVAILABLE_RPC_URLS: {
    "1": string;
    "4": string;
};
export declare const RPC_URLS: {
    notSupportedChainId: string;
    "1": string;
    "4": string;
};
export declare type ChainIds = keyof typeof RPC_URLS;
export declare const Account: import("mobx-state-tree").IModelType<{
    isAuthed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    isInit: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    signer: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    ETH_USD: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    exchangeToUsdRate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    transfer: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        destination: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
        type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<DrawerContent>, [undefined]>;
        sendCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        sendTokenCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        heirId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        heirAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        heirPercent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        setWalletType: (wallet: "onChain" | "regular") => void;
        setTo: (to: string) => void;
        setFrom: (from: string) => void;
        setAmount: (amount: string) => void;
        setDestination: (destination: string) => void;
        setType: (type: DrawerContent) => void;
        setHeirId: (id: string) => void;
        setHeirAddress: (address: string) => void;
        setHeirPercent: (percent: number) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    transactions: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        items: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        currentTransactionId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isSigningTransaction: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isWaitingForSigner: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        backupData: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            backupAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            backupTimeout: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        afterCreate: () => void;
        createTransaction: ({ to, from, value, valueToDisplay, valueInWei, type, wallet, data, gas, }: {
            gas?: number | undefined;
            to?: string | undefined;
            from?: string | undefined;
            value?: string | undefined;
            valueToDisplay?: string | undefined;
            valueInWei?: string | undefined;
            type?: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET" | undefined;
            wallet?: "onChain" | "regular" | undefined;
            data?: string | undefined;
        }) => {
            data: string;
            error: string;
            from: string;
            fiat: string;
            gasPrice: string;
            id: string;
            isPending: boolean;
            receipt: {
                blockHash: string;
                blockNumber: number;
                contractAddress: string | undefined;
                cumulativeGasUsed: number;
                from: string;
                gasUsed: number;
                logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                logsBloom: string;
                status: boolean;
                to: string;
                transactionHash: string;
                transactionIndex: number;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
            timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
            to: string;
            txHash: string;
            type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
            value: string;
            valueInWei: string;
            valueToDisplay: string;
            nonce: number;
            wallet: "onChain" | "regular";
            gas: number;
            transactionCmd: {
                is: {
                    ready: boolean;
                    running: boolean;
                    done: boolean;
                    failed: boolean;
                    withFailMessage: string;
                    withId: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        clear: () => void;
        getTransactionById: (id?: string | undefined) => ({
            data: string;
            error: string;
            from: string;
            fiat: string;
            gasPrice: string;
            id: string;
            isPending: boolean;
            receipt: {
                blockHash: string;
                blockNumber: number;
                contractAddress: string | undefined;
                cumulativeGasUsed: number;
                from: string;
                gasUsed: number;
                logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                logsBloom: string;
                status: boolean;
                to: string;
                transactionHash: string;
                transactionIndex: number;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
            timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
            to: string;
            txHash: string;
            type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
            value: string;
            valueInWei: string;
            valueToDisplay: string;
            nonce: number;
            wallet: "onChain" | "regular";
            gas: number;
            transactionCmd: {
                is: {
                    ready: boolean;
                    running: boolean;
                    done: boolean;
                    failed: boolean;
                    withFailMessage: string;
                    withId: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
        getLastTransaction: () => {
            data: string;
            error: string;
            from: string;
            fiat: string;
            gasPrice: string;
            id: string;
            isPending: boolean;
            receipt: {
                blockHash: string;
                blockNumber: number;
                contractAddress: string | undefined;
                cumulativeGasUsed: number;
                from: string;
                gasUsed: number;
                logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                logsBloom: string;
                status: boolean;
                to: string;
                transactionHash: string;
                transactionIndex: number;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
            timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
            to: string;
            txHash: string;
            type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
            value: string;
            valueInWei: string;
            valueToDisplay: string;
            nonce: number;
            wallet: "onChain" | "regular";
            gas: number;
            transactionCmd: {
                is: {
                    ready: boolean;
                    running: boolean;
                    done: boolean;
                    failed: boolean;
                    withFailMessage: string;
                    withId: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        updatePendingTransactionByHash: (hash: string, status: boolean) => void;
        updateTransactionReceipt: (id: string, receipt: ITransactionReceipt) => void;
        updateTransactionRequest: (id: string, trx: ITransaction) => void;
        updateTransactionState: (id: string, state: "pending" | "success" | "failed" | "idle" | "queue" | "rejected") => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    tokens: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI">, [undefined]>;
        transactions: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
            timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
            to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
            value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
            gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            updateStatus: (status: boolean) => void;
            update: (trx: {
                data: string;
                error: string;
                from: string;
                fiat: string;
                gasPrice: string;
                id: string;
                isPending: boolean;
                receipt: {
                    blockHash: string;
                    blockNumber: number;
                    contractAddress: string | undefined;
                    cumulativeGasUsed: number;
                    from: string;
                    gasUsed: number;
                    logs: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
                    logsBloom: string;
                    status: boolean;
                    to: string;
                    transactionHash: string;
                    transactionIndex: number;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                state: "failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init";
                timestamp: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>>;
                to: string;
                txHash: string;
                type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET";
                value: string;
                valueInWei: string;
                valueToDisplay: string;
                nonce: number;
                wallet: "onChain" | "regular";
                gas: number;
                transactionCmd: {
                    is: {
                        ready: boolean;
                        running: boolean;
                        done: boolean;
                        failed: boolean;
                        withFailMessage: string;
                        withId: number;
                    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
                } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
                data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                error: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                fiat: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                gasPrice: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                isPending: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                receipt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    contractAddress: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
                    cumulativeGasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    gasUsed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    logs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
                        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        blockNumber: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        logIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                        removed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
                    logsBloom: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    status: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    transactionIndex: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"failed" | "idle" | "pending" | "success" | "rejected" | "queue" | "init">, [undefined]>;
                timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<number | Date, number, Date>, [undefined]>;
                to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                txHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET">, [undefined]>;
                value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueInWei: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                valueToDisplay: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                nonce: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"onChain" | "regular">, [undefined]>;
                gas: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                transactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                        withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                        withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                    }, {
                        clear: () => void;
                        prepared: () => void;
                        started: () => void;
                        finished: (err?: {
                            err: {
                                message: string;
                            };
                        } | undefined) => void;
                    } & {
                        afterCreate: () => void;
                    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
                }, {
                    prepare(): void;
                    start(): void;
                    done(): void;
                    failed({ message }: {
                        message: string;
                    }): void;
                    clearErrors(): void;
                    clear(): void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => void;
            setType: (type: "ACCEPT BACKUP" | "CLAIM OWNERSHIP" | "CREATE SMART WALLET" | "DISABLE INHERITANCE" | "ENABLE INHERITANCE" | "RECLAIM OWNERSHIP" | "REMOVE BACKUP" | "SEND TOKENS" | "SET BACKUP" | "SET HEIRS" | "VALUE TRANSFER" | "DECLINE BACKUP" | "START TIMER" | "RESET BACKUP TIMER" | "NOT SET") => void;
            setFrom: (from: string) => void;
            setValueToDisplay: (value: string) => void;
            setValueInWei: (value: string) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        isSigningTransaction: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isWaitingForSigner: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    }, {
        setToken: (token: "none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI") => void;
        getToken: () => "none" | "KIRO" | "LINK" | "USDT" | "BNB" | "UNI" | "SUSHI";
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    backup: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        ownerAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isOwner: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        state: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"NONE" | "PENDING" | "REGISTERED" | "ENABLED" | "ACTIVATED">, [undefined]>;
        walletAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        timeout: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        formTimeout: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        createCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        getCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        rejectCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        removeCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        acceptCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        startTimerCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        resetTimerCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        activateByTimerCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        updateBackupDataCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        readonly isCmdRunning: boolean;
        readonly timeLeft: number;
        isBackup(address: string): boolean;
    } & {
        afterCreate: () => void;
        clear: () => void;
        setAddress: (address: string) => void;
        setIsOwner: (isOwner: string) => void;
        setWalletAddress: (walletAddress: string) => void;
        setOwnerAddress: (address: string) => void;
        setState: (state: "NONE" | "PENDING" | "REGISTERED" | "ENABLED" | "ACTIVATED") => void;
        setTimeout: (timeout: string) => void;
        setFormTimeout: (timeout: string) => void;
        setTimestamp: (timestamp: string) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    inheritance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        form: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            percent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        heirs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isSent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            isRegistered: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            walletAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            percent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            setName: (id: string) => void;
            setIsSent: (isSent: boolean) => void;
            setIsRegistered: (isRegistered: boolean) => void;
            setWalletAddress: (address: string) => void;
            setPercent: (percent: number) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        isActivated: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isEnabled: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isHeirsChanged: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        initHeirs: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            isSent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            isRegistered: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            walletAddress: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            percent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            setName: (id: string) => void;
            setIsSent: (isSent: boolean) => void;
            setIsRegistered: (isRegistered: boolean) => void;
            setWalletAddress: (address: string) => void;
            setPercent: (percent: number) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        timeLeftCurrent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        timeout: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        timestamp: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        totalPercent: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        totalTransferred: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        setInheritanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        clearInheritanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        setHeirsCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        activateCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        activateByTimerCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        updateHeirsCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        isChanged: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    }, {
        readonly isCmdRunning: boolean;
        readonly timeLeft: number;
    } & {
        afterCreate: () => void;
        clear: () => void;
        setTimestamp: (seconds: string) => void;
        setTimeout: (seconds: string) => void;
        setTimeLeftCurrent: (seconds: string) => void;
        setTotalTransferred: (totalTransferred: string) => void;
        setIsChanged: (isChanged: boolean) => void;
        addHeir: (heir: IHeir, isInit?: boolean | undefined) => void;
        editHeir: (heir: {
            id: string;
            percent: number;
        }) => void;
        removeHeirById: (id: string) => void;
        resetChanges: () => void;
        saveChanges: () => void;
        setIsActivated: (isActivated: boolean) => void;
        setIsEnabled: (isEnabled: boolean) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    onChainWalletDetails: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        account: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isNoWallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isOwner: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        dataIsLoaded: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        isBackup: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        balanceInUsd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        tokenBalance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        claimOwnershipCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        createWalletCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        createTokenWalletCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        createWalletTransactionCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        balanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        tokenBalanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        setAccount: (account: string) => void;
        setIsOwner: (isOwner: boolean) => void;
        setIsNoWallet: (isNoWallet: boolean) => void;
        setDataIsLoaded: (dataIsLoaded: boolean) => void;
        setIsBackup: (isBackup: boolean) => void;
        setBalance: (balance: string) => void;
        setBalanceInUsd: (balance: string) => void;
        setTokenBalance: (balance: string) => void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    allowance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<string, string, string>, [undefined]>;
    wallet: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        mnemonic: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            clearCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            removeCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            restoreCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                    ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                    withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                    withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                }, {
                    clear: () => void;
                    prepared: () => void;
                    started: () => void;
                    finished: (err?: {
                        err: {
                            message: string;
                        };
                    } | undefined) => void;
                } & {
                    afterCreate: () => void;
                }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
            }, {
                prepare(): void;
                start(): void;
                done(): void;
                failed({ message }: {
                    message: string;
                }): void;
                clearErrors(): void;
                clear(): void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            set(mnemonic?: string | undefined): void;
            clear(): void;
            remove(): void;
            restore(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        activeAccount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        accounts: IAnyType;
        addAddressCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        } & {
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & {
            prepare(address?: string | undefined): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        removeAddressCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        } & {
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & {
            prepare(address?: string | undefined): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        balanceInUsd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        tokenBalance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        account: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        balanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        tokenBalanceCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        createWalletCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        removeWalletAddress(address: string): void;
        addWalletAddress(): void;
        setAccounts(accounts: string[]): void;
        setActiveAccount(activeAccount: string | undefined): void;
        generateMnemonic(): void;
        setMnemonic(mnemonic?: string | undefined): void;
        getMnemonic(): string;
        tryRestoreMnemonicFromStorage(): void;
        clearMnemonic(): void;
        removeMnemonic(): void;
        changeMnemonic(mnemonic: string): void;
        setBalance(balance: string): void;
        setBalanceInUsd: (balance: string) => void;
        setTokenBalance(balance: string): void;
        setAccount(account?: string | undefined): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    chainId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<"1" | "4" | "notSupportedChainId">, [undefined]>;
    active: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    block: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    tokenBalance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    ethBalance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    stakingBalance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    transfers: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        name: import("mobx-state-tree").ISimpleType<string>;
        map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        count: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        fetched: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        fetchCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        } & {
            list: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & {
            prepare(params: FetchCmdParams): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        readonly list: ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    } & {
        setFetched(count: number): void;
        add({ address, transfers, count, }: {
            address: string;
            transfers: ITransferItem[];
            count: number;
        }): void;
        upsert(address: string, transfer: ITransferItem): void;
        delete(address: string, id: string): void;
        remove(address: string, filter: (item: ITransferItem) => boolean): ITransferItem[];
        clear(): void;
        fetch(amount: number): void;
    } & {
        readonly list: (number | [any] | "Map" | ((() => string) & (() => string)) | (() => void) | ((key: string) => boolean) | ((key: string) => boolean) | (() => IterableIterator<string>) | (() => IterableIterator<{
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((callbackfn: (value: {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, key: string, map: import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, thisArg?: any) => void) | ((key: string) => ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined) | ((key: string, value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | ((other: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((values: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => Map<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((listener: (changes: import("mobx").IMapDidChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, fireImmediately?: boolean | undefined) => import("mobx").Lambda) | ((handler: import("mobx").IInterceptor<import("mobx").IMapWillChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>>) => import("mobx").Lambda) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | [import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>] | undefined)[];
        readonly activeCount: number;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    incoming: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        name: import("mobx-state-tree").ISimpleType<string>;
        map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        count: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        fetched: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        fetchCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        } & {
            list: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & {
            prepare(params: FetchCmdParams): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        readonly list: ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    } & {
        setFetched(count: number): void;
        add({ address, transfers, count, }: {
            address: string;
            transfers: ITransferItem[];
            count: number;
        }): void;
        upsert(address: string, transfer: ITransferItem): void;
        delete(address: string, id: string): void;
        remove(address: string, filter: (item: ITransferItem) => boolean): ITransferItem[];
        clear(): void;
        fetch(amount: number): void;
    } & {
        readonly list: (number | [any] | "Map" | ((() => string) & (() => string)) | (() => void) | ((key: string) => boolean) | ((key: string) => boolean) | (() => IterableIterator<string>) | (() => IterableIterator<{
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((callbackfn: (value: {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, key: string, map: import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, thisArg?: any) => void) | ((key: string) => ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined) | ((key: string, value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | ((other: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((values: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => Map<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((listener: (changes: import("mobx").IMapDidChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, fireImmediately?: boolean | undefined) => import("mobx").Lambda) | ((handler: import("mobx").IInterceptor<import("mobx").IMapWillChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>>) => import("mobx").Lambda) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | [import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>] | undefined)[];
        readonly activeCount: number;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    outgoing: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        name: import("mobx-state-tree").ISimpleType<string>;
        map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
        count: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        fetched: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        fetchCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
                withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            }, {
                clear: () => void;
                prepared: () => void;
                started: () => void;
                finished: (err?: {
                    err: {
                        message: string;
                    };
                } | undefined) => void;
            } & {
                afterCreate: () => void;
            }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        } & {
            list: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            prepare(): void;
            start(): void;
            done(): void;
            failed({ message }: {
                message: string;
            }): void;
            clearErrors(): void;
            clear(): void;
        } & {
            prepare(params: FetchCmdParams): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        readonly list: ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    } & {
        setFetched(count: number): void;
        add({ address, transfers, count, }: {
            address: string;
            transfers: ITransferItem[];
            count: number;
        }): void;
        upsert(address: string, transfer: ITransferItem): void;
        delete(address: string, id: string): void;
        remove(address: string, filter: (item: ITransferItem) => boolean): ITransferItem[];
        clear(): void;
        fetch(amount: number): void;
    } & {
        readonly list: (number | [any] | "Map" | ((() => string) & (() => string)) | (() => void) | ((key: string) => boolean) | ((key: string) => boolean) | (() => IterableIterator<string>) | (() => IterableIterator<{
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((callbackfn: (value: {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>, key: string, map: import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, thisArg?: any) => void) | ((key: string) => ({
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined) | ((key: string, value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((value: import("mobx-state-tree/dist/internal").ExtractCSTWithSTN<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) => {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | ((other: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((values: any) => import("mobx-state-tree").IMSTMap<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => import("mobx").IKeyValueMap<import("mobx-state-tree").ModelSnapshotType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }>>) | (() => Map<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) | ((listener: (changes: import("mobx").IMapDidChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>) => void, fireImmediately?: boolean | undefined) => import("mobx").Lambda) | ((handler: import("mobx").IInterceptor<import("mobx").IMapWillChange<string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>>) => import("mobx").Lambda) | (() => IterableIterator<[string, {
            id: string;
            txid: string;
            from: string;
            to: string;
            value: string;
            fees: string;
            salt: string;
            secretHash: string;
            state: "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating";
            updatedAt: Date & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IType<number | Date, number, Date>>;
            confirmedBlock: number;
            message: string;
            token: {
                address: string;
                decimals: number;
                symbol: string;
                type: string;
            } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>>;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>]>) | [import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").ISimpleType<string>;
            txid: import("mobx-state-tree").ISimpleType<string>;
            from: import("mobx-state-tree").ISimpleType<string>;
            to: import("mobx-state-tree").ISimpleType<string>;
            value: import("mobx-state-tree").ISimpleType<string>;
            fees: import("mobx-state-tree").ISimpleType<string>;
            salt: import("mobx-state-tree").ISimpleType<string>;
            secretHash: import("mobx-state-tree").ISimpleType<string>;
            state: import("mobx-state-tree").IType<"new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating", "new" | "unknown" | "invalid" | "rejected" | "waiting-for-deposit" | "retrieving" | "retrieved" | "ready" | "collecting" | "collected" | "creating">;
            updatedAt: import("mobx-state-tree").IType<number | Date, number, Date>;
            confirmedBlock: import("mobx-state-tree").ISimpleType<number>;
            message: import("mobx-state-tree").ISimpleType<string>;
            token: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
                address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
                symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
                type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
        }, {}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>] | undefined)[];
        readonly activeCount: number;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    sendCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: SendCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    approvedCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        amount: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: ApprovedCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    depositCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        from: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        to: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        value: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        publicSalt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        privateSalt: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        secretHash: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        message: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: DepositCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    retrieveCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: RetrieveCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    collectCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        } & {
            afterCreate: () => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        key: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(params: CollectCmdParams): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    connectCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    } & {
        connector: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        isConnected: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(connector: Connectors | undefined): void;
        clearCmd(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    disconnectCmd: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        is: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
            ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            running: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            done: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            failed: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            withFailMessage: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            withId: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            clear: () => void;
            prepared: () => void;
            started: () => void;
            finished: (err?: {
                err: {
                    message: string;
                };
            } | undefined) => void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    }, {
        prepare(): void;
        start(): void;
        done(): void;
        failed({ message }: {
            message: string;
        }): void;
        clearErrors(): void;
        clear(): void;
    } & {
        prepare(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    safeTransferMap: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        synced: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        feesFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rewardFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        fees: (value: string) => string;
        reward: (value: string, stakingValue: string) => string;
    } & {
        setData(data: ISafeTransferItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    stakingMap: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        setData({ address }: IStakingItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    kiroTokenMap: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        setData({ address }: IKiroTokenItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    ERC20TokensMap: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
        map: import("mobx-state-tree").IMapType<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            readonly tokenBalance: string;
        } & {
            setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
            setBalance(balance: string): void;
            clearBalance(): void;
            setRate(rate: number): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    }, {
        readonly list: ({
            address: string;
            name: string;
            symbol: string;
            decimals: number;
            balance: string;
            rate: number;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            readonly tokenBalance: string;
        } & {
            setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
            setBalance(balance: string): void;
            clearBalance(): void;
            setRate(rate: number): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
            balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        }, {
            readonly tokenBalance: string;
        } & {
            setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
            setBalance(balance: string): void;
            clearBalance(): void;
            setRate(rate: number): void;
        }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    } & {
        addToken({ address, name, symbol, decimals, balance, rate, }: ERC20TokenItem): void;
        setBalance(address: string, balance: string): void;
        clearBalances(): void;
        setRate(address: string, rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    currency: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
    deviceInfo: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IModelType<{
        type: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        haveMetaMask: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        ethereumProvider: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        ready: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    }, {
        setData({ type, haveMetaMask, ethereumProvider, ready }: DeviceInfoData): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>, [undefined]>;
}, {
    readonly safeTransferContract: ({
        address: string;
        synced: boolean;
        feesFormula: string;
        rewardFormula: string;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        fees: (value: string) => string;
        reward: (value: string, stakingValue: string) => string;
    } & {
        setData(data: ISafeTransferItem): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        synced: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        feesFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rewardFormula: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        fees: (value: string) => string;
        reward: (value: string, stakingValue: string) => string;
    } & {
        setData(data: ISafeTransferItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
    readonly kiroTokenContract: ({
        address: string;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        setData({ address }: IKiroTokenItem): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        setData({ address }: IKiroTokenItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
    readonly ERC20TokensContract: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        balance: string;
        rate: number;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    readonly stakingContract: ({
        address: string;
        balance: string;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        setData({ address }: IStakingItem): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    }, {
        setData({ address }: IStakingItem): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>) | undefined;
    approvedToken(symbol: string, amount: string): boolean;
    transferFees(amount: string): string;
    transferReward(amount: string): string;
    ERC20TokenList(chainName: string): ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        balance: string;
        rate: number;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        address: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        name: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        symbol: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        decimals: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
        balance: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
        rate: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    }, {
        readonly tokenBalance: string;
    } & {
        setData({ address, name, symbol, decimals, balance }: ERC20TokenItem): void;
        setBalance(balance: string): void;
        clearBalance(): void;
        setRate(rate: number): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
} & {
    setExchangeToUsdRate(rate: number): void;
    setIsAuthed(isAuthed: boolean): void;
    send(to: string, value: string): void;
    approve({ amount }: {
        amount: string;
    }): void;
    deposit({ to, value, passcode, message, }: {
        to: string;
        value: string;
        passcode: string;
        message?: string | undefined;
    }): void;
    retrieve({ id }: {
        id: string;
    }): void;
    collect({ id, passcode }: {
        id: string;
        passcode: string;
    }): void;
    connect(connector: Connectors): void;
    disconnect(): void;
    setAddress(address?: string | undefined): void;
    setActive(newActive: boolean): void;
    setChainId(chainId: ChainIds): void;
    setBalance(balance: string): void;
    setTokenBalance(balance: string): void;
    setEthBalance(balance: string): void;
    setStakingBalance(balance: string): void;
    setBlock(block: number): void;
    setRate(newRate: number): void;
    setCurrency(currency: ERC20TokenItem): void;
    setCurrencyBalance(balance: string): void;
    setAllowance(allowance: string): void;
    setDeviceInfo(deviceInfo: DeviceInfoData): void;
    setSafeTransferContract(chainName: string, data: ISafeTransferItem): void;
    setStakingContract(chainName: string, data: IStakingItem): void;
    setKiroTokenContract(chainName: string, data: IKiroTokenItem): void;
    setERC20TokenContract(chainName: string, data: Array<ERC20TokenItem>): void;
    setERC20TokenBalance(chainName: string, address: string, balance: string): void;
    setErc20TokenRate(chainName: string, address: string, rate: number): void;
    clearERC20TokenBalances(chainName?: string | undefined): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type AccountStoreType = ReturnType<typeof Account.create>;
export declare const accountStore: AccountStoreType;
export declare type IAccountStore = Instance<typeof accountStore>;
export declare const web3ProviderStore: {
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
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
export declare type ITransfers = Instance<typeof Transfers>;
export {};
