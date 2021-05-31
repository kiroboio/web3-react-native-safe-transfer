import { ITransaction } from "../stores/account";
declare const useProcessTransactions: () => {
    sendTransaction: (trx: ITransaction) => Promise<void>;
    sendTokenTransaction: (transaction: ITransaction) => Promise<void>;
    sendOnChainTokenTransaction: (transaction: ITransaction) => Promise<void>;
};
export { useProcessTransactions };
