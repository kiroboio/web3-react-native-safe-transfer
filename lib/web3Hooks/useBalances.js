import * as React from 'react';
import { useContract, useAccount } from '..';
import { useWeb3 } from '../hooks/useWeb3';
import { getRate } from '../services/rates.service';
import { fromWei } from 'web3-utils';
import { formatEther } from '../utils/ethereum';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { usePrevious } from '../hooks/usePrevious';
let getRateTimeout;
const convertCryptoToFiat = (rate, value) => {
    let result = value.toString();
    if (result !== '0') {
        const balanceInString = fromWei(value).toString();
        result = (parseFloat(balanceInString) * rate).toString();
    }
    return formatEther(parseFloat(result));
};
export const useBalances = () => {
    const { address: account, library } = useWeb3();
    const { onChainWalletDetails, wallet, setExchangeToUsdRate, block, transactions, tokens, chainId } = useAccount();
    const onChain = useContract();
    const onChainWalletContract = onChain.walletContract;
    const [rate, setRate] = React.useState();
    const updateRate = async () => {
        try {
            const rate = await getRate();
            setExchangeToUsdRate(rate);
            setRate(rate);
        }
        catch (e) {
            clearTimeout(getRateTimeout);
            getRateTimeout = setTimeout(updateRate, 5000);
        }
    };
    const __updateRate = useRef(updateRate);
    const __setBalanceInUsdOnChainWallet = useRef(onChainWalletDetails.setBalanceInUsd);
    const __setBalanceInUsdWallet = useRef(wallet.setBalanceInUsd);
    const __block = useRef(block);
    const __walletBalanceCmd = useRef(wallet.balanceCmd);
    const __walletTokenBalanceCmd = useRef(wallet.tokenBalanceCmd);
    const __onChainWalletBalanceCmd = useRef(onChainWalletDetails.balanceCmd);
    const __onChainWalletTokenBalanceCmd = useRef(onChainWalletDetails.tokenBalanceCmd);
    const __walletAccount = useRef(wallet.account);
    const __onChainWalletDetailsAccount = useRef(onChainWalletDetails.account);
    const __wallet = useRef(wallet);
    React.useEffect(() => {
        const updateRate = __updateRate.current;
        updateRate();
    }, []);
    React.useEffect(() => {
        const setBalanceInUsd = __setBalanceInUsdOnChainWallet.current;
        if (!rate || !onChainWalletDetails.balance)
            return;
        const convertBalance = async () => {
            const convertedBalance = convertCryptoToFiat(rate, onChainWalletDetails.balance);
            setBalanceInUsd(String(convertedBalance));
        };
        convertBalance();
    }, [onChainWalletDetails.balance, rate]);
    React.useEffect(() => {
        const setBalanceInUsd = __setBalanceInUsdWallet.current;
        if (!rate || !wallet.balance)
            return;
        const convertBalance = async () => {
            const convertedBalance = convertCryptoToFiat(rate, wallet.balance);
            setBalanceInUsd(String(convertedBalance));
        };
        convertBalance();
    }, [wallet.balance, rate]);
    const setWalletTokenBalance = async () => {
        const { tokenContract } = onChain;
        if (!tokenContract || !wallet.account)
            return;
        try {
            const balance = await tokenContract.methods.balanceOf(wallet.account).call();
            wallet.setTokenBalance(balance);
        }
        catch (err) {
            throw new Error(err);
        }
    };
    const setOnChainWalletTokenBalance = async () => {
        const { tokenContract } = onChain;
        if (!tokenContract)
            return;
        try {
            const balance = await tokenContract.methods.balanceOf(onChainWalletDetails.account).call();
            onChainWalletDetails.setTokenBalance(balance);
        }
        catch (err) {
            throw new Error(err);
        }
    };
    const setOnChainWalletBalance = async () => {
        if (!onChainWalletContract || !onChainWalletDetails.account)
            return;
        try {
            const balance = await onChainWalletContract.methods.getBalance().call();
            onChainWalletDetails.setBalance(balance.toString());
        }
        catch (err) {
            throw new Error(err);
        }
    };
    const setWalletEthBalance = async () => {
        if (!account)
            return;
        try {
            const balance = await library?.eth.getBalance(account);
            wallet.setBalance(balance);
        }
        catch (err) {
            throw new Error(err);
        }
    };
    const __setWalletEthBalance = useRef(setWalletEthBalance);
    const __setWalletTokenBalance = useRef(setWalletTokenBalance);
    const __setOnChainWalletBalance = useRef(setOnChainWalletBalance);
    const __setOnChainWalletTokenBalance = useRef(setOnChainWalletTokenBalance);
    React.useEffect(() => {
        const walletBalanceCmd = __walletBalanceCmd.current;
        const setWalletEthBalance = __setWalletEthBalance.current;
        if (!walletBalanceCmd.is.ready || walletBalanceCmd.is.running)
            return;
        const getBalanceAsync = async () => {
            try {
                walletBalanceCmd.start();
                await setWalletEthBalance();
                walletBalanceCmd.done();
            }
            catch (e) {
                walletBalanceCmd.failed({ message: e.message });
            }
        };
        getBalanceAsync();
    }, [wallet.balanceCmd.is.ready]);
    React.useEffect(() => {
        const onChainBalanceCmd = __onChainWalletBalanceCmd.current;
        const setOnChainWalletBalance = __setOnChainWalletBalance.current;
        if (!onChainBalanceCmd.is.ready || onChainBalanceCmd.is.running)
            return;
        const getBalanceAsync = async () => {
            try {
                onChainBalanceCmd.start();
                await setOnChainWalletBalance();
                onChainBalanceCmd.done();
            }
            catch (e) {
                onChainBalanceCmd.failed({ message: e.message });
            }
        };
        getBalanceAsync();
    }, [onChainWalletDetails.balanceCmd.is.ready]);
    React.useEffect(() => {
        const walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        const setWalletTokenBalance = __setWalletTokenBalance.current;
        if (!walletTokenBalanceCmd.is.ready || walletTokenBalanceCmd.is.running)
            return;
        const getBalanceAsync = async () => {
            try {
                walletTokenBalanceCmd.start();
                await setWalletTokenBalance();
                walletTokenBalanceCmd.done();
            }
            catch (e) {
                walletTokenBalanceCmd.failed({ message: e.message });
            }
        };
        getBalanceAsync();
    }, [wallet.tokenBalanceCmd.is.ready]);
    React.useEffect(() => {
        const onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        const setOnChainWalletTokenBalance = __setOnChainWalletTokenBalance.current;
        if (!onChainWalletTokenBalanceCmd.is.ready || onChainWalletTokenBalanceCmd.is.running)
            return;
        const getBalanceAsync = async () => {
            try {
                onChainWalletTokenBalanceCmd.start();
                await setOnChainWalletTokenBalance();
                onChainWalletTokenBalanceCmd.done();
            }
            catch (e) {
                onChainWalletTokenBalanceCmd.failed({ message: e.message });
            }
        };
        getBalanceAsync();
    }, [onChainWalletDetails.tokenBalanceCmd.is.ready]);
    const setAllBalances = async () => {
        wallet.balanceCmd.prepare();
        onChainWalletDetails.balanceCmd.prepare();
        wallet.tokenBalanceCmd.prepare();
        onChainWalletDetails.tokenBalanceCmd.prepare();
    };
    const __setAllBalances = useRef(setAllBalances);
    const successTransactions = transactions.items.filter(trx => trx.state === 'success');
    const prevBlock = usePrevious(block);
    React.useEffect(() => {
        const block = __block.current;
        const setAllBalances = __setAllBalances.current;
        const updateRate = __updateRate.current;
        if (!prevBlock || !block)
            return;
        if (block === prevBlock)
            return;
        updateRate();
        setAllBalances();
    }, [block, prevBlock]);
    const prevChainId = usePrevious(chainId);
    React.useEffect(() => {
        const setAllBalances = __setAllBalances.current;
        const updateRate = __updateRate.current;
        const wallet = __wallet.current;
        if (!prevChainId)
            return;
        if (prevChainId === chainId)
            return;
        if (chainId === "notSupportedChainId") {
            wallet.setBalance('0');
            wallet.setBalanceInUsd('0');
            wallet.setTokenBalance('0');
            return;
        }
        updateRate();
        setAllBalances();
    }, [chainId, prevChainId, onChain.tokenContract]);
    React.useEffect(() => {
        const setAllBalances = __setAllBalances.current;
        if (!successTransactions.length)
            return;
        setAllBalances();
    }, [successTransactions.length]);
    React.useEffect(() => {
        if (!wallet.createWalletCmd.is.done)
            return;
        const balanceCmd = __walletBalanceCmd.current;
        balanceCmd.prepare();
    }, [wallet.createWalletCmd.is.done]);
    React.useEffect(() => {
        if (!onChainWalletDetails.createWalletCmd.is.done)
            return;
        const onChainWalletBalanceCmd = __onChainWalletBalanceCmd.current;
        onChainWalletBalanceCmd.prepare();
    }, [onChainWalletDetails.createWalletCmd.is.done]);
    React.useEffect(() => {
        if (!onChain.tokenContract)
            return;
        const walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        walletTokenBalanceCmd.prepare();
    }, [onChain.tokenContract]);
    React.useEffect(() => {
        if (!onChainWalletDetails.createTokenWalletCmd.is.done)
            return;
        const onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        onChainWalletTokenBalanceCmd.prepare();
    }, [onChainWalletDetails.createTokenWalletCmd.is.done]);
    const prevToken = usePrevious(tokens.token);
    React.useEffect(() => {
        if (prevToken === tokens.token)
            return;
        const walletAccount = __walletAccount.current;
        if (!walletAccount)
            return;
        const walletTokenBalanceCmd = __walletTokenBalanceCmd.current;
        walletTokenBalanceCmd.prepare();
        const onChainWalletDetailsAccount = __onChainWalletDetailsAccount.current;
        if (!onChainWalletDetailsAccount)
            return;
        const onChainWalletTokenBalanceCmd = __onChainWalletTokenBalanceCmd.current;
        onChainWalletTokenBalanceCmd.prepare();
    }, [tokens.token, prevToken]);
};
