import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
// import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
// import { LatticeConnector } from '@web3-react/lattice-connector'
import { FrameConnector } from '@web3-react/frame-connector';
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
import { MewConnectConnector } from '@myetherwallet/mewconnect-connector';
import InAppWalletConnector from '../customConnectors/InAppWalletConnector';
import { useAccount } from '../context/account';
import { RPC_URLS } from '../stores/account';
const POLLING_INTERVAL = 12000;
export var Connectors;
(function (Connectors) {
    Connectors["InAppWallet"] = "InAppWallet";
    Connectors["Injected"] = "Injected";
    Connectors["WalletConnect"] = "WalletConnect";
    Connectors["WalletLink"] = "WalletLink";
    Connectors["MyEtherWallet"] = "MyEtherWallet";
    Connectors["Frame"] = "Frame";
})(Connectors || (Connectors = {}));
export const useWeb3 = () => {
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();
    const defaultChainId = useAccount().chainId;
    const inAppWalletConnect = () => new InAppWalletConnector({ urls: RPC_URLS, defaultChainId: chainId ? chainId : Number(defaultChainId) });
    const injected = (params) => new InjectedConnector({ ...params }); // supportedChainIds: [1, 4] })
    const walletConnect = (params) => new WalletConnectConnector({
        rpc: { 4: RPC_URLS[4] },
        bridge: 'https://bridge.walletconnect.org',
        qrcode: true,
        pollingInterval: POLLING_INTERVAL,
        ...params,
    });
    const walletLink = (params) => new WalletLinkConnector({
        url: RPC_URLS[4],
        appName: 'dapp.kirobo.me',
        ...params,
    });
    const myEtherWallet = (params) => new MewConnectConnector({
        url: RPC_URLS[1],
        ...params,
    });
    const frame = (params) => new FrameConnector({
        supportedChainIds: [4],
        ...params,
    });
    const connectorByName = {
        [Connectors.InAppWallet]: inAppWalletConnect,
        [Connectors.Injected]: injected,
        [Connectors.WalletConnect]: walletConnect,
        [Connectors.WalletLink]: walletLink,
        [Connectors.MyEtherWallet]: myEtherWallet,
        [Connectors.Frame]: frame,
    };
    const connectors = [];
    const connect = async (connectorName, params = {}) => {
        if (!connectors[0]) {
            connectors[0] = { connector: connectorByName[connectorName](params) };
            if (connectors[0].connector) {
                await activate(connectors[0].connector);
            }
        }
    };
    const disconnect = () => {
        deactivate();
        delete connectors[0];
    };
    return {
        connect,
        disconnect,
        address: account,
        active,
        chainId,
        error,
        connector,
        library,
        activate,
    };
};
