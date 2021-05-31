import { useEffect } from "react";
import { useAccount } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";

export const useDisconnect = () => {
  const { disconnect: web3Disconnect, library: web3 } = useWeb3();
  const { disconnectCmd, connectCmd } = useAccount();

  const __connectCmd = useRef(connectCmd);
  const __disconnectCmd = useRef(disconnectCmd);
  const __web3Disconnect = useRef(web3Disconnect);
  const __web3 = useRef(web3);

  useEffect(() => {
    const web3Disconnect = __web3Disconnect.current;
    const disconnectCmd = __disconnectCmd.current;
    const connectCmd = __connectCmd.current;
    const web3 = __web3.current;

    if (disconnectCmd.is.ready && !disconnectCmd.is.running) {
      disconnectCmd.start();
      web3.eth.clearSubscriptions(console.log);
      web3Disconnect();
      disconnectCmd.done();
      connectCmd.clearCmd();
    }
  }, [disconnectCmd.is.ready]);
};
