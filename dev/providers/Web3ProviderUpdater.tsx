import React, { useEffect } from "react";
import { useAccount, useWeb3Provider } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { observer } from "mobx-react-lite";
import { Connectors } from "../hooks/useWeb3";
import "@metamask/detect-provider";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import {
  useRegularWallet,
  useBalances,
  useSetupOnChainContract,
  useTransactions,
  useBackup,
  useCreateOnChainContract,
  useInheritance,
} from "../web3Hooks";
import { AVAILABLE_RPC_URLS, ChainIds } from "../stores/account";
import { KiroboProps } from "./KiroboProvider";

export const Web3ProviderUpdater = observer(
  ({ children, customHooks }: KiroboProps) => {
    const {
      connect: web3Connect,
      disconnect: web3Disconnect,
      library: web3,
      active: web3Active,
      chainId: web3ChainId,
      address: web3Address,
    } = useWeb3();

    const { setActive, connectCmd, disconnectCmd, setChainId, setBlock } =
      useAccount();

    const { setBlock: setWeb3Block } = useWeb3Provider();

    const __connectCmd = useRef(connectCmd);
    const __disconnectCmd = useRef(disconnectCmd);
    const __web3 = useRef(web3);
    const __web3Connect = useRef(web3Connect);
    const __web3Disconnect = useRef(web3Disconnect);
    const __setActive = useRef(setActive);
    const __setChainId = useRef(setChainId);
    const __setWeb3Block = useRef(setWeb3Block);
    const __setBlock = useRef(setBlock);

    const hooks = [
      useRegularWallet,
      useBalances,
      useSetupOnChainContract,
      useTransactions,
      useBackup,
      useCreateOnChainContract,
      useInheritance,
    ];

    hooks.map((useHook) => {
      try {
        return useHook();
      } catch (e) {
        throw new Error(e);
      }
    });

    React.useEffect(() => {
      const setBlock = __setBlock.current;
      if (!web3) return;
      web3.eth
        .subscribe("newBlockHeaders")
        .on("data", (e) => {
          if (!e.number) return;
          setBlock(e.number);
        })
        .on("connected", async (e) => {
          const blockNumber = await web3.eth.getBlockNumber();
          setBlock(blockNumber);
        })
        .on("error", (e) => console.log("subscribe error", e));
    }, [web3, web3Address]);

    useEffect(() => {
      const web3Connect = __web3Connect.current;
      const connectCmd = __connectCmd.current;

      if (connectCmd.is.ready && !connectCmd.is.running) {
        connectCmd.start();
        web3Connect(connectCmd.connector as Connectors)
          .then(() => {
            connectCmd.done();
          })
          .catch((e) => {
            connectCmd.failed({ message: e ? JSON.stringify(e) : "failed" });
          });
      }
    }, [connectCmd.is.ready]);

    useEffect(() => {
      const web3Disconnect = __web3Disconnect.current;
      const disconnectCmd = __disconnectCmd.current;
      const connectCmd = __connectCmd.current;
      const web3 = __web3.current;

      if (disconnectCmd.is.ready && !disconnectCmd.is.running) {
        disconnectCmd.start();
        web3.eth.clearSubscriptions((e) =>
          console.log("clear subscription", e)
        );
        web3Disconnect();
        disconnectCmd.done();
        connectCmd.clearCmd();
      }
    }, [disconnectCmd.is.ready]);

    useEffect(() => {
      const web3 = __web3.current;
      const setActive = __setActive.current;
      const setChainId = __setChainId.current;

      setActive(web3Active);
      if (web3ChainId) {
        if (Object.keys(AVAILABLE_RPC_URLS).includes(web3ChainId.toString())) {
          setChainId(web3ChainId.toString() as ChainIds);
        } else {
          setChainId("notSupportedChainId");
        }
      }
      (async () => {
        if (web3Address) {
          const blockNumber = await web3.eth.getBlockNumber();
          __setWeb3Block.current(blockNumber);
        } else {
          __setWeb3Block.current(0);
        }
      })();

      if (web3 && web3Address) {
        web3.eth
          .subscribe("newBlockHeaders")
          .on("connected", async () => {
            const blockNumber = await web3.eth.getBlockNumber();
            __setWeb3Block.current(blockNumber);
          })
          .on("error", () => {
            __setWeb3Block.current(0);
          })
          .on("data", async (block: { number: number }) => {
            __setWeb3Block.current(block.number);
          });
      }
    }, [web3Address, web3ChainId, web3Active]);

    return <>{children}</>;
  }
);
