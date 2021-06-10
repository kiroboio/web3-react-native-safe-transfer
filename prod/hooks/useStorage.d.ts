import { UseMobileStorageRes } from "./useStorageMobile";
import { UseSecureStorageRes } from "./useSecureStorageWeb";
declare type UseSecureStorageType = UseSecureStorageRes | UseMobileStorageRes;
export type { UseSecureStorageType };
/**
 * ## web
 * {@link useSecureStorageWeb}
 *
 * ## mobile
 * {@link useStorageMobile}
 */
export declare const useStorage: (() => UseMobileStorageRes) | ((encryptionSecret?: string | undefined, encodingType?: "base64" | "aes" | "des" | "rabbit" | "rc4", encryptionNamespace?: string | undefined) => {
    error: {
        isError: boolean;
        content: undefined;
        isLocalStorageExist: boolean;
    };
    storage: undefined;
    setItem: undefined;
    getItem: undefined;
    removeItem: undefined;
    removeAll: undefined;
    clear: undefined;
    getAllKeys: undefined;
    setNewSecureStorageConfig: undefined;
} | UseSecureStorageRes);
