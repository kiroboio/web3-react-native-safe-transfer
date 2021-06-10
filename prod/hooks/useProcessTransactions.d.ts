import { ITransaction } from "../stores/account";
/**
 * ### usage:
 * ```
 * const { transactions } = useAccount();
 * const { createTransaction } = transactions;
 * const { sendTransaction } = useProcessTransactions();
 *
 * const trx = createTransaction(trxRequest);
 * await sendTransaction(trx);
 * ```
 * @returns ```{ sendTransaction, sendTokenTransaction, sendOnChainTokenTransaction }```
 */
declare const useProcessTransactions: () => {
    sendTransaction: (trx: ITransaction) => Promise<void>;
    sendTokenTransaction: (transaction: ITransaction) => Promise<void>;
    sendOnChainTokenTransaction: (transaction: ITransaction) => Promise<void>;
};
export { useProcessTransactions };
