import { useEffect } from "react";
import { useAccount } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { Connectors } from "../hooks/useWeb3";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";

export const useConnect = () => {
  const { connect: web3Connect } = useWeb3();
  const { connectCmd } = useAccount();
  const __connectCmd = useRef(connectCmd);
  const __web3Connect = useRef(web3Connect);

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
};
