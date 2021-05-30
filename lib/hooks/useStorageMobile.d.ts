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
declare const useStorageMobile: () => {
    error: Error;
    newStorage: import("@capacitor/storage").StoragePlugin;
    setItem: (itemName: string, item: string) => void;
    getItem: (itemName: string) => Promise<string | null>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => never[] | Promise<import("@capacitor/storage").KeysResult>;
    setNewSecureStorageConfig: () => void;
};
export default useStorageMobile;
