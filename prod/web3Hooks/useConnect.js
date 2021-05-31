import { useEffect } from "react";
import { useAccount } from "../context/account";
import { useWeb3 } from "../hooks/useWeb3";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
export var useConnect = function () {
    var web3Connect = useWeb3().connect;
    var connectCmd = useAccount().connectCmd;
    var __connectCmd = useRef(connectCmd);
    var __web3Connect = useRef(web3Connect);
    useEffect(function () {
        var web3Connect = __web3Connect.current;
        var connectCmd = __connectCmd.current;
        if (connectCmd.is.ready && !connectCmd.is.running) {
            connectCmd.start();
            web3Connect(connectCmd.connector)
                .then(function () {
                connectCmd.done();
            })
                .catch(function (e) {
                connectCmd.failed({ message: e ? JSON.stringify(e) : "failed" });
            });
        }
    }, [connectCmd.is.ready]);
};
