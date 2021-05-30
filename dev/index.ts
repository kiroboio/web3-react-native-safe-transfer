import { useAccount } from './context/account';
import { observer } from 'mobx-react-lite';
import { Connectors } from './hooks/useWeb3';
import {
  ITransferItem,
  ISafeTransferItem,
  ERC20TokenItem,
  Callback,
  DrawerContent,
  tokens,
  TokenType
} from './stores/account';
import { useLocalStorage } from './hooks/useLocaleStorage';
import { KiroboProvider } from './providers/KiroboProvider';
import { weiToEther, etherToWei, formatEther } from './utils/ethereum';
import { useWhatChangedDev } from './debugging/useWhatChangedDev';
import InAppWalletConnector from './customConnectors/InAppWalletConnector';
import useWallet from './hooks/useWallet';
import useSecureStorage, {
  UseSecureStorageEmptyRes,
  UseSecureStorageRes,
} from './hooks/useSecureStorage';
import { useDispatchContract, useContract } from './providers/OnChainContractProvider';

export {
  useAccount,
  observer,
  Connectors,
  KiroboProvider,
  weiToEther,
  etherToWei,
  formatEther,
  useWhatChangedDev,
  useSecureStorage,
  useLocalStorage,
  useWallet,
  useDispatchContract,
  useContract,
  DrawerContent,
  InAppWalletConnector,
  tokens,
};

export type {
  ITransferItem,
  ISafeTransferItem,
  UseSecureStorageEmptyRes,
  UseSecureStorageRes,
  ERC20TokenItem,
  Callback,
  TokenType
};
