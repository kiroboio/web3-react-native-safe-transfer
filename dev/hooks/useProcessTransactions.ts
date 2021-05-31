import { toWei } from "web3-utils";
import { useAccount, useContract } from "..";
import {
  ITransaction,
  ITransactionReceipt,
  tokens as tokensConfig,
} from "../stores/account";
import { useWeb3 } from "./useWeb3";
import { toJS } from "mobx";

const useProcessTransactions = () => {
  const web3Connect = useWeb3();
  const onChain = useContract();
  const onChainWalletContract = onChain.walletContract;
  const tokensContract = onChain.tokenContract;

  const { transactions, tokens, wallet, chainId } = useAccount();
  const selectedToken = tokens.token;

  const sendTransaction = async (trx: ITransaction) => {
    trx.transactionCmd.start();
    const currentTransaction = { ...trx };
    if (!currentTransaction.valueToDisplay)
      currentTransaction.valueToDisplay = currentTransaction.value;

    currentTransaction.value = toWei(currentTransaction.value);
    currentTransaction.gas = currentTransaction.gas * 2;
    if (!currentTransaction.from && web3Connect.address)
      currentTransaction.from = web3Connect.address;
    const { from, to, value, data } = currentTransaction;
    const web3TransactionSendData: {
      from: string;
      value?: string;
      data?: string;
      gas?: number;
      to?: string;
      nonce?: number;
    } = { from };

    const nonce = await web3Connect.library.eth.getTransactionCount(
      from,
      "pending"
    );

    if (value) web3TransactionSendData.value = value;
    if (data) web3TransactionSendData.data = data;
    if (to) web3TransactionSendData.to = to;
    if (nonce) web3TransactionSendData.nonce = nonce;

    try {
      web3TransactionSendData.gas =
        (await web3Connect.library.eth.estimateGas(web3TransactionSendData)) *
        2;
    } catch (e) {
      web3TransactionSendData.gas = 40000;
    }

    await new Promise((resolve, reject) => {
      web3Connect.library.eth
        .sendTransaction(web3TransactionSendData)
        .on("transactionHash", (txHash: string) => {
          currentTransaction.txHash = txHash;
          currentTransaction.timestamp = new Date();
          transactions.updateTransactionRequest(
            currentTransaction.id,
            currentTransaction
          );
        })
        .on("receipt", (receipt) => {
          const tReceipt = receipt as unknown as ITransactionReceipt;
          if (!tReceipt.status) {
            reject("Transaction failed");
          }
          transactions.updateTransactionReceipt(
            currentTransaction.id,
            tReceipt
          );
          trx?.transactionCmd.done();
          resolve(transactions);
        })
        .on("error", (err: Error) => {
          trx.transactionCmd.failed({ message: err.message });
          reject(err);
        });
    });
  };

  const sendTokenTransaction = async (transaction: ITransaction) => {
    try {
      transaction.transactionCmd.start();
      const currentTransaction = { ...toJS(transaction) };
      let gas;
      try {
        gas =
          (await web3Connect.library.eth.estimateGas(currentTransaction)) * 4;
      } catch (e) {
        gas = 100000;
      }
      const nonce = await web3Connect.library.eth.getTransactionCount(
        wallet.account,
        "pending"
      );

      const txHash = await tokensContract?.methods
        .transfer(currentTransaction.to, currentTransaction.valueInWei)
        .send({ from: wallet.account, gas, nonce });

      currentTransaction.txHash = txHash;
      currentTransaction.timestamp = new Date();

      transactions.updateTransactionRequest(
        currentTransaction.id,
        currentTransaction
      );
      const receipt = (await web3Connect.library?.eth?.getTransactionReceipt(
        txHash.transactionHash
      )) as unknown as ITransactionReceipt;
      currentTransaction.receipt = receipt;

      if (!receipt?.status) {
        transaction?.transactionCmd.failed({ message: "Transaction failed" });
      }

      transactions.updateTransactionReceipt(currentTransaction.id, receipt);

      transaction?.transactionCmd.done();
    } catch (e) {
      transaction?.transactionCmd.failed({ message: e.message });
    }
  };

  const sendOnChainTokenTransaction = async (transaction: ITransaction) => {
    try {
      transaction.transactionCmd.start();

      const currentTransaction = { ...toJS(transaction) };
      let gas;
      try {
        gas =
          (await web3Connect.library.eth.estimateGas(currentTransaction)) * 4;
      } catch (e) {
        gas = 100000;
      }
      const nonce = await web3Connect.library.eth.getTransactionCount(
        wallet.account,
        "pending"
      );
      const txHash = await onChainWalletContract?.methods
        .transfer20(
          tokensConfig[selectedToken].address[chainId],
          currentTransaction.to,
          currentTransaction.valueInWei
        )
        .send({ from: wallet.account, gas, nonce });

      currentTransaction.txHash = txHash;
      currentTransaction.timestamp = new Date();

      try {
        currentTransaction.gas = await web3Connect.library.eth.estimateGas(
          currentTransaction
        );
      } catch (e) {
        currentTransaction.gas = 100000;
      }

      transactions.updateTransactionRequest(
        currentTransaction.id,
        currentTransaction
      );
      const receipt = (await web3Connect.library?.eth?.getTransactionReceipt(
        txHash.transactionHash
      )) as unknown as ITransactionReceipt;

      currentTransaction.receipt = receipt;

      if (!receipt?.status) {
        transaction?.transactionCmd.failed({ message: "Transaction failed" });
      }

      transactions.updateTransactionRequest(
        currentTransaction.id,
        currentTransaction
      );
      transactions.updateTransactionReceipt(currentTransaction.id, receipt);

      transaction?.transactionCmd.done();
    } catch (e) {
      transaction?.transactionCmd.failed({ message: e.message });
    }
  };

  return { sendTransaction, sendTokenTransaction, sendOnChainTokenTransaction };
};

export { useProcessTransactions };
