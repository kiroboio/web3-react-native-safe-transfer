import Reactotron from 'reactotron-react-js'
import { mst } from 'reactotron-mst'
import { Account, accountStore } from '../stores/account'
import { UI, uiStore } from '../stores/ui'
import { AddressBookModel, addressBookStore } from '../stores/addressBook'
import { types } from 'mobx-state-tree'

export const configureReactotronDebugging = () => {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const connectedReactotron = Reactotron.use(mst()).configure().connect()
  // @ts-expect-error: trackMstNode exist
  if (connectedReactotron.trackMstNode) {
    const AppStore = types
    .model('AppStore', {
      account: types.optional(Account, {}),
      ui: types.optional(UI, {}),
      addressBook: types.optional(AddressBookModel, {})
    })
    .actions((self) => ({
      setAccountStore: (account: typeof accountStore) => {
        // @ts-expect-error: ts clear type without mobx special properties not the same
        self.account = account
      },
      setUiStore: (ui: typeof uiStore) => {
        self.ui = ui
      },
      setAddressBook: (addressBook: typeof addressBookStore) => {
        self.addressBook = addressBook
      },
    }))

    const app = AppStore.create()
    
    // @ts-expect-error: trackMstNode exist
    connectedReactotron.trackMstNode(app)
    app.setAccountStore(accountStore);
    app.setUiStore(uiStore)
    app.setAddressBook(addressBookStore)
  }
  
  class ConsoleTron {
    public static log(message: string, ...args: unknown[]) {
      Reactotron.display({
        name: 'LOG',
        preview: message,
        value: { message, args },
      })
    }
    public static warn(message: string, ...args: unknown[]) {
      Reactotron.display({
        name: 'WARN',
        preview: message,
        value: { message, args },
        important: true,
      })
    }
    public static error(message: string, ...args: unknown[]) {
      Reactotron.display({
        name: 'ERROR',
        preview: message,
        value: { message, args },
        important: true,
      })
    }
  }

  const consoleToReactotron = () => {
    if (process.env.REACT_APP_LOG_LEVEL !== 'reactotron') return
    console.error = ConsoleTron.error
    console.warn = ConsoleTron.warn
    console.log = ConsoleTron.log
    return
  }

  consoleToReactotron()
}
