import Web3 from "web3";
import { utils } from "ethers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { Connectors } from "../hooks/useWeb3";
import SecureLS from "secure-ls";
import { ChainIds } from "../stores/account";

export interface NetworkConnectorArguments {
  urls: {
    [chainId: number]: string;
  };
  defaultChainId?: number;
}

export interface IInAppWalletConnector extends AbstractConnector {
  name: string;
  web3: Web3;
  activate(): Promise<{ provider: string; chainId: number; account: string }>;
  getProvider(): Promise<string>;
  getChainId(): Promise<number>;
  getAccount(): Promise<string | null>;
  deactivate(): void;
  setWeb3(): void;
  changeChainId(chainId: ChainIds): void;
}

export class InAppWalletConnector
  extends AbstractConnector
  implements IInAppWalletConnector
{
  private secureStorage = new SecureLS();
  public static DEFAULT_PATH = "m/44'/60'/0'/0/0";

  public static activeAccount: string | undefined;

  private getPaths = () => {
    try {
      return this.secureStorage.get("paths") || {};
    } catch (e) {
      return {};
    }
  };

  public paths: { [key: string]: { [key: number]: string } } = this.getPaths();

  public static setActiveAccount = (account: string | undefined): void => {
    InAppWalletConnector.activeAccount = account;
  };
  public addresses: string[] = [];

  public name = Connectors.InAppWallet;
  public web3: Web3 = new Web3();

  private readonly providers: { [chainId: string]: string };
  private chainId: number;
  private static mnemonic: string | undefined;

  public static clearMnemonic(): void {
    InAppWalletConnector.mnemonic = undefined;
  }
  public static setMnemonic(mnemonic: string): void {
    InAppWalletConnector.mnemonic = mnemonic;
  }
  private hdNode: utils.HDNode | undefined = undefined;

  public getPrivateKeys = (): string[] => {
    if (!InAppWalletConnector.mnemonic) throw new Error("mnemonic not found");
    const privateKeys: string[] = [];
    const hdNode = this.hdNode;
    if (!hdNode) return [];
    const walletFirst = hdNode.derivePath(InAppWalletConnector.DEFAULT_PATH);
    if (this.paths[walletFirst.address]) {
      Object.keys(this.paths[walletFirst.address]).map((key: string) =>
        privateKeys.push(hdNode.derivePath(`m/44'/60'/0'/0/${key}`).privateKey)
      );
    } else {
      this.paths[walletFirst.address] = { 0: walletFirst.address };
      privateKeys.push(walletFirst.privateKey);
    }
    return privateKeys;
  };

  constructor({
    urls,
    defaultChainId,
  }: NetworkConnectorArguments & { path?: string }) {
    super();
    this.providers = urls;
    this.chainId = defaultChainId || 4;
    this.setWeb3();
  }

  public setWeb3 = () => {
    if (!InAppWalletConnector.mnemonic) throw new Error("mnemonic not found");
    this.hdNode = utils.HDNode.fromMnemonic(InAppWalletConnector.mnemonic);
    const provider = new Web3.providers.WebsocketProvider(
      this.providers[this.chainId || 4]
    );
    const web3 = new Web3(provider);
    const privateKeys = this.getPrivateKeys();

    const addresses = new Set<string>();
    for (const privateKey of privateKeys) {
      const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
      web3.eth.accounts.wallet.add({
        privateKey: privateKey,
        address,
      });

      addresses.add(address);
    }

    this.addresses = Array.from(addresses);
    InAppWalletConnector.activeAccount =
      InAppWalletConnector.activeAccount || this.addresses[0];
    this.web3 = web3;
  };

  public handleAccountChanged(account?: string): void {
    InAppWalletConnector.setActiveAccount(account);
    if (!account) return;
    this.emitUpdate({ account });
  }

  public addWalletAddress = (): void => {
    const hdNode = this.hdNode;
    if (!hdNode) return;
    const walletFirstAddress = hdNode.derivePath(
      InAppWalletConnector.DEFAULT_PATH
    ).address;

    const setNewAddress = (privateKey: string) => {
      const { address } =
        this.web3.eth.accounts.privateKeyToAccount(privateKey);
      this.web3.eth.accounts.wallet.add({
        privateKey,
        address,
      });
      this.addresses.push(address);
      this.secureStorage.set("paths", this.paths);
    };

    const onEmptyKeyNotFounded = () => {
      const keysAmount: number = Object.keys(
        this.paths[walletFirstAddress]
      ).length;
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
      } else if (
        index ===
        Object.keys(this.paths[walletFirstAddress]).length - 1
      ) {
        onEmptyKeyNotFounded();
      }
      index++;
    }
  };

  public removeWalletAddress = (address: string): void => {
    const hdNode = this.hdNode;
    if (!hdNode) return;
    this.web3.eth.accounts.wallet.remove(address);
    this.addresses = this.addresses.filter((a) => a !== address);
    const walletFirstAddress = hdNode.derivePath(
      InAppWalletConnector.DEFAULT_PATH
    ).address;
    Object.keys(this.paths[walletFirstAddress]).forEach((key: string) => {
      if (this.paths[walletFirstAddress][Number(key)] === address) {
        delete this.paths[walletFirstAddress][Number(key)];
        this.secureStorage.set("paths", this.paths);
      }
    });
  };

  public static account?: string;

  public async activate(): Promise<{
    provider: string;
    chainId: number;
    account: string;
  }> {
    return {
      provider: this.providers[this.chainId],
      chainId: this.chainId,
      account: InAppWalletConnector.activeAccount || this.addresses[0],
    };
  }

  public async getProvider(): Promise<string> {
    return this.providers[this.chainId];
  }

  public async getChainId(): Promise<number> {
    return this.chainId;
  }

  public async getAccount(): Promise<string> {
    return InAppWalletConnector.activeAccount || this.addresses[0];
  }

  public deactivate(): undefined {
    return;
  }

  public changeChainId(chainId: ChainIds): void {
    this.chainId = Number(chainId);
    this.emitUpdate({ provider: this.providers[chainId.toString()], chainId });
  }
}