import { useState } from "react";
import SecureLS from "secure-ls";

export type Error = {
  isError: boolean;
  content: unknown;
  isLocalStorageExist: boolean;
};

const useSecureStorageEmptyRes = {
  error: { isError: true, content: undefined, isLocalStorageExist: false },
  storage: undefined,
  setItem: undefined,
  getItem: undefined,
  removeItem: undefined,
  removeAll: undefined,
  clear: undefined,
  getAllKeys: undefined,
  setNewSecureStorageConfig: undefined,
};

type UseSecureStorageEmptyRes = typeof useSecureStorageEmptyRes;

export type UseSecureStorageRes = {
  error: Error;
  storage: SecureLS;
  setItem: (itemName: string, item: unknown) => void;
  getItem: (itemName: string) => Promise<string>;
  removeItem: (itemName: string) => void;
  removeAll: () => void;
  clear: () => void;
  getAllKeys: () => string[] | undefined;
  setNewSecureStorageConfig: (
    encryptionSecret: string,
    encodingType?: string
  ) => void;
};

export const useSecureStorageWeb = (
      encryptionSecret?: string,
      encodingType = "aes",
      encryptionNamespace?: string
    ): UseSecureStorageRes | UseSecureStorageEmptyRes => {
      const createNewSecureSecureStorage = (
        encryptionSecret?: string,
        encodingType = "aes"
      ) => {
        const createNewSecureLS = () => {
          return new SecureLS({
            encodingType,
            encryptionSecret,
            isCompression: false,
            encryptionNamespace,
          });
        };
        try {
          const newSecureLS = createNewSecureLS() as 
            SecureLS & { error: Error };
          newSecureLS.error = {
            isError: false,
            content: undefined,
            isLocalStorageExist: true,
          };

          return newSecureLS;
        } catch (e) {
          const res = useSecureStorageEmptyRes;
          res.error = { isError: true, content: e, isLocalStorageExist: true };
          return res;
        }
      };

      const [newSecureStorage, setSecureStorageConfig] = useState<
        SecureLS | UseSecureStorageEmptyRes
      >(createNewSecureSecureStorage(encryptionSecret, encodingType));

      const [error, setError] = useState<Error>({
        isError: false,
        content: undefined,
        isLocalStorageExist: true,
      });

      const secureStorageError = newSecureStorage as UseSecureStorageEmptyRes;

      if (secureStorageError.error.isError) {
        return secureStorageError;
      }

      const secureStorage = newSecureStorage as SecureLS;

      const setNewSecureStorageConfig = (
        encryptionSecret: string,
        encodingType = "aes"
      ) => {
        setSecureStorageConfig(
          createNewSecureSecureStorage(encryptionSecret, encodingType)
        );
      };

      const handleSetError = (e: { message: string }) => {
        setError((errorState) => ({
          ...errorState,
          isError: true,
          content: e,
        }));

        throw new Error(e.message);
      };

      const setItem = (itemName: string, item: unknown) => {
        try {
          secureStorage.set(itemName, item);
        } catch (e) {
          handleSetError(e);
        }
      };

      const getItem = async (itemName: string, isAllKeysData?: boolean) => {
        try {
          return secureStorage.get(itemName, isAllKeysData);
        } catch (e) {
          handleSetError(e);
        }
      };

      const removeItem = (itemName: string) => {
        try {
          secureStorage.remove(itemName);
        } catch (e) {
          handleSetError(e);
        }
      };

      const removeAll = () => {
        try {
          secureStorage.removeAll();
        } catch (e) {
          handleSetError(e);
        }
      };

      const clear = () => {
        try {
          secureStorage.clear();
        } catch (e) {
          handleSetError(e);
        }
      };

      const getAllKeys = () => {
        try {
          return secureStorage.getAllKeys();
        } catch (e) {
          handleSetError(e);
        }
        return [];
      };

      return {
        error,
        storage: secureStorage,
        setItem,
        getItem,
        removeItem,
        removeAll,
        clear,
        getAllKeys,
        setNewSecureStorageConfig,
      };
    };

