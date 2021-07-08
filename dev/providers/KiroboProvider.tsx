import React from 'react'

import { AccountContext } from '../context/account'
import { accountStore } from '../stores/account'
import { Web3Provider } from './Web3Provider'

export const KiroboProvider: React.FC = (props) => (
  <AccountContext.Provider value={accountStore}>
    <Web3Provider />
    {props.children}
  </AccountContext.Provider>
)
