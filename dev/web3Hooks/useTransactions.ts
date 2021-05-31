import { toWei } from "web3-utils";
import { useAccount, useContract } from "..";
import { useEffect } from "react";
import { useProcessTransactions } from "../hooks/useProcessTransactions";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";

function useTransactions() {
  const { transactions, transfer, onChainWalletDetails, wallet, tokens } =
    useAccount();
  const { sendCmd, sendTokenCmd } = transfer;
  const { sendTransaction, sendTokenTransaction, sendOnChainTokenTransaction } =
    useProcessTransactions();
  const contract = useContract();
  const onChainWalletContract = contract.walletContract;

  type SendTransactionParams = {
    to: string;
    from: string;
    value: string;
  };

  const __sendCmd = useRef(sendCmd);
  const __sendTokenCmd = useRef(sendTokenCmd);
  const __transfer = useRef(transfer);

  async function createTransactionFromOnChainWallet(
    transaction: SendTransactionParams
  ) {
    const valueInWei = toWei(String(transaction.value));

    const sendEther = onChainWalletContract?.methods.sendEther(
      transaction.to,
      valueInWei
    );
    const data = sendEther.encodeABI();
    const trx = transactions.createTransaction({
      to: onChainWalletDetails.account,
      from: wallet.account,
      valueToDisplay: `${transaction.value} ETH`,
      valueInWei: valueInWei,
      value: "0",
      data,
      type: "VALUE TRANSFER",
      wallet: "onChain",
    });

    await sendTransaction(trx);
  }

  const createTokenTransaction = async (transaction: SendTransactionParams) => {
    const trx = transactions.createTransaction({
      to: transaction.to,
      from: transaction.from,
      value: transaction.value || "0",
      valueToDisplay: `${transaction.value} ${
        parseFloat(transaction.value) > 1 ? tokens.token + "'s" : tokens.token
      }`,
      valueInWei: toWei(transaction.value),
      type: "SEND TOKENS",
      wallet: transfer.wallet,
    });

    if (transfer.wallet === "onChain") {
      await sendOnChainTokenTransaction(trx);
    } else {
      await sendTokenTransaction(trx);
    }
  };

  async function createTransaction(transaction: SendTransactionParams) {
    const trx = transactions.createTransaction({
      to: transaction.to,
      from: transaction.from,
      value: transaction.value,
      valueToDisplay: `${transaction.value} ETH`,
      valueInWei: toWei(transaction.value),
      type: "VALUE TRANSFER",
      wallet: "regular",
    });

    await sendTransaction(trx);
  }

  const __createTransactionFromOnChainWallet = useRef(
    createTransactionFromOnChainWallet
  );
  const __createTransaction = useRef(createTransaction);
  const __createTokenTransaction = useRef(createTokenTransaction);

  useEffect(() => {
    const sendCmd = __sendCmd.current;
    const transfer = __transfer.current;
    const createTransactionFromOnChainWallet =
      __createTransactionFromOnChainWallet.current;
    const createTransaction = __createTransaction.current;

    const send = async () => {
      if (!sendCmd.is.ready || sendCmd.is.running) return;
      try {
        sendCmd.start();
        if (transfer.wallet === "onChain") {
          createTransactionFromOnChainWallet({
            to: transfer.to,
            from: transfer.from,
            value: transfer.amount,
          });
        } else {
          createTransaction({
            to: transfer.to,
            from: transfer.from,
            value: transfer.amount,
          });
        }
        sendCmd.done();
      } catch (e) {
        sendCmd.failed({ message: e.message });
      }
    };

    send();
  }, [sendCmd.is.ready]);

  useEffect(() => {
    const sendTokenCmd = __sendTokenCmd.current;
    const transfer = __transfer.current;
    const createTokenTransaction = __createTokenTransaction.current;

    const sendToken = async () => {
      if (sendTokenCmd.is.running || !sendTokenCmd.is.ready) return;
      try {
        sendTokenCmd.start();
        createTokenTransaction({
          to: transfer.to,
          from: transfer.from,
          value: transfer.amount,
        });
        sendTokenCmd.done();
      } catch (e) {
        sendTokenCmd.failed({ message: e.message });
      }
    };
    sendToken();
  }, [sendTokenCmd.is.ready]);

  return null;
}

export { useTransactions };
