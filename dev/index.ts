import { useAccount } from './context/account'
import { observer } from 'mobx-react-lite'
import { Connectors } from './hooks/useWeb3'
import {
  ITransferItem,
  ISafeTransferItem,
  ERC20TokenItem,
  Currency,
} from './stores/account'
import { useLocalStorage } from './hooks/useLocaleStorage'
import { KiroboProvider } from './providers/KiroboProvider'
import { weiToEther, etherToWei, formatEther } from './utils/ethereum'
import * as yupEth from './utils/form'
import { configureReactotronDebugging } from './debugging/configureReactotronDebugging'
import { useWhatChangedDev } from './debugging/useWhatChangedDev'
import InAppWalletConnector from './customConnectors/InAppWalletConnector'
import useWallet from './hooks/useWallet'
import useSecureStorage, {
  UseSecureStorageEmptyRes,
  UseSecureStorageRes,
} from './hooks/useSecureStorage'

export {
  useAccount,
  observer,
  Connectors,
  KiroboProvider,
  weiToEther,
  etherToWei,
  formatEther,
  configureReactotronDebugging,
  useWhatChangedDev,
  useSecureStorage,
  useLocalStorage,
  useWallet,
  InAppWalletConnector,
  yupEth
}

export type {
  ITransferItem,
  ISafeTransferItem,
  UseSecureStorageEmptyRes,
  UseSecureStorageRes,
  ERC20TokenItem,
  Currency,
}
