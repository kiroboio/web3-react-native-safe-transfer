import React, { useContext } from 'react'
import { IAccount, accountStore } from '../stores/account'

console.log(accountStore);
export const AccountContext = React.createContext(accountStore)


export function useAccount() {
  return useContext(AccountContext)
}

export { IAccount }