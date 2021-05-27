import { useEffect } from 'react';
import { useAccount } from '../context/account';
import { useWeb3, Connectors } from '../hooks/useWeb3';
import useWallet from '../hooks/useWallet';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { usePrevious } from '../hooks/usePrevious';

export const useRegularWallet = () => {
  const { connector: web3Connector, library: web3, address: web3Account } = useWeb3();

  const { connectCmd, disconnectCmd, wallet, chainId } = useAccount();

  const {
    getMnemonic,
    setNewMnemonic,
    getActiveAccountFromStorage,
    setActiveAccount,
  } = useWallet();

  const __connectCmd = useRef(connectCmd);
  const __disconnectCmd = useRef(disconnectCmd);
  const __setAccount = useRef(wallet.setAccount);
  const __web3 = useRef(web3);
  const __web3Connector = useRef(web3Connector);
  const __setNewMnemonic = useRef(setNewMnemonic);
  const __getMnemonic = useRef(getMnemonic);
  const __wallet = useRef(wallet);
  const __setActiveAccount = useRef(setActiveAccount);
  const __getActiveAccountFromStorage = useRef(getActiveAccountFromStorage);

  useEffect(() => {
    const web3Connector = __web3Connector.current;
    const connectCmd = __connectCmd.current;

    if(!web3Connector) return;
    if(connectCmd.connector !== Connectors.InAppWallet) return;
    if(!web3Connector.changeChainId) return;

    web3Connector.changeChainId(chainId);
  }, [chainId])

  const prevMnemonic = usePrevious(wallet.mnemonic.data);
  useEffect(() => {
    const setNewMnemonic = __setNewMnemonic.current;

    if (!wallet.mnemonic.data) return;
    setNewMnemonic(wallet.mnemonic.data);

  }, [wallet.mnemonic.data]);

  useEffect(() => {
    const web3Connector = __web3Connector.current;
    const wallet = __wallet.current;
    if (!wallet.addAddressCmd.is.ready || wallet.addAddressCmd.is.running) return;

    try {
      wallet.addAddressCmd.start();
      if (!wallet.mnemonic.data) throw new Error('no mnemonic');
      if (!web3Connector) throw new Error('connector not started');
      if (!web3Connector?.addWalletAddress) throw new Error('wrong connector');
      web3Connector?.addWalletAddress();

      wallet.addAddressCmd.done();
    } catch (e) {
      wallet.addAddressCmd.failed({ message: e.message || e.reason });
    }
  }, [wallet.addAddressCmd.is.ready]);

  useEffect(() => {
    const web3Connector = __web3Connector.current;
    const wallet = __wallet.current;
    if (!wallet.removeAddressCmd.is.ready || wallet.removeAddressCmd.is.running) return;

    try {
      wallet.removeAddressCmd.start();
      if (!wallet.mnemonic.data) throw new Error('no mnemonic');
      if (!web3Connector) throw new Error('connector not started');

      if (!web3Connector?.removeWalletAddress) throw new Error('wrong connector');
      web3Connector?.removeWalletAddress(wallet.removeAddressCmd.address);

      wallet.removeAddressCmd.done();
    } catch (e) {
      wallet.removeAddressCmd.failed({ message: e.message || e.reason });
    }
  }, [wallet.removeAddressCmd.is.ready]);

  useEffect(() => {
    const getMnemonic = async() => {
      const setNewMnemonic = __setNewMnemonic.current;
      const wallet = __wallet.current;
      const mnemonic = await __getMnemonic.current();
      if (!wallet.mnemonic.restoreCmd.is.ready || wallet.mnemonic.restoreCmd.is.running) return;

      try {
        wallet.mnemonic.restoreCmd.start();
        if (!mnemonic || mnemonic === "undefined") {
          throw new Error('no mnemonic');
        }
        wallet.mnemonic.set(mnemonic);
        setNewMnemonic(mnemonic);
        wallet.mnemonic.restoreCmd.done();
      } catch (e) {
        wallet.mnemonic.restoreCmd.failed({ message: e.message || e.reason });
      }
    }
    getMnemonic();
  }, [wallet.mnemonic.restoreCmd.is.ready]);

  const web3WalletAddressesAmount = __web3.current?.eth.accounts.wallet
    ? Object.keys(__web3.current.eth.accounts.wallet)
    : null;

  useEffect(() => {
    const wallet = __wallet.current;
    const connectCmd = __connectCmd.current;
    const web3 = __web3.current;

    if (connectCmd.connector !== Connectors.InAppWallet) return;
    if (!wallet.mnemonic.data) return;

    const accounts = new Set();
    Object.keys(web3.eth.accounts.wallet).forEach(key => {
      if (!web3.eth.accounts.wallet[parseInt(key)]?.address) return;
      accounts.add(web3.eth.accounts.wallet[parseInt(key)].address);
    });
    const uniqueAccountsArray = Array.from(accounts) as string[];

    if (!uniqueAccountsArray.includes(wallet.activeAccount)) {
      wallet.setActiveAccount(uniqueAccountsArray[0]);
      InAppWalletConnector.setActiveAccount(uniqueAccountsArray[0]);
    } else {
      wallet.setActiveAccount(wallet.activeAccount);
      InAppWalletConnector.setActiveAccount(wallet.activeAccount);
    }
    wallet.setAccounts(uniqueAccountsArray);
  }, [web3WalletAddressesAmount]);

  useEffect(() => {
    const getActiveAccount = async() => {
      const wallet = __wallet.current;

      const activeAccount = await  __getActiveAccountFromStorage.current();
      if (!activeAccount) return;
      wallet.setActiveAccount(activeAccount);
      InAppWalletConnector.setActiveAccount(activeAccount);
    }
    getActiveAccount()
  }, []);

  useEffect(() => {
    const wallet = __wallet.current;
    const web3Connector = __web3Connector.current;
    const setActiveAccount = __setActiveAccount.current;

    if (!web3Connector?.handleAccountChanged) return;
    web3Connector.handleAccountChanged(wallet.activeAccount);
    setActiveAccount(wallet.activeAccount);
  }, [wallet.activeAccount]);

  useEffect(() => {
    const setAccount = __setAccount.current;

    if (!web3Account) return;
    setAccount(web3Account);
  }, [connectCmd.is.ready, web3Account]);

  const prevAccount = usePrevious(web3Account);
  
  useEffect(() => {
    const setAccount = __setAccount.current;

    if (!web3Account) return;
    if (prevAccount === web3Account) return;
    setAccount(web3Account);
  }, [web3Account, prevAccount]);

  useEffect(() => {
    const setAccount = __setAccount.current;
    const disconnectCmd = __disconnectCmd.current;
    const wallet = __wallet.current;

    if(!disconnectCmd.is.done) return;
    setAccount("");
    wallet.setMnemonic(undefined);
  }, [disconnectCmd.is.done]);
};
