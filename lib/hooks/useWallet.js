import { useState } from 'react';
import useSecureStorage from './useSecureStorage';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { generateMnemonic } from 'bip39';
const initError = { isError: false, content: '' };
const useWallet = () => {
    const [provider, setProvider] = useState();
    const [mnemonic, setMnemonic] = useState();
    const [error, setError] = useState(initError);
    const storage = useSecureStorage();
    const getCredentialsFromStorage = async () => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return { mnemonic: undefined, rpc: undefined };
        }
        const secureStorageSuccess = storage;
        const storageMnemonic = await secureStorageSuccess.getItem('mnemonic');
        const storageRpc = await secureStorageSuccess.getItem('rpc');
        return { mnemonic: storageMnemonic, rpc: storageRpc };
    };
    const setCredentialsToStorage = (rpc, mnemonic) => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        const secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        secureStorageSuccess.setItem('rpc', rpc);
        setError({ isError: false, content: undefined });
    };
    const setNewMnemonic = (mnemonic) => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        if (!mnemonic) {
            InAppWalletConnector.clearMnemonic();
        }
        else {
            InAppWalletConnector.setMnemonic(mnemonic);
        }
        const secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        setMnemonic(mnemonic);
    };
    const getActiveAccountFromStorage = async () => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        const secureStorageSuccess = storage;
        return await secureStorageSuccess.getItem('activeAccount');
    };
    const setActiveAccount = (account) => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        InAppWalletConnector.setActiveAccount(account);
        const secureStorageSuccess = storage;
        secureStorageSuccess.setItem('activeAccount', account);
    };
    const generateNewMnemonic = () => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        const mnemonic = generateMnemonic();
        InAppWalletConnector.setMnemonic(mnemonic);
        const secureStorageSuccess = storage;
        secureStorageSuccess.setItem('mnemonic', mnemonic);
        setMnemonic(mnemonic);
    };
    const getMnemonic = async () => {
        if (storage.error.isError) {
            setError({ isError: true, content: storage.error.content });
            return;
        }
        const secureStorageSuccess = storage;
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
