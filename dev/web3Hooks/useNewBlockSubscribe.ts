import React from "react";
import { useAccount } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";

export const useNewBlockSubscribe = () => {
  const { library: web3, address: web3Address } = useWeb3();
  const { setBlock } = useAccount();
  const __setBlock = useRef(setBlock);

  React.useEffect(() => {
    const setBlock = __setBlock.current;
    if (!web3) return;
    web3.eth
      .subscribe("newBlockHeaders")
      .on("data", (e) => {
        if (!e.number) return;
        setBlock(e.number);
      })
      .on("connected", async () => {
        const blockNumber = await web3.eth.getBlockNumber();
        setBlock(blockNumber);
      })
      .on("error", (e) => console.log("subscribe error", e));
  }, [web3, web3Address]);
};
