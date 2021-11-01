import React, { useContext } from 'react'
import { uiStore } from '../stores/ui'
import { appStore } from './app'


export const useUI = (): typeof uiStore => {
  return useContext(React.createContext(appStore.uiStore))
}
