import React, { useContext } from 'react'
import { accountStore, IAccount } from '../stores/account'

export const AccountContext = React.createContext(accountStore)

export function useAccount() {
  return useContext(AccountContext)
}

export { IAccount }