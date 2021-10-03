import React from 'react'
import { uiStore } from '../stores/ui'
import { accountStore } from '../stores/account'
import { addressBookStore } from '../stores/addressBook'

class AppStore {
    public accountStore: typeof accountStore
    public uiStore: typeof uiStore
    public addressBookStore: typeof addressBookStore
    constructor() {
        this.accountStore = accountStore
        this.uiStore = uiStore
        this.addressBookStore = addressBookStore
    }
}

export const appStore = new AppStore()
export const AppContext = React.createContext(appStore)

