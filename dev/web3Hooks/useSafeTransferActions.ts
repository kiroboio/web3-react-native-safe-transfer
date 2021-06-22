import { useEffect } from "react";
import { useAccount } from "..";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import { useSafeTransferContract } from "dev/providers/SafeTransferContractProvider";
import web3 from "web3";
import { useWeb3 } from "dev/hooks";
import KiroboService from "@kiroboio/safe-transfer-lib-lite";
import { EthTokenInfo } from "dev/dto";
import { toBN } from "web3-utils";
import { getChainName, putInStore, SERVICE } from "./common";

export const useSafeTransferActions = () => {
  
  const {
    safeTransferContractWeb3,
    erc20TokenContractWeb3,
  } = useSafeTransferContract();
  
  const { library } = useWeb3();
  const {
    address,
    chainId,
    currency,
    active,
    approvedCmd,
    depositCmd,
    retrieveCmd,
    setAllowance,
    outgoing,
    collectCmd,
    incoming,
    sendCmd,
    safeTransferContract
  } = useAccount();

  const __active = useRef(active);
  const __address = useRef(address);
  const __chainId = useRef(chainId);
  const __currency = useRef(currency);
  const __approvedCmd = useRef(approvedCmd);
  const __depositCmd = useRef(depositCmd);
  const __safeTransferContract = useRef(safeTransferContract);
  const __safeTransferContractWeb3 = useRef(safeTransferContractWeb3);
  const __erc20TokenContractWeb3 = useRef(erc20TokenContractWeb3);
  const __setAllowance = useRef(setAllowance);
  const __library = useRef(library);

  const __outgoing = useRef(outgoing);
  const __incoming = useRef(incoming);
  const __sendCmd = useRef(sendCmd);
  const __collectCmd = useRef(collectCmd);
  const __retrieveCmd = useRef(retrieveCmd);

  useEffect(() => {
    const active = __active.current;
    const chainId = __chainId.current;
    const address = __address.current;
    const approvedCmd = __approvedCmd.current;
    const currency = __currency.current;

    const safeTransferContract = __safeTransferContract.current;
    const erc20TokenContractWeb3 = __erc20TokenContractWeb3.current;
    if (
      approvedCmd.is.ready &&
      !approvedCmd.is.running &&
      currency.symbol !== "ETH"
    ) {
      approvedCmd.start();
      (async function runApprovedCmd() {
        try {
          const service = KiroboService.getInstance();
          const network = getChainName(chainId);
          const { amount } = approvedCmd;

          if (!service) throw new Error("service not started");
          if (!active) throw new Error("web3 not connected");
          if (!network) throw new Error("chain is not supported");
          if (!erc20TokenContractWeb3)
            throw new Error("erc20Token contract not found");

          const gasPrice = await library.eth.getGasPrice();
          const approve = await erc20TokenContractWeb3.methods
            .approve(
              safeTransferContract?.address,
              web3.utils.toBN(amount)
            )
            .send({ from: address, gasPrice });
          if (approve) {
            const allowance = await erc20TokenContractWeb3.methods
              .allowance(address, safeTransferContract?.address)
              .call();
            __setAllowance.current(allowance);
          }
          approvedCmd.done();
        } catch (e) {
          approvedCmd.failed({ message: e.message || e.reason });
        }
      })();
    }
  }, [approvedCmd.is.ready]);

  useEffect(() => {
    const active = __active.current;
    const address = __address.current;
    const chainId = __chainId.current;
    const depositCmd = __depositCmd.current;
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current;
    if (depositCmd.is.ready && !depositCmd.is.running) {
      depositCmd.start();
      (async function runDepositCmd() {
        try {
          const service = KiroboService.getInstance();
          const network = getChainName(chainId);
          const {
            from,
            to,
            value,
            publicSalt,
            privateSalt,
            secretHash,
            message,
          } = depositCmd;

          if (!service) throw new Error("service not started");
          if (!active) throw new Error("web3 not connected");
          if (!network) throw new Error("chain is not supported");
          if (!safeTransferContractWeb3)
            throw new Error("safeTransfer contract not found");
          if (from !== address) throw new Error("from does not match address");

          interface ServiceRequestParams {
            from: string;
            to: string;
            value: string;
            publicSalt: string;
            privateSalt: string;
            secretHash: string;
            message: string;
            token?: EthTokenInfo;
          }
          const serviceRequestParams: ServiceRequestParams = {
            from,
            to,
            value,
            publicSalt,
            privateSalt,
            secretHash,
            message,
          };
          const currency = __currency.current;
          if (currency.symbol !== "ETH") {
            serviceRequestParams.token = {
              address: currency.address,
              decimals: currency.decimals,
              symbol: currency.symbol,
              type: "ERC20",
            };
          }
          const request: any = (await service
            .getService(SERVICE.TRANSFER_REQUEST(network))
            .create(serviceRequestParams)) as any;

          const total = toBN(value).add(toBN(request.fees));
          const nonce = await library.eth.getTransactionCount(
            address,
            "pending"
          );
          const gasPrice = await library.eth.getGasPrice();
          const txid =
            currency.symbol !== "ETH"
              ? await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .depositERC20(
                      currency.address,
                      currency.symbol,
                      to,
                      value,
                      request.fees,
                      secretHash
                    )
                    .send({ from, value: request.fees, nonce, gasPrice })
                    .on("transactionHash", (hash: string) => {
                      resolve(hash);
                    })
                    .on("error", (err: any) => {
                      reject(err);
                    });
                })
              : await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .deposit(to, value, request.fees, secretHash)
                    .send({ from, value: total, nonce, gasPrice })
                    .on("transactionHash", (hash: string) => {
                      resolve(hash);
                    })
                    .on("error", (err: any) => {
                      reject(err);
                    });
                });
          await service.getService(SERVICE.FOLLOW(network)).create({
            txid,
          });
          depositCmd.done();
          putInStore({
            store: __outgoing.current,
            address,
            item: {
              ...request,
              collect: { broadcasted: -1, confirmed: -1, txid: "" },
              deposit: { txid, broadcasted: -1, confirmed: -1 },
              expires: { at: request.expiresAt },
              state: "creating",
              retrieve: { broadcasted: -1, confirmed: -1, txid: "" },
              message: request.message || "",
              txid,
              salt: request.publicSalt,
              updatedAt: request.createdAt,
              token:
                currency.symbol !== "ETH"
                  ? {
                      address: currency.address,
                      decimals: currency.decimals,
                      symbol: currency.symbol,
                      type: "ERC20",
                    }
                  : undefined,
            },
          });
        } catch (e) {
          console.error("fees: error", 4, e);
          depositCmd.failed({ message: e.message || e.reason });
        }
      })();
    }
  }, [depositCmd.is.ready]);

  useEffect(() => {
    const active = __active.current;
    const address = __address.current;
    const chainId = __chainId.current;
    const outgoing = __outgoing.current;
    const retrieveCmd = __retrieveCmd.current;
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current;
    if (retrieveCmd.is.ready && !retrieveCmd.is.running) {
      retrieveCmd.start();
      (async function runRetrieveCmd() {
        try {
          const service = KiroboService.getInstance();
          const network = getChainName(chainId);

          if (!service) throw new Error("service not started");
          if (!active) throw new Error("web3 not connected");
          if (!network) throw new Error("chain is not supported");
          if (!safeTransferContractWeb3)
            throw new Error("safeTransfer contract not found");

          const transfer = outgoing.map.get(retrieveCmd.id);
          if (!transfer) throw new Error("transfer not found");

          const { from, to, fees, value, secretHash, token } = transfer;
          if (from !== address)
            throw new Error("from address does not match connected address");
          const nonce = await library.eth.getTransactionCount(
            address,
            "pending"
          );
          const gasPrice = await library.eth.getGasPrice();
          const txid =
            token.symbol && token.symbol !== "ETH"
              ? await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .retrieveERC20(
                      token.address,
                      token.symbol,
                      to,
                      value,
                      fees,
                      secretHash
                    )
                    .send({ from, nonce, gasPrice })
                    .on("transactionHash", (hash: string) => {
                      resolve(hash);
                    })
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .on("error", (err: any) => {
                      reject(err);
                    });
                })
              : await new Promise((resolve, reject) => {
                  safeTransferContractWeb3.methods
                    .retrieve(to, value, fees, secretHash)
                    .send({ from, nonce, gasPrice })
                    .on("transactionHash", (hash: string) => {
                      resolve(hash);
                    })
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .on("error", (err: any) => {
                      reject(err);
                    });
                });

          await service.getService(SERVICE.FOLLOW(network)).create({
            txid,
          });
          __outgoing.current.update(address, {
            id: transfer.id,
            state: "retrieving",
          });
          retrieveCmd.done();
        } catch (e) {
          console.error("fees: error undo", 4, e);
          retrieveCmd.failed({ message: e.message || e.reason });
        }
      })();
    }
  }, [retrieveCmd.is.ready]);

  useEffect(() => {
    const active = __active.current;
    const chainId = __chainId.current;
    const collectCmd = __collectCmd.current;
    const safeTransferContractWeb3 = __safeTransferContractWeb3.current;
    const address = __address.current;

    if (collectCmd.is.ready && !collectCmd.is.running) {
      collectCmd.start();
      (async function runCollectCmd() {
        try {
          const service = KiroboService.getInstance();
          const network = getChainName(chainId);
          const { id, key } = collectCmd;

          if (!service) throw new Error("service not started");
          if (!active) throw new Error("web3 not connected");
          if (!network) throw new Error("chain is not supported");
          if (!safeTransferContractWeb3)
            throw new Error("safeTransfer contract not found");

          await service
            .getService(SERVICE.COLLECT(network))
            .create({ id, key });

          __incoming.current.update(address, { id, state: "collecting" });
          collectCmd.done();
        } catch (e) {
          collectCmd.failed({ message: e.name });
        }
      })();
    }
  }, [collectCmd.is.ready]);

  useEffect(() => {
    const library = __library.current;
    const address = __address.current;
    const sendCmd = __sendCmd.current;
    if (
      address &&
      sendCmd.to &&
      sendCmd.value &&
      !sendCmd.is.running &&
      sendCmd.is.ready
    ) {
      sendCmd.start();
      (async function runSendCmd() {
        const address = __address.current;
        const sendCmd = __sendCmd.current;
        try {
          await library.eth.sendTransaction({
            value: library.utils.toWei(sendCmd.value, "ether"),
            to: sendCmd.to,
            from: address,
          });
          sendCmd.done();
        } catch (e) {
          console.error(`err = ${JSON.stringify(e.message)}`);
          sendCmd.failed({ message: e.message });
        }
      })();
    }
  }, [sendCmd.is.ready]);
};
