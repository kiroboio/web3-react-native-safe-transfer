import { useEffect } from 'react';
import FactoryJSON from '../abi/Factory.json';
import WalletJSON from '../abi/Wallet.json';
import { useAccount } from '..';
import { useWeb3 } from '../hooks/useWeb3';
import { AbiItem } from 'web3-utils';
import { useDispatchContract } from '..';
import erc20Abi from '../abi/erc20.json';
import { isValidAddress } from '../utils/address';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { tokens as tokensConfig } from '../stores/account';
import { usePrevious } from '../hooks/usePrevious';

const OnChainWalletAddress = '0xC97Bf7C8f20D32BD28e92845Eb18cA4462160110';

export const useSetupOnChainContract = () => {
  const dispatchContact = useDispatchContract();

  const { library, address } = useWeb3();
  const { onChainWalletDetails, wallet, tokens, chainId, connectCmd } = useAccount();
  const { createWalletTransactionCmd, claimOwnershipCmd } = onChainWalletDetails;

  const setupOnChainContract = () => {
    try {
      wallet.createWalletCmd.start();
      const factoryJsonAbi = FactoryJSON.abi as AbiItem[];
      const contract = new library.eth.Contract(factoryJsonAbi, OnChainWalletAddress);

      dispatchContact({ payload: contract, type: 'setOnChainContract' });
      wallet.createWalletCmd.done();
      return contract;
    } catch (e) {
      wallet.createWalletCmd.failed({ message: e.message });
    }
  };

  const __claimOwnershipCmd = useRef(claimOwnershipCmd);
  const __createWalletTransactionCmd = useRef(createWalletTransactionCmd);

  const tryToSetupContracts = async () => {
    if (!address || !library) return;
    try {
      const onChainContract = setupOnChainContract();
      const walletAccount = await onChainContract?.methods.getWallet(wallet.account).call();
      if (isValidAddress(walletAccount)) {
        onChainWalletDetails.setAccount(walletAccount);
        const walletJsonAbi = WalletJSON.abi as AbiItem[];
        const contract = new library.eth.Contract(walletJsonAbi, walletAccount);
        onChainWalletDetails.setIsNoWallet(false);
        dispatchContact({ payload: contract, type: 'setOnChainWalletContract' });
      } else {
        onChainWalletDetails.setAccount('');
        onChainWalletDetails.setIsNoWallet(true);
      }
    } catch (err) {
      onChainWalletDetails.setAccount('');
      onChainWalletDetails.setIsNoWallet(true);
      throw new Error(err);
    }
  };

  const tryToSetupTokenContract = async () => {
    if (tokens.token === 'none') return;
    try {
      const erc20AbiItem = erc20Abi as AbiItem[];
      const contract = new library.eth.Contract(
        erc20AbiItem,
        tokensConfig[tokens.token].address[chainId]
      );
      dispatchContact({ payload: contract, type: 'setOnChainTokenContract' });
    } catch (err) {
      dispatchContact({ payload: undefined, type: 'setOnChainTokenContract' });
      throw new Error(err);
    }
  };

  const tryToSetupContractsAsync = async () => {
    //if (onChainWalletDetails.createWalletCmd.is.running) return;
    try {
      onChainWalletDetails.createWalletCmd.start();
      await tryToSetupContracts();
      onChainWalletDetails.createWalletCmd.done();
    } catch (e) {
      onChainWalletDetails.createWalletCmd.failed({ message: e.message });
    }
  };

  const tryToSetupTokenContractsAsync = async () => {
    try {
      onChainWalletDetails.createTokenWalletCmd.start();
      await tryToSetupTokenContract();
      onChainWalletDetails.createTokenWalletCmd.done();
    } catch (e) {
      onChainWalletDetails.createTokenWalletCmd.failed({ message: e.message });
    }
  };

  const __tryToSetupContractsAsync = useRef(tryToSetupContractsAsync);
  const __tryToSetupTokenContractsAsync = useRef(tryToSetupTokenContractsAsync);

  useEffect(() => {
    const tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
    const createWalletTransactionCmd = __createWalletTransactionCmd.current;

    if (!createWalletTransactionCmd.is.done || createWalletTransactionCmd.is.running) return;
    tryToSetupContractsAsync();
  }, [createWalletTransactionCmd.is.done]);

  useEffect(() => {
    const tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
    const claimOwnershipCmd = __claimOwnershipCmd.current;

    if (!claimOwnershipCmd.is.done) return;
    tryToSetupContractsAsync();
  }, [claimOwnershipCmd.is.done]);

  const prevAccount = usePrevious(wallet.account);
  useEffect(() => {
    if (prevAccount === wallet.account) return;
    const tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
    tryToSetupContractsAsync();
  }, [wallet.account, prevAccount]);

  const prevChainId = usePrevious(chainId);
  useEffect(() => {
    if (prevChainId === chainId) return;

    const tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
    tryToSetupContractsAsync();
  }, [prevChainId, chainId]);

  // useEffect(() => {
  //   if(!connectCmd.is.done) return;

  //   const tryToSetupContractsAsync = __tryToSetupContractsAsync.current;
  //   tryToSetupContractsAsync();
  // }, [connectCmd.is.done]);

  const prevToken = usePrevious(tokens.token);
  useEffect(() => {
    if (prevToken === tokens.token) return;

    const tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
    tryToSetupTokenContractsAsync();
  }, [tokens.token, prevToken]);

  // useEffect(() => {
  //   if (prevChainId === chainId) return;

  //   const tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
  //   tryToSetupTokenContractsAsync();
  // }, [prevChainId, chainId]);

  // useEffect(() => {
  //   if (!wallet.createWalletCmd.is.done) return;
  //   const tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
  //   tryToSetupTokenContractsAsync();
  // }, [wallet.createWalletCmd.is.done]);

  useEffect(() => {
    if (!onChainWalletDetails.createWalletCmd.is.done) return;

    const tryToSetupTokenContractsAsync = __tryToSetupTokenContractsAsync.current;
    tryToSetupTokenContractsAsync();
  }, [onChainWalletDetails.createWalletCmd.is.done]);

  return null;
};
