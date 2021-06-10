import { StoragePlugin } from "@capacitor/storage";
export declare type Error = {
    isError: boolean;
    content: unknown;
    isLocalStorageExist: boolean;
};
export declare type UseMobileStorageRes = {
    error: Error;
    storage: StoragePlugin;
    setItem: (itemName: string, item: string) => void;
    getItem: (itemName: string) => Promise<string | null>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => ReturnType<StoragePlugin["keys"]> | null;
};
/**
 *
 * this hook uses `@capacitor/storage` lib
 * [@capacitor/storage](https://capacitorjs.com/docs/apis/storage)
 *
 * @returns ```{
    error,
    storage: newStorage,
    setItem,
    getItem,
    removeItem,
    removeAll,
    clear,
    getAllKeys,
    setNewSecureStorageConfig: undefined,
  }```
*/
export declare const useStorageMobile: () => UseMobileStorageRes;
