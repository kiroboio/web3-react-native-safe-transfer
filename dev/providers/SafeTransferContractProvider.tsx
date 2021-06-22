import React, { useContext, useEffect, useState } from "react";
import { Contract } from "web3-eth/node_modules/web3-eth-contract";
import Web3 from "web3";
import safeTransferABI from "../abi/safeTransfer.json";
import erc20ABI from "../abi/erc20.json";
import { AbiItem } from "web3-utils";
import { useWeb3 } from "../hooks";
import { useAccount } from "../context";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import KiroboService from "@kiroboio/safe-transfer-lib-lite";
import { getChainName } from "../web3Hooks/common";
import { UAParser } from "ua-parser-js";

export type SafeTransferContractState = {
  //safeTransferContract?: Contract;
  //erc20TokenContract?: Contract;
  safeTransferContractWeb3?: Contract;
  erc20TokenContractWeb3?: Contract;
  kiroboServiceStatus: boolean;
};

type SafeTransferContractAction = {
  payload?: Contract;
  type: "setSafeTransferContract" | "setErc20TokenContract" | "cleanContracts";
};

export type DispatchSafeTransferContract =
  React.Dispatch<SafeTransferContractAction>;

const initContract = {
  safeTransferContract: new new Web3().eth.Contract(
    safeTransferABI as AbiItem[]
  ),
  erc20TokenContract: new new Web3().eth.Contract(erc20ABI as AbiItem[]),
  kiroboServiceStatus: false,
};


const DispatchContext =
  React.createContext<((a: SafeTransferContractAction) => void) | undefined>(
    undefined
  );
const ContractContext =
  React.createContext<SafeTransferContractState>(initContract);

export const SafeTransferContractProvider = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[] | null;
}) => {
  // const [contract, dispatchSafeTransferContract] = useReducer(
  //   contractReducer,
  //   initContract
  // );
  const [kiroboServiceStatus, setKiroboServiceStatus] = useState(false);
  const [safeTransferContractWeb3, setSafeTransferContractWeb3] =
    useState<Contract>();
  const [erc20TokenContractWeb3, setErc20TokenContractWeb3] =
    useState<Contract>();
  const { library } = useWeb3();
  const {
    chainId,
    address,
    currency,
    setTokenBalance,
    active,
    setAllowance,
    setDeviceInfo,
    safeTransferContract,
    
  } = useAccount();

  const __chainId = useRef(chainId);
  const __library = useRef(library);
  const __address = useRef(address);
  const __currency = useRef(currency);
  const __setTokenBalance = useRef(setTokenBalance);
  const __erc20TokenContractWeb3 = useRef(erc20TokenContractWeb3);
  const __safeTransferContract = useRef(safeTransferContract);
  const __active = useRef(active);
  const __setAllowance = useRef(setAllowance);
  const __setDeviceInfo = useRef(setDeviceInfo);

  useEffect(() => {
    const web3 = __library.current;
    const chainId = __chainId.current;
    if (!web3) return;
    if (!chainId && !safeTransferContract) return;

    const setSafeTransferAsync = async () => {
      const gasPrice = await web3.eth.getGasPrice();
      setSafeTransferContractWeb3(
        new web3.eth.Contract(
          safeTransferABI as AbiItem[],
          safeTransferContract?.address,
          { gasPrice, gas: 60000 }
        )
      );
    };
    setSafeTransferAsync();
  }, [safeTransferContract]);

  useEffect(() => {
    const web3 = __library.current;
    const chainId = __chainId.current;
    const address = __address.current;
    const safeTransferContract = __safeTransferContract.current;
    const currency = __currency.current;
    const setTokenBalance = __setTokenBalance.current;

    if (currency.symbol !== "ETH") {
      (async function checkAllowance() {
        try {
          const service = KiroboService.getInstance();
          const network = getChainName(chainId);
          setTokenBalance(currency.balance);

          setErc20TokenContractWeb3(
            new web3.eth.Contract(erc20ABI as AbiItem[], currency.address)
          );
          const erc20TokenContractWeb3 = __erc20TokenContractWeb3.current;
          if (!service) throw new Error("service not started");
          if (!__active.current) throw new Error("web3 not connected");
          if (!network) throw new Error("chain is not supported");
          if (!erc20TokenContractWeb3)
            throw new Error("erc20Token contract not found");
          const allowance = await erc20TokenContractWeb3.methods
            .allowance(address, safeTransferContract?.address)
            .call();
          __setAllowance.current(allowance);
        } catch (e) {
          console.log(`check allowance failed: ${e.message || e.reason}`);
        }
      })();
    }
  }, [currency.symbol, currency.address]);

  // init
  useEffect(() => {
    const authDetails = {
      key: process.env.REACT_APP_AUTH_KEY ?? "",
      secret: process.env.REACT_APP_AUTH_SECRET ?? "",
    };
    const parser = new UAParser();
    if (window.ethereum) handleEthereum();
    else {
      __setDeviceInfo.current({
        isMobile: parser.getResult().device.type === "mobile",
        haveMetaMask: false,
        ethereumProvider: false,
      });
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 3000);
    }
    function handleEthereum() {
      const { ethereum } = window;
      __setDeviceInfo.current({
        isMobile: parser.getResult().device.type === "mobile",
        haveMetaMask: !!(ethereum && ethereum.isMetaMask),
        ethereumProvider: !!ethereum,
      });
    }
    KiroboService.createInstance(
      {
        key: authDetails.key,
        secret: authDetails.secret,
      },
      (message: string) => {
        if (message === "authorized") {
          setKiroboServiceStatus(true);
        }
        if (message === "disconnected") {
          setKiroboServiceStatus(false);
        }
      }
    );
    return () => {
      KiroboService.createInstance({ key: "", secret: "" });
    };
  }, []);


  return (
    <ContractContext.Provider
      value={{
        safeTransferContractWeb3,
        // safeTransferContract,
        // erc20TokenContract,
        erc20TokenContractWeb3,
        kiroboServiceStatus,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useDispatchSafeTransferContract = () => {
  const context = React.useContext(DispatchContext);

  if (context === undefined) {
    throw new Error("useSafeTransferContract context is missing");
  }

  return context;
};

export function useSafeTransferContract() {
  return useContext(ContractContext);
}
