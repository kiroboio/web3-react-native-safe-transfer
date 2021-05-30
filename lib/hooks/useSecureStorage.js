import { useState } from 'react';
import SecureLS from 'secure-ls';
import isMobile from 'ismobilejs';
import useStorageMobile from "./useStorageMobile";
const useSecureStorageEmptyRes = {
    error: { isError: true, content: undefined, isLocalStorageExist: false },
    secureStorage: undefined,
    setItem: undefined,
    getItem: undefined,
    removeItem: undefined,
    removeAll: undefined,
    clear: undefined,
    getAllKeys: undefined,
    setNewSecureStorageConfig: undefined,
};
const useSecureStorage = isMobile(window.navigator).any ? useStorageMobile :
    (encryptionSecret, encodingType = 'aes', encryptionNamespace) => {
        const createNewSecureSecureStorage = (encryptionSecret, encodingType = 'aes') => {
            const createNewSecureLS = () => {
                return new SecureLS({
                    encodingType,
                    encryptionSecret,
                    isCompression: false,
                    encryptionNamespace,
                });
            };
            try {
                const newSecureLS = createNewSecureLS();
                newSecureLS.error = {
                    isError: false,
                    content: undefined,
                    isLocalStorageExist: true,
                };
                return newSecureLS;
            }
            catch (e) {
                const res = useSecureStorageEmptyRes;
                res.error = { isError: true, content: e, isLocalStorageExist: true };
                return res;
            }
        };
        const [newSecureStorage, setSecureStorageConfig] = useState(createNewSecureSecureStorage(encryptionSecret, encodingType));
        const [error, setError] = useState({
            isError: false,
            content: undefined,
            isLocalStorageExist: true,
        });
        const secureStorageError = newSecureStorage;
        if (secureStorageError.error.isError) {
            return secureStorageError;
        }
        const secureStorage = newSecureStorage;
        const setNewSecureStorageConfig = (encryptionSecret, encodingType = 'aes') => {
            setSecureStorageConfig(createNewSecureSecureStorage(encryptionSecret, encodingType));
        };
        const handleSetError = (e) => {
            setError((errorState) => ({
                ...errorState,
                isError: true,
                content: e,
            }));
            throw new Error(e);
        };
        const setItem = (itemName, item) => {
            try {
                secureStorage.set(itemName, item);
            }
            catch (e) {
                handleSetError(e);
            }
        };
        const getItem = async (itemName, isAllKeysData) => {
            try {
                return secureStorage.get(itemName, isAllKeysData);
            }
            catch (e) {
                handleSetError(e);
            }
        };
        const removeItem = (itemName) => {
            try {
                secureStorage.remove(itemName);
            }
            catch (e) {
                handleSetError(e);
            }
        };
        const removeAll = () => {
            try {
                secureStorage.removeAll();
            }
            catch (e) {
                handleSetError(e);
            }
        };
        const clear = () => {
            try {
                secureStorage.clear();
            }
            catch (e) {
                handleSetError(e);
            }
        };
        const getAllKeys = () => {
            try {
                return secureStorage.getAllKeys();
            }
            catch (e) {
                handleSetError(e);
            }
            return [];
        };
        return {
            error,
            secureStorage,
            setItem,
            getItem,
            removeItem,
            removeAll,
            clear,
            getAllKeys,
            setNewSecureStorageConfig,
        };
    };
export default useSecureStorage;
