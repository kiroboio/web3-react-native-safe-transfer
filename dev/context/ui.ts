import React, { useContext } from 'react'
import { uiStore } from '../stores/ui'
import { appStore } from './app'

export const UiContext = React.createContext(appStore.uiStore);

export function useUI(): typeof uiStore {
  return useContext(UiContext)
}
