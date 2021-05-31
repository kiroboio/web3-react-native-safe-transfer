/// <reference types="react" />
declare type Error = {
    isError: boolean;
    content: unknown;
};
declare const useWallet: () => {
    error: Error;
    mnemonic: string | undefined;
    provider: string | undefined;
    getMnemonic: () => Promise<string | undefined>;
    setNewMnemonic: (mnemonic: string | undefined) => void;
    generateNewMnemonic: () => void;
    setProvider: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    getCredentialsFromStorage: () => Promise<{
        mnemonic: undefined;
        rpc: undefined;
    } | {
        mnemonic: string;
        rpc: string;
    }>;
    setCredentialsToStorage: (rpc: string, mnemonic: string) => void;
    getActiveAccountFromStorage: () => Promise<string | undefined>;
    setActiveAccount: (account: string) => void;
};
export default useWallet;
