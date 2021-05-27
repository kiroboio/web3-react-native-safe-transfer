import { useState } from 'react'
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export type Error = {
  isError: boolean
  content: unknown
  isLocalStorageExist: boolean
}

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
}

export type UseSecureStorageEmptyRes = typeof useSecureStorageEmptyRes


const useStorageMobile =
     <T>() => {

        const createStorage = () => Storage
        const [newStorage, setStorage] = useState(createStorage())

        const [error, setError] = useState<Error>({
          isError: false,
          content: undefined,
          isLocalStorageExist: true,
        })

        // const secureStorageError = newStorage as UseSecureStorageEmptyRes

        // if (secureStorageError.error.isError) {
        //   return secureStorageError
        // }

        // const secureStorage = newStorage as T & SecureLS

        const setNewSecureStorageConfig = () => {
            setStorage(createStorage())
        }

        const handleSetError = (e: unknown) => {
          setError((errorState) => ({
            ...errorState,
            isError: true,
            content: e,
          }))

          throw new Error('Secure storage error')
        }

        const setItem = (itemName: string, item: string) => {
          try {
            newStorage.set({ key: itemName, value: item})
          } catch (e) {
            handleSetError(e)
          }
        }

        const getItem = async(
          itemName: string,
          isAllKeysData?: boolean
        ) => {
          try {
            const item = await newStorage.get({ key: itemName })
            return item.value;
          } catch (e) {
            handleSetError(e)
          }
        }

        const removeItem = (itemName: string) => {
          try {
            newStorage.remove({ key: itemName })
          } catch (e) {
            handleSetError(e)
          }
        }

        const removeAll = () => {
          try {
            newStorage.clear()
          } catch (e) {
            handleSetError(e)
          }
        }

        const clear = () => {
          try {
            newStorage.clear()
          } catch (e) {
            handleSetError(e)
          }
        }

        const getAllKeys = () => {
          try {
            return newStorage.keys()
          } catch (e) {
            handleSetError(e)
          }
        }

        return {
          error,
          newStorage,
          setItem,
          getItem,
          removeItem,
          removeAll,
          clear,
          getAllKeys,
          setNewSecureStorageConfig,
        }
      }

export default useStorageMobile
