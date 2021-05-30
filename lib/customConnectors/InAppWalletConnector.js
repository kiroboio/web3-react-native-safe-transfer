import Web3 from 'web3';
import { utils } from 'ethers';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { Connectors } from '../hooks/useWeb3';
import SecureLS from 'secure-ls';
class InAppWalletConnector extends AbstractConnector {
    secureStorage = new SecureLS();
    static DEFAULT_PATH = "m/44'/60'/0'/0/0";
    static activeAccount;
    getPaths = () => {
        try {
            return this.secureStorage.get('paths') || {};
        }
        catch (e) {
            return {};
        }
    };
    paths = this.getPaths();
    static setActiveAccount = (account) => {
        InAppWalletConnector.activeAccount = account;
    };
    addresses = [];
    name = Connectors.InAppWallet;
    web3 = new Web3();
    providers;
    chainId;
    static mnemonic;
    static clearMnemonic() {
        InAppWalletConnector.mnemonic = undefined;
    }
    static setMnemonic(mnemonic) {
        InAppWalletConnector.mnemonic = mnemonic;
    }
    hdNode = undefined;
    getPrivateKeys = () => {
        if (!InAppWalletConnector.mnemonic)
            throw new Error('mnemonic not found');
        const privateKeys = [];
        const hdNode = this.hdNode;
        if (!hdNode)
            return [];
        const walletFirst = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH);
        if (this.paths[walletFirst.address]) {
            Object.keys(this.paths[walletFirst.address]).map((key) => privateKeys.push(hdNode.derivePath(`m/44'/60'/0'/0/${key}`).privateKey));
        }
        else {
            this.paths[walletFirst.address] = { 0: walletFirst.address };
            privateKeys.push(walletFirst.privateKey);
        }
        return privateKeys;
    };
    constructor({ urls, defaultChainId }) {
        super();
        this.providers = urls;
        this.chainId = defaultChainId || 4;
    }
    setWeb3 = () => {
        if (!InAppWalletConnector.mnemonic)
            throw new Error('mnemonic not found');
        this.hdNode = utils.HDNode.fromMnemonic(InAppWalletConnector.mnemonic);
        const web3 = new Web3(new Web3.providers.WebsocketProvider(this.providers[this.chainId || 4]));
        const privateKeys = this.getPrivateKeys();
        const addresses = new Set();
        for (const privateKey of privateKeys) {
            const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
            web3.eth.accounts.wallet.add({
                privateKey: privateKey,
                address,
            });
            addresses.add(address);
        }
        this.addresses = Array.from(addresses);
        InAppWalletConnector.activeAccount = InAppWalletConnector.activeAccount || this.addresses[0];
        this.web3 = web3;
    };
    handleAccountChanged(account) {
        InAppWalletConnector.setActiveAccount(account);
        if (!account)
            return;
        this.emitUpdate({ account });
    }
    addWalletAddress = () => {
        const hdNode = this.hdNode;
        if (!hdNode)
            return;
        const walletFirstAddress = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH).address;
        const setNewAddress = (privateKey) => {
            const { address } = this.web3.eth.accounts.privateKeyToAccount(privateKey);
            this.web3.eth.accounts.wallet.add({
                privateKey,
                address,
            });
            this.addresses.push(address);
            this.secureStorage.set('paths', this.paths);
        };
        const onEmptyKeyNotFounded = () => {
            const keysAmount = Object.keys(this.paths[walletFirstAddress]).length;
            const walletAccount = hdNode.derivePath(`m/44'/60'/0'/0/${keysAmount}`);
            this.paths[walletFirstAddress][keysAmount] = walletAccount.address;
            const privateKey = walletAccount.privateKey;
            setNewAddress(privateKey);
        };
        let index = 0;
        for (const key of Object.keys(this.paths[walletFirstAddress])) {
            if (Number(key) !== index) {
                const walletAccount = hdNode.derivePath(`m/44'/60'/0'/0/${index}`);
                this.paths[walletFirstAddress][index] = walletAccount.address;
                const privateKey = walletAccount.privateKey;
                setNewAddress(privateKey);
                break;
            }
            else if (index === Object.keys(this.paths[walletFirstAddress]).length - 1) {
                onEmptyKeyNotFounded();
            }
            index++;
        }
    };
    removeWalletAddress = (address) => {
        const hdNode = this.hdNode;
        if (!hdNode)
            return;
        this.web3.eth.accounts.wallet.remove(address);
        this.addresses = this.addresses.filter(a => a !== address);
        const walletFirstAddress = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH).address;
        Object.keys(this.paths[walletFirstAddress]).forEach((key) => {
            if (this.paths[walletFirstAddress][Number(key)] === address) {
                delete this.paths[walletFirstAddress][Number(key)];
                this.secureStorage.set('paths', this.paths);
            }
        });
    };
    static account;
    async activate() {
        return {
            provider: this.providers[this.chainId],
            chainId: this.chainId,
            account: InAppWalletConnector.activeAccount || this.addresses[0],
        };
    }
    async getProvider() {
        return this.providers[this.chainId];
    }
    async getChainId() {
        return this.chainId;
    }
    async getAccount() {
        return InAppWalletConnector.activeAccount || this.addresses[0];
    }
    deactivate() {
        return;
    }
    changeChainId(chainId) {
        this.chainId = Number(chainId);
        this.emitUpdate({ provider: this.providers[chainId.toString()], chainId });
    }
}
export default InAppWalletConnector;
