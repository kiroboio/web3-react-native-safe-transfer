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
    storage: undefined;
    setItem: undefined;
    getItem: undefined;
    removeItem: undefined;
    removeAll: undefined;
    clear: undefined;
    getAllKeys: undefined;
    setNewSecureStorageConfig: undefined;
};
declare type UseSecureStorageEmptyRes = typeof useSecureStorageEmptyRes;
export declare type UseSecureStorageRes = {
    error: Error;
    storage: SecureLS;
    setItem: (itemName: string, item: unknown) => void;
    getItem: (itemName: string) => Promise<string>;
    removeItem: (itemName: string) => void;
    removeAll: () => void;
    clear: () => void;
    getAllKeys: () => string[] | undefined;
    setNewSecureStorageConfig: (encryptionSecret: string, encodingType?: string) => void;
};
/**
 * 1. Secure data with various @param encodingType (base64/aes/des/rabbit/rc4/''), default aes.
 * 2. Advanced API wrapper over localStorage API, providing other basic utilities.
 * 3. Save data in multiple keys inside localStorage and secure-ls will always remember it's creation.
 *
 * @param encryptionSecret _will only be used for the Encryption and Decryption of data with AES, DES, RC4, RABBIT, and the library will discard it if no encoding / Base64 encoding method is choosen._
 * @param encodingType _default aes_
 * @param encryptionNamespace _is used to make multiple instances with different encryptionSecret and/or different encryptionSecret possible._
 * @returns
 * ```{
        error,
        storage: secureStorage,
        setItem,
        getItem,
        removeItem,
        removeAll,
        clear,
        getAllKeys,
        setNewSecureStorageConfig
      }```
 */
export declare const useSecureStorageWeb: (encryptionSecret?: string | undefined, encodingType?: "base64" | "aes" | "des" | "rabbit" | "rc4", encryptionNamespace?: string | undefined) => UseSecureStorageRes | UseSecureStorageEmptyRes;
export {};
