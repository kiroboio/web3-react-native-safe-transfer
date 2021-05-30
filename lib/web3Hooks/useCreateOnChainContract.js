import { useEffect } from 'react';
import { useAccount, useContract } from '..';
import { useProcessTransactions } from '../hooks/useProcessTransactions';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
function useCreateOnChainContract() {
    const { transactions, onChainWalletDetails, wallet } = useAccount();
    const { createWalletTransactionCmd } = onChainWalletDetails;
    const { sendTransaction } = useProcessTransactions();
    const { contract } = useContract();
    const createWallet = async () => {
        if (!contract)
            return;
        const createContract = contract.methods.createWallet(wallet.account);
        const data = createContract.encodeABI();
        let estimatedGas = 0;
        try {
            estimatedGas = await createContract.estimateGas({ to: wallet.account, data });
        }
        catch (e) {
            throw new Error('gas estimation failed');
        }
        const trx = transactions.createTransaction({
            to: contract.options.address,
            gas: estimatedGas,
            data: data,
            type: 'CREATE SMART WALLET',
        });
        await sendTransaction(trx);
    };
    const __createWalletTransactionCmd = useRef(createWalletTransactionCmd);
    const __createWallet = useRef(createWallet);
    useEffect(() => {
        const createWalletTransactionCmd = __createWalletTransactionCmd.current;
        const createWallet = __createWallet.current;
        if (!createWalletTransactionCmd.is.ready ||
            createWalletTransactionCmd.is.running)
            return;
        const createWalletAsync = async () => {
            try {
                createWalletTransactionCmd.start();
                await createWallet();
                createWalletTransactionCmd.done();
            }
            catch (e) {
                createWalletTransactionCmd.failed({ message: e.message });
            }
        };
        createWalletAsync();
    }, [createWalletTransactionCmd.is.ready]);
}
export { useCreateOnChainContract };
