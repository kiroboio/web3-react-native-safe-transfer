import { useEffect } from 'react';
import { useAccount, useContract } from '../';
import { usePrevious } from '../hooks/usePrevious';
import { useCurrentMutableState as useRef } from '../hooks/useCurrentMutableState';
import { ITransaction } from '../stores/account';
import { useProcessTransactions } from './useProcessTransactions';

const parseHeir = (heir: string) => {
  const ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';

  if (heir === ZERO_BYTES32) {
    return null;
  }

  return {
    walletAddress: heir.slice(0, 42),
    isSent: heir.slice(42, 44) !== '00' ? true : false,
    percent: parseInt(heir.slice(44, 48), 16) / 100,
    isRegistered: true,
  };
};

const useInheritance = () => {
  const { transactions, onChainWalletDetails, inheritance, wallet } = useAccount();
  const { sendTransaction } = useProcessTransactions();
  const { createTransaction } = transactions;
  const {
    isActivated,
    isEnabled,
    heirs,
    setHeirsCmd,
    setInheritanceCmd,
    clearInheritanceCmd,
    updateHeirsCmd,
    activateCmd,
    activateByTimerCmd,
  } = inheritance;

  const { walletContract } = useContract();

  const INHERITANCE_DATA_METHODS = [
    { getter: 'getHeirs', setter: inheritance.addHeir },
    { getter: 'getInheritanceTimestamp', setter: inheritance.setTimestamp },
    { getter: 'getInheritanceTimeout', setter: inheritance.setTimeout },
    { getter: 'isInheritanceActivated', setter: inheritance.setIsActivated },
    { getter: 'getTotalTransfered', setter: inheritance.setTotalTransferred },
  ] as const;

  async function setHeirs() {
    const { addresses, bps } = heirs.reduce(
      function (
        acc: {
          addresses: string[];
          bps: number[];
        },
        heir
      ) {
        acc.addresses.push(heir.walletAddress);
        acc.bps.push(heir.percent * 100);
        return acc;
      },
      { addresses: [], bps: [] }
    );

    if (!walletContract) return;
    const trxRequest: Partial<ITransaction> = {
      from: wallet.account,
      to: onChainWalletDetails.account,
      type: 'SET HEIRS',
    };

    trxRequest.data = await walletContract.methods.setHeirs(addresses, bps).encodeABI();

    const trx = createTransaction(trxRequest);
    await sendTransaction(trx);
  }

  async function setInheritance() {
    if (!walletContract) return;
    const trxRequest: Partial<ITransaction> = {
      to: onChainWalletDetails.account,
      type: 'ENABLE INHERITANCE',
    };
    const seconds = inheritance.timeLeftCurrent;
    trxRequest.data = await walletContract.methods.setInheritance(seconds).encodeABI();

    const trx = createTransaction(trxRequest);
    await sendTransaction(trx);
  }

  const activateInheritance = async () => {
    if (!walletContract) return;
    const trxRequest: Partial<ITransaction> = {
      to: onChainWalletDetails.account,
      type: 'ENABLE INHERITANCE',
    };

    trxRequest.data = await walletContract.methods.activateInheritance().encodeABI();

    const trx = createTransaction(trxRequest);
    await sendTransaction(trx);
  };

  async function clearInheritance() {
    if (!walletContract) return;
    const trxRequest: Partial<ITransaction> = {
      to: onChainWalletDetails.account,
      type: 'DISABLE INHERITANCE',
    };

    trxRequest.data = walletContract.methods.clearInheritance().encodeABI();

    const trx = createTransaction(trxRequest);
    await sendTransaction(trx);
  }

  let prevHeirsData = usePrevious<string[]>([]);

  const updateCurrentHeirs = async () => {
    if (!walletContract) return;
    try {
      await Promise.all(
        INHERITANCE_DATA_METHODS.map(async method => {
          const data = await walletContract.methods[method.getter]().call();
          if (method.getter === 'getHeirs') {
            if (
              !prevHeirsData ||
              (prevHeirsData &&
                Boolean(
                  data.find((item: string, i: number) => {
                    const prevData = prevHeirsData as string[];
                    return item !== prevData[i];
                  })
                ))
            ) {
              inheritance.clear();
              data.forEach((heir: string) => {
                const parsedHeir = parseHeir(heir);
                if (!parsedHeir) return;
                method.setter(parsedHeir, true);
              });

              prevHeirsData = data;
            }
          } else {
            const setter = method.setter as (arg: string | boolean) => void;
            setter(data);
          }
        })
      );
    } catch (e) {
      updateHeirsCmd.failed({ message: e.message})
    }
  };

  const inheritanceEvents = [
    'InheritanceActivated',
    'InheritanceChanged',
    'InheritanceHeirsChanged',
    'InheritancePayment',
    'InheritanceRemoved',
  ];

  const __inheritanceEvents = useRef(inheritanceEvents);
  const __updateCurrentHeirs = useRef(updateCurrentHeirs);
  const __inheritance = useRef(inheritance);
  const __setHeirs = useRef(setHeirs);
  const __setHeirsCmd = useRef(setHeirsCmd);
  const __updateHeirsCmd = useRef(updateHeirsCmd);
  const __setInheritanceCmd = useRef(setInheritanceCmd);
  const __setInheritance = useRef(setInheritance);
  const __clearInheritanceCmd = useRef(clearInheritanceCmd);
  const __clearInheritance = useRef(clearInheritance);
  const __activateByTimerCmd = useRef(activateByTimerCmd);
  const __activateCmd = useRef(activateCmd);
  const __activateInheritance = useRef(activateInheritance);

  useEffect(() => {
    const updateCurrentHeirs = __updateCurrentHeirs.current;
    const inheritanceEvents = __inheritanceEvents.current
    if (!walletContract) return;

    walletContract.events
      .allEvents()
      .on('data', (e: unknown) => {
        const inheritanceEvent = e as { event: string };
        if (!inheritanceEvents.includes(inheritanceEvent.event)) return;
        updateCurrentHeirs();
      })
      .on('error', (e: unknown) => {
        const inheritanceEvent = e as { event: string };
        if (!inheritanceEvents.includes(inheritanceEvent.event)) return;
        updateCurrentHeirs();
      });
  }, [walletContract]);

  useEffect(() => {
    if (!inheritance.timestamp || !inheritance.timeout) return;
  }, [inheritance.timestamp, inheritance.timeout]);

  useEffect(() => {
    const updateCurrentHeirs = __updateCurrentHeirs.current;
    const inheritance = __inheritance.current;

    if (!walletContract) {
      inheritance.clear();
      return;
    }

    updateCurrentHeirs();
  }, [walletContract]);

  useEffect(() => {
    const inheritance = __inheritance.current;
    const setHeirs = __setHeirs.current;
    const setHeirsCmd = __setHeirsCmd.current;
    const updateHeirsCmd = __updateHeirsCmd.current;

    if (!setHeirsCmd.is.ready || setHeirsCmd.is.running) return;
    const setHeirsAsync = async () => {
      try {
        setHeirsCmd.start();
        await setHeirs();
        setHeirsCmd.done();
        inheritance.saveChanges();
        updateHeirsCmd.prepare();
      } catch (e) {
        setHeirsCmd.failed({ message: e.message });
      }
    };
    setHeirsAsync();
  }, [setHeirsCmd.is.ready]);

  useEffect(() => {
    const setInheritanceCmd = __setInheritanceCmd.current;
    const setInheritance = __setInheritance.current;
    const updateHeirsCmd = __updateHeirsCmd.current;

    if (!setInheritanceCmd.is.ready || setInheritanceCmd.is.running) return;
    const setInheritanceAsync = async () => {
      try {
        setInheritanceCmd.start();
        await setInheritance();
        setInheritanceCmd.done();
        updateHeirsCmd.prepare();
      } catch (e) {
        setInheritanceCmd.failed({ message: e.message });
      }
    };

    setInheritanceAsync();
  }, [setInheritanceCmd.is.ready]);

  useEffect(() => {
    const clearInheritanceCmd = __clearInheritanceCmd.current;
    const clearInheritance = __clearInheritance.current;
    const updateHeirsCmd = __updateHeirsCmd.current;

    if (!clearInheritanceCmd.is.ready || clearInheritanceCmd.is.running) return;
    const clearInheritanceAsync = async () => {
      try {
        clearInheritanceCmd.start();
        await clearInheritance();
        clearInheritanceCmd.done();
        updateHeirsCmd.prepare();
      } catch (e) {
        clearInheritanceCmd.failed({ message: e.message });
      }
    };
    clearInheritanceAsync();
  }, [clearInheritanceCmd.is.ready]);

  useEffect(() => {
    const activateByTimerCmd = __activateByTimerCmd.current;

    if (!activateByTimerCmd.is.ready || activateByTimerCmd.is.running) return;
    activateByTimerCmd.start();
  }, [activateByTimerCmd.is.ready]);

  useEffect(() => {
    const activateByTimerCmd = __activateByTimerCmd.current;

    if (!isActivated) return;
    activateByTimerCmd.done();
  }, [isActivated]);

  useEffect(() => {
    const activateByTimerCmd = __activateByTimerCmd.current;

    if (!isEnabled) return;
    activateByTimerCmd.done();
  }, [isEnabled]);

  useEffect(() => {
    const updateHeirsCmd = __updateHeirsCmd.current;
    const activateCmd = __activateCmd.current;
    const activateInheritance = __activateInheritance.current;

    if (!activateCmd.is.ready || activateCmd.is.running) return;
    const activateInheritanceAsync = async () => {
      try {
        activateCmd.start();
        await activateInheritance();
        activateCmd.done();
        updateHeirsCmd.prepare();
      } catch (e) {
        activateCmd.failed({ message: e.message });
      }
    };
    activateInheritanceAsync();
  }, [activateCmd.is.ready]);

  useEffect(() => {
    const updateHeirsCmd = __updateHeirsCmd.current;
    const updateCurrentHeirs = __updateCurrentHeirs.current;

    if (!updateHeirsCmd.is.ready || updateHeirsCmd.is.running) return;
    const updateHeirsCmdAsync = async () => {
      try {
        updateHeirsCmd.start();
        await updateCurrentHeirs();
        updateHeirsCmd.done();
      } catch (e) {
        updateHeirsCmd.failed({ message: e.message });
      }
    };
    updateHeirsCmdAsync();
  }, [updateHeirsCmd.is.ready]);
};

export { useInheritance };
