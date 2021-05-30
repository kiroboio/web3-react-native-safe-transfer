import { useEffect } from 'react';
import { useAccount, useContract } from '..';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { useProcessTransactions } from '../hooks/useProcessTransactions';
const useBackup = () => {
    const { onChainWalletDetails, transactions, backup, wallet } = useAccount();
    const { sendTransaction } = useProcessTransactions();
    const { createTransaction } = transactions;
    const { walletContract } = useContract();
    const { updateBackupDataCmd, startTimerCmd, acceptCmd, removeCmd, rejectCmd, createCmd, resetTimerCmd, activateByTimerCmd, state } = backup;
    const { claimOwnershipCmd } = onChainWalletDetails;
    const onChainWalletAccount = onChainWalletDetails.account;
    const onChainWalletContract = walletContract;
    const backupEvents = [
        'BackupActivated',
        'BackupChanged',
        'BackupEnabled',
        'BackupPayment',
        'BackupRegistered',
        'BackupRemoved',
        'OwnershipReclaimed',
        'OwnershipTransferred'
    ];
    const removeBackup = async () => {
        if (!onChainWalletContract)
            return;
        const trxRequest = {
            to: onChainWalletAccount,
            from: wallet.account,
            value: '0',
            type: 'REMOVE BACKUP',
        };
        trxRequest.data = onChainWalletContract.methods.removeBackup().encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    };
    const createBackup = async () => {
        const { address, formTimeout } = backup;
        if (!onChainWalletContract)
            return;
        const trxRequest = {
            to: onChainWalletAccount,
            type: 'SET BACKUP',
            from: wallet.account,
            value: '0',
        };
        const setBackup = onChainWalletContract.methods.setBackup(address, formTimeout);
        trxRequest.data = setBackup.encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    };
    const backupStates = ['PENDING', 'REGISTERED', 'ENABLED', 'ACTIVATED'];
    const GET_BACKUP_DATA_METHODS = [
        {
            name: 'getBackupState',
            setter: (stateIndex) => backup.setState(backupStates[Number(stateIndex)]),
        },
        { name: 'getBackupWallet', setter: backup.setWalletAddress },
        { name: 'owner', setter: backup.setOwnerAddress },
        { name: 'isOwner', setter: backup.setIsOwner },
        { name: 'getBackupTimeout', setter: backup.setTimeout },
        { name: 'getBackupTimestamp', setter: backup.setTimestamp },
    ];
    const updateBackupData = async () => {
        if (!onChainWalletContract)
            return;
        await Promise.all(GET_BACKUP_DATA_METHODS.map(async (method) => {
            const someData = await onChainWalletContract.methods[method.name]().call();
            method.setter(someData);
        }));
    };
    const __backupEvents = useRef(backupEvents);
    const __createBackup = useRef(createBackup);
    const __updateBackupData = useRef(updateBackupData);
    const __updateBackupDataCmd = useRef(updateBackupDataCmd);
    const __startTimerCmd = useRef(startTimerCmd);
    const __acceptCmd = useRef(acceptCmd);
    const __createCmd = useRef(createCmd);
    const __removeCmd = useRef(removeCmd);
    const __rejectCmd = useRef(rejectCmd);
    const __resetTimerCmd = useRef(resetTimerCmd);
    const __claimOwnershipCmd = useRef(claimOwnershipCmd);
    const __activateByTimerCmd = useRef(activateByTimerCmd);
    useEffect(() => {
        const updateBackupData = __updateBackupData.current;
        const backupEvents = __backupEvents.current;
        if (!walletContract)
            return;
        walletContract.events
            .allEvents()
            .on('data', (e) => {
            const backupEvent = e;
            if (!backupEvents.includes(backupEvent.event))
                return;
            updateBackupData();
        })
            .on('error', (e) => {
            const backupEvent = e;
            if (!backupEvents.includes(backupEvent.event))
                return;
            updateBackupData();
        });
    }, [walletContract]);
    useEffect(() => {
        const activateByTimerCmd = __activateByTimerCmd.current;
        if (!activateByTimerCmd.is.ready || activateByTimerCmd.is.running)
            return;
        activateByTimerCmd.start();
    }, [activateByTimerCmd.is.ready]);
    useEffect(() => {
        const activateByTimerCmd = __activateByTimerCmd.current;
        activateByTimerCmd.done();
    }, [state]);
    async function approveBackup() {
        if (!onChainWalletContract)
            return;
        const trxRequest = {
            from: wallet.account,
            to: onChainWalletAccount,
            type: 'SET BACKUP',
            value: '0',
        };
        trxRequest.data = onChainWalletContract.methods.accept().encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    }
    async function rejectBackup() {
        if (!onChainWalletContract)
            return;
        let trxRequest = {
            to: onChainWalletAccount,
            type: 'DECLINE BACKUP',
        };
        trxRequest = onChainWalletContract.methods.decline().encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    }
    async function resetBackupTimer() {
        if (!onChainWalletContract)
            return;
        const { walletAddress, timeout } = backup;
        const trxRequest = {
            to: onChainWalletAccount,
            type: 'RESET BACKUP TIMER',
        };
        trxRequest.data = onChainWalletContract.methods.setBackup(walletAddress, timeout).encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    }
    const startBackupTimer = async () => {
        if (!onChainWalletContract)
            return;
        const trxRequest = {
            to: onChainWalletAccount,
            from: wallet.account,
            type: 'START TIMER',
            value: '0',
        };
        trxRequest.data = await onChainWalletContract.methods.enable().encodeABI();
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    };
    const __startBackupTimer = useRef(startBackupTimer);
    useEffect(() => {
        const startTimerCmd = __startTimerCmd.current;
        const startBackupTimer = __startBackupTimer.current;
        const startBackupTimerAsync = async () => {
            if (!startTimerCmd.is.ready || startTimerCmd.is.running)
                return;
            try {
                startTimerCmd.start();
                await startBackupTimer();
                startTimerCmd.done();
            }
            catch (e) {
                startTimerCmd.failed({ message: e.message });
            }
        };
        startBackupTimerAsync();
    }, [startTimerCmd.is.ready]);
    useEffect(() => {
        const startTimerCmd = __startTimerCmd.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!startTimerCmd.is.done || startTimerCmd.is.running)
            return;
        updateBackupDataCmd.prepare();
    }, [startTimerCmd.is.done]);
    useEffect(() => {
        const createCmd = __createCmd.current;
        const createBackup = __createBackup.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        const createBackupAsync = async () => {
            if (!createCmd.is.ready || createCmd.is.running)
                return;
            try {
                createCmd.start();
                await createBackup();
                createCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                createCmd.failed({ message: e.message });
            }
        };
        createBackupAsync();
    }, [createCmd.is.ready]);
    useEffect(() => {
        const updateBackupData = __updateBackupData.current;
        if (!walletContract) {
            return;
        }
        updateBackupData();
    }, [walletContract]);
    const __removeBackup = useRef(removeBackup);
    useEffect(() => {
        const removeCmd = __removeCmd.current;
        const removeBackup = __removeBackup.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!removeCmd.is.ready || removeCmd.is.running)
            return;
        const removeBackupAsync = async () => {
            try {
                removeCmd.start();
                await removeBackup();
                removeCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                removeCmd.failed({ message: e.message });
            }
        };
        removeBackupAsync();
    }, [removeCmd.is.ready]);
    const __rejectBackup = useRef(rejectBackup);
    useEffect(() => {
        const rejectCmd = __rejectCmd.current;
        const rejectBackup = __rejectBackup.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!rejectCmd.is.ready || rejectCmd.is.running)
            return;
        const rejectBackupAsync = async () => {
            try {
                rejectCmd.start();
                await rejectBackup();
                rejectCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                rejectCmd.failed({ message: e.message });
            }
        };
        rejectBackupAsync();
    }, [rejectCmd.is.ready]);
    const __resetBackupTimer = useRef(resetBackupTimer);
    useEffect(() => {
        const resetTimerCmd = __resetTimerCmd.current;
        const resetBackupTimer = __resetBackupTimer.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!resetTimerCmd.is.ready || resetTimerCmd.is.running)
            return;
        const resetBackupAsync = async () => {
            try {
                resetTimerCmd.start();
                await resetBackupTimer();
                resetTimerCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                resetTimerCmd.failed({ message: e.message });
            }
        };
        resetBackupAsync();
    }, [resetTimerCmd.is.ready]);
    const __approveBackup = useRef(approveBackup);
    useEffect(() => {
        const acceptCmd = __acceptCmd.current;
        const approveBackup = __approveBackup.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!acceptCmd.is.ready || acceptCmd.is.running)
            return;
        const approveBackupAsync = async () => {
            try {
                acceptCmd.start();
                await approveBackup();
                acceptCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                acceptCmd.failed({ message: e.message });
            }
        };
        approveBackupAsync();
    }, [acceptCmd.is.ready]);
    useEffect(() => {
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        const updateBackupData = __updateBackupData.current;
        if (!updateBackupDataCmd.is.ready || updateBackupDataCmd.is.running)
            return;
        const approveBackupAsync = async () => {
            try {
                updateBackupDataCmd.start();
                await updateBackupData();
                updateBackupDataCmd.done();
            }
            catch (e) {
                updateBackupDataCmd.failed({ message: e.message });
            }
        };
        approveBackupAsync();
    }, [updateBackupDataCmd.is.ready]);
    async function claimReclaimOwnership(type) {
        if (!onChainWalletContract)
            return;
        onChainWalletContract.methods.claimOwnership().encodeABI();
        const trxRequest = {
            to: onChainWalletAccount,
            type,
        };
        if (backup.isBackup(wallet.account)) {
            trxRequest.data = onChainWalletContract.methods.claimOwnership().encodeABI();
        }
        else {
            trxRequest.data = onChainWalletContract.methods.reclaimOwnership().encodeABI();
        }
        const trx = createTransaction(trxRequest);
        await sendTransaction(trx);
    }
    const __claimReclaimOwnership = useRef(claimReclaimOwnership);
    useEffect(() => {
        const claimOwnershipCmd = __claimOwnershipCmd.current;
        const claimReclaimOwnership = __claimReclaimOwnership.current;
        const updateBackupDataCmd = __updateBackupDataCmd.current;
        if (!claimOwnershipCmd.is.ready || claimOwnershipCmd.is.running)
            return;
        const claimReclaimOwnershipAsync = async () => {
            try {
                claimOwnershipCmd.start();
                await claimReclaimOwnership('CLAIM OWNERSHIP');
                claimOwnershipCmd.done();
                updateBackupDataCmd.prepare();
            }
            catch (e) {
                claimOwnershipCmd.failed({ message: e.message });
            }
        };
        claimReclaimOwnershipAsync();
    }, [claimOwnershipCmd.is.ready]);
};
export { useBackup };
