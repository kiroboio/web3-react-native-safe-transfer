import { useEffect } from "react";
import { useAccount } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
export var useDisconnect = function () {
    var _a = useWeb3(), web3Disconnect = _a.disconnect, web3 = _a.library;
    var _b = useAccount(), disconnectCmd = _b.disconnectCmd, connectCmd = _b.connectCmd;
    var __connectCmd = useRef(connectCmd);
    var __disconnectCmd = useRef(disconnectCmd);
    var __web3Disconnect = useRef(web3Disconnect);
    var __web3 = useRef(web3);
    useEffect(function () {
        var web3Disconnect = __web3Disconnect.current;
        var disconnectCmd = __disconnectCmd.current;
        var connectCmd = __connectCmd.current;
        var web3 = __web3.current;
        if (disconnectCmd.is.ready && !disconnectCmd.is.running) {
            disconnectCmd.start();
            web3.eth.clearSubscriptions(console.log);
            web3Disconnect();
            disconnectCmd.done();
            connectCmd.clearCmd();
        }
    }, [disconnectCmd.is.ready]);
};
