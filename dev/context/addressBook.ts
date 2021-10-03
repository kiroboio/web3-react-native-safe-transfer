import React, { useContext } from 'react'
import { addressBookStore } from '../stores/addressBook'
import { appStore } from "./app"

export const AddressBookContext = React.createContext(appStore.addressBookStore)

export function useAddressBook(): typeof addressBookStore {
  return useContext(AddressBookContext)
}

