import { useState } from "react";
import { Storage, StoragePlugin } from "@capacitor/storage";

export type Error = {
  isError: boolean;
  content: unknown;
  isLocalStorageExist: boolean;
};

export type UseMobileStorageRes = {
  error: Error;
  storage: StoragePlugin;
  setItem: (itemName: string, item: string) => void;
  getItem: (itemName: string) => Promise<string>;
  removeItem: (itemName: string) => void;
  removeAll: () => void;
  clear: () => void;
  getAllKeys: () => ReturnType<StoragePlugin["keys"]> | null
  setNewSecureStorageConfig: () => void;
}

export const useStorageMobile = (): UseMobileStorageRes => {
  const createStorage = () => Storage;
  const [newStorage, setStorage] = useState(createStorage());

  const [error, setError] = useState<Error>({
    isError: false,
    content: undefined,
    isLocalStorageExist: true,
  });

  const setNewSecureStorageConfig = () => {
    setStorage(createStorage());
  };

  const handleSetError = (e: { message: string }) => {
    setError((errorState) => ({
      ...errorState,
      isError: true,
      content: e,
    }));

    throw new Error(e.message);
  };

  const setItem = (itemName: string, item: string) => {
    try {
      newStorage.set({ key: itemName, value: item });
    } catch (e) {
      handleSetError(e);
    }
  };

  const getItem = async (itemName: string) => {
    try {
      const item = await newStorage.get({ key: itemName });
      return item.value || "";
    } catch (e) {
      handleSetError(e);
    }

    return "";
  };

  const removeItem = (itemName: string) => {
    try {
      newStorage.remove({ key: itemName });
    } catch (e) {
      handleSetError(e);
    }
  };

  const removeAll = () => {
    try {
      newStorage.clear();
    } catch (e) {
      handleSetError(e);
    }
  };

  const clear = () => {
    try {
      newStorage.clear();
    } catch (e) {
      handleSetError(e);
    }
  };

  const getAllKeys = () => {
    try {
      return newStorage.keys();
    } catch (e) {
      handleSetError(e);
    }

    return null
  };

  return {
    error,
    storage: newStorage,
    setItem,
    getItem,
    removeItem,
    removeAll,
    clear,
    getAllKeys,
    setNewSecureStorageConfig,
  };
};
