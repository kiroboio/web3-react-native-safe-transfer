import SecureLS from "secure-ls";
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
export declare const useSecureStorage: (() => {
    error: import("./useStorageMobile").Error;
    newStorage: import("@capacitor/storage").StoragePlugin;
    setItem: (itemName: string, item: string) => void;
    getItem: (itemName: string) => Promise<string | null>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => never[] | Promise<import("@capacitor/storage").KeysResult>;
    setNewSecureStorageConfig: () => void;
}) | (<T>(encryptionSecret?: string | undefined, encodingType?: string, encryptionNamespace?: string | undefined) => {
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
} | UseSecureStorageRes<T & SecureLS>);
export {};
