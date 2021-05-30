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
declare const useStorageMobile: <T>() => {
    error: Error;
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
};
export default useStorageMobile;
