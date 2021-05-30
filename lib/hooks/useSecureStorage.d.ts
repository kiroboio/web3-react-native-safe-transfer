import SecureLS from 'secure-ls';
export declare type Error = {
    isError: boolean;
    content: unknown;
    isLocalStorageExist: boolean;
};
declare const useSecureStorageEmptyRes: {
    error: {
        isError: boolean;
        content: undefined;
        isLocalStorageExist: boolean;
    };
    secureStorage: undefined;
    setItem: undefined;
    getItem: undefined;
    removeItem: undefined;
    removeAll: undefined;
    clear: undefined;
    getAllKeys: undefined;
    setNewSecureStorageConfig: undefined;
};
export declare type UseSecureStorageEmptyRes = typeof useSecureStorageEmptyRes;
export declare type UseSecureStorageRes<T> = {
    error: Error;
    secureStorage: T & SecureLS;
    setItem: (itemName: string, item: unknown) => void;
    getItem: (itemName: string) => Promise<string>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => string[] | undefined;
    setNewSecureStorageConfig: (encryptionSecret: string, encodingType?: string) => void;
};
declare const useSecureStorage: (<T>() => {
    error: import("./useStorageMobile").Error;
    newStorage: {
        [prop: string]: any;
    };
    setItem: (itemName: string, item: string) => void;
    getItem: (itemName: string, isAllKeysData?: boolean | undefined) => Promise<any>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => any;
    setNewSecureStorageConfig: () => void;
}) | (<T_1>(encryptionSecret?: string | undefined, encodingType?: string, encryptionNamespace?: string | undefined) => {
    error: {
        isError: boolean;
        content: undefined;
        isLocalStorageExist: boolean;
    };
    secureStorage: undefined;
    setItem: undefined;
    getItem: undefined;
    removeItem: undefined;
    removeAll: undefined;
    clear: undefined;
    getAllKeys: undefined;
    setNewSecureStorageConfig: undefined;
} | UseSecureStorageRes<T_1 & SecureLS>);
export default useSecureStorage;
