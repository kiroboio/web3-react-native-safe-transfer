declare type Error = {
    isError: boolean;
    content: unknown;
};
/**
 *
 * @returns
 *  _{
      error: {@link Error};\
      mnemonic: string | undefined;\
      getMnemonic: () => Promise<string | null | undefined>;\
      setNewMnemonic: (mnemonic: string | undefined) => void;\
      generateNewMnemonic: () => void;\
      getCredentialsFromStorage: () => Promise<...>;\
      setCredentialsToStorage: (rpc: string, mnemonic: string) => void;\
      getActiveAccountFromStorage: () => Promise<...>;\
      setActiveAccount: (account: string) => void;\
    }_
 */
export declare const useWallet: () => {
    error: Error;
    mnemonic: string | undefined;
    getMnemonic: () => Promise<string | null | undefined>;
    setNewMnemonic: (mnemonic: string | undefined) => void;
    generateNewMnemonic: () => void;
    getCredentialsFromStorage: () => Promise<{
        mnemonic: undefined;
        rpc: undefined;
    } | {
        mnemonic: string | null;
        rpc: string | null;
    }>;
    setCredentialsToStorage: (rpc: string, mnemonic: string) => void;
    getActiveAccountFromStorage: () => Promise<string | null | undefined>;
    setActiveAccount: (account: string) => void;
};
export {};
