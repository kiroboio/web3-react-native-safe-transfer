import { useState } from 'react';
import useSecureStorage, { UseSecureStorageRes } from './useSecureStorage';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { generateMnemonic } from 'bip39';
import { Connectors, useWeb3 } from './useWeb3';
import { useAccount } from '../context/account';

type Error = {
  isError: boolean;
  content: unknown;
};

const initError = { isError: false, content: '' };

const useWallet = (): {
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

  const storage = useSecureStorage();

  const getCredentialsFromStorage = async() => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return { mnemonic: undefined, rpc: undefined };
    }
    const secureStorageSuccess = storage as UseSecureStorageRes<{
      mnemonic: string;
    }>;
    const storageMnemonic = await secureStorageSuccess.getItem('mnemonic');
    const storageRpc = await secureStorageSuccess.getItem('rpc');
    return { mnemonic: storageMnemonic, rpc: storageRpc };
  };

  const setCredentialsToStorage = (rpc: string, mnemonic: string) => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const secureStorageSuccess = storage as UseSecureStorageRes<{
      rpc: string;
      mnemonic: string;
    }>;
    secureStorageSuccess.setItem('mnemonic', mnemonic);
    secureStorageSuccess.setItem('rpc', rpc);

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
    const secureStorageSuccess = storage as UseSecureStorageRes<{
      mnemonic: string;
    }>;
    secureStorageSuccess.setItem('mnemonic', mnemonic);
    setMnemonic(mnemonic);
  };

  const getActiveAccountFromStorage = async() => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }

    const secureStorageSuccess = storage as UseSecureStorageRes<{
      activeAccount: string;
    }>;
    return await secureStorageSuccess.getItem('activeAccount');
  };

  const setActiveAccount = (account: string) => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }

    InAppWalletConnector.setActiveAccount(account);

    const secureStorageSuccess = storage as UseSecureStorageRes<{
      activeAccountIndex: number;
    }>;
    secureStorageSuccess.setItem('activeAccount', account);
  };

  const generateNewMnemonic = () => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const mnemonic = generateMnemonic();
    InAppWalletConnector.setMnemonic(mnemonic);
    const secureStorageSuccess = storage as UseSecureStorageRes<{
      mnemonic: string;
    }>;
    secureStorageSuccess.setItem('mnemonic', mnemonic);
    setMnemonic(mnemonic);
  };

  const getMnemonic = async() => {
    if (storage.error.isError) {
      setError({ isError: true, content: storage.error.content });
      return;
    }
    const secureStorageSuccess = storage as UseSecureStorageRes<{
      mnemonic: string;
    }>;
    const storageMnemonic = await secureStorageSuccess.getItem('mnemonic');
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

export default useWallet;
