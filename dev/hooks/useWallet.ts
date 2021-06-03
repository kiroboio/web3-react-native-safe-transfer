import { useState } from "react";
import { useStorage, UseSecureStorageType } from "./useStorage";
import { InAppWalletConnector } from "../customConnectors/InAppWalletConnector";
import { generateMnemonic } from "bip39";

type Error = {
  isError: boolean;
  content: unknown;
};

const initError = { isError: false, content: "" };

export const useWallet = (): {
  error: Error;
  mnemonic: string | undefined;
  provider: string | undefined;
  getMnemonic: typeof getMnemonic;
  setNewMnemonic: typeof setNewMnemonic;
  generateNewMnemonic: typeof generateNewMnemonic;
  setProvider: typeof setProvider;
  getCredentialsFromStorage: typeof getCredentialsFromStorage;
  setCredentialsToStorage: typeof setCredentialsToStorage;
  getActiveAccountFromStorage: typeof getActiveAccountFromStorage;
  setActiveAccount: typeof setActiveAccount;
} => {
  const [provider, setProvider] = useState<string>();
  const [mnemonic, setMnemonic] = useState<string>();

  const [error, setError] = useState<Error>(initError);

  const storage = useStorage();

  const getCredentialsFromStorage = async () => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return { mnemonic: undefined, rpc: undefined };
    }
    const secureStorageSuccess = storage as UseSecureStorageType;
    const storageMnemonic = await secureStorageSuccess.getItem("mnemonic");
    const storageRpc = await secureStorageSuccess.getItem("rpc");
    return { mnemonic: storageMnemonic, rpc: storageRpc };
  };

  const setCredentialsToStorage = (rpc: string, mnemonic: string) => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const secureStorageSuccess = storage as UseSecureStorageType;
    secureStorageSuccess.setItem("mnemonic", mnemonic);
    secureStorageSuccess.setItem("rpc", rpc);

    setError({ isError: false, content: undefined });
  };

  const setNewMnemonic = (mnemonic: string | undefined) => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    if (!mnemonic) {
      InAppWalletConnector.clearMnemonic();
    } else {
      InAppWalletConnector.setMnemonic(mnemonic);
    }
    const secureStorageSuccess = storage as UseSecureStorageType;
    secureStorageSuccess.setItem("mnemonic", mnemonic);
    setMnemonic(mnemonic);
  };

  const getActiveAccountFromStorage = async () => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }

    const secureStorageSuccess = storage as UseSecureStorageType;
    return await secureStorageSuccess.getItem("activeAccount");
  };

  const setActiveAccount = (account: string) => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }

    InAppWalletConnector.setActiveAccount(account);

    const secureStorageSuccess = storage as UseSecureStorageType;
    secureStorageSuccess.setItem("activeAccount", account);
  };

  const generateNewMnemonic = () => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const mnemonic = generateMnemonic();
    InAppWalletConnector.setMnemonic(mnemonic);
    const secureStorageSuccess = storage as UseSecureStorageType;
    secureStorageSuccess.setItem("mnemonic", mnemonic);
    setMnemonic(mnemonic);
  };

  const getMnemonic = async () => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const secureStorageSuccess = storage as UseSecureStorageType;
    const storageMnemonic = await secureStorageSuccess.getItem("mnemonic");
    return storageMnemonic;
  };

  return {
    error,
    mnemonic,
    provider,
    getMnemonic,
    setNewMnemonic,
    generateNewMnemonic,
    setProvider,
    getCredentialsFromStorage,
    setCredentialsToStorage,
    getActiveAccountFromStorage,
    setActiveAccount,
  };
};

