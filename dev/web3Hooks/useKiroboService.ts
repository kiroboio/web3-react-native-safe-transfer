import { useCallback, useEffect } from "react";
import { useAccount } from "../context";
import { useCurrentMutableState as useRef } from "../hooks/useCurrentMutableState";
import {
  addToStore,
  deleteFromStore,
  FetchQueryParams,
  getChainName,
  historyQuery,
  inboxQuery,
  moveToStore,
  outboxQuery,
  putInStore,
  removeFromStore,
  SERVICE,
} from "./common";
import KiroboService from "@kiroboio/safe-transfer-lib-lite";
import { useSafeTransferContract } from "dev/providers/SafeTransferContractProvider";
import { ChainIds, ERC20TokenItem, ITransferItem } from "dev/stores";
import { EthErc20ResponseDto, EthTransferResponseDto } from "dev/dto";
import { usePrevious, useWeb3 } from "dev/hooks";

const MAX_CONFIRMS = 30;

export const useDisconnect = () => {
  const { erc20TokenContractWeb3, kiroboServiceStatus } =
    useSafeTransferContract();

  const {
    address,
    chainId,
    currency,
    setAllowance,
    outgoing,
    incoming,
    setBalance,
    ERC20TokenList,
    setStakingBalance,
    setERC20TokenBalance,
    setTokenBalance,
    setCurrencyBalance,
    clearERC20TokenBalances,
    block,
    transfers,
    setCurrency,
    setSafeTransferContract,
    setERC20TokenContract,
    setErc20TokenRate,
    setStakingContract,
    setKiroTokenContract,
    setRate,
    safeTransferContract,
    setActive,
    setAddress,
    setChainId
  } = useAccount();

  const {
    active: web3Active,
    chainId: web3ChainId,
    address: web3Address,
  } = useWeb3()

  interface FetchTransferParams {
    store: typeof transfers;
    query: any;
  }

  interface FetchNextTransferParams {
    store: typeof transfers;
    queryBuilder: (query: FetchQueryParams) => void;
    thresholdBlock: number;
    watch?: string;
  }
  const prevBlock = usePrevious(block);
  const prevAddress = usePrevious(address);
  const prevChainId = usePrevious(chainId);
  const prevStatus = usePrevious(status);

  const __currency = useRef(currency);
  const __safeTransferContract = useRef(safeTransferContract);
  const __erc20TokenContractWeb3 = useRef(erc20TokenContractWeb3);
  const __setAllowance = useRef(setAllowance);
  const __setBalance = useRef(setBalance);
  const __outgoing = useRef(outgoing);
  const __incoming = useRef(incoming);
  const __ERC20TokenList = useRef(ERC20TokenList);
  const __setStakingBalance = useRef(setStakingBalance);
  const __setERC20TokenBalance = useRef(setERC20TokenBalance);
  const __setTokenBalance = useRef(setTokenBalance);
  const __setCurrencyBalance = useRef(setCurrencyBalance);
  const __clearERC20TokenBalances = useRef(clearERC20TokenBalances);

  const __setSafeTransferContract = useRef(setSafeTransferContract);
  const __setERC20TokenContract = useRef(setERC20TokenContract);
  const __setErc20TokenRate = useRef(setErc20TokenRate);

  const __setStakingContract = useRef(setStakingContract)
  const __setKiroTokenContract = useRef(setKiroTokenContract)
  const __setRate = useRef(setRate)

  const __prevBlock = useRef(prevBlock);
  const __prevAddress = useRef(prevAddress);
  const __prevChainId = useRef(prevChainId);
  const __prevStatus = useRef(prevStatus);

  const __transfers = useRef(transfers);
  const __setCurrency = useRef(setCurrency);

  const __block = useRef(block);
  const __setActive =  useRef(setActive);
  const __setAddress =  useRef(setAddress);
  const __setChainId =  useRef(setChainId);

  const fetchNextTransfers = useCallback(
    ({
      store,
      queryBuilder,
      thresholdBlock,
      watch = "ignore",
    }: FetchNextTransferParams) => {
      const fetchTransfers = ({ store, query }: FetchTransferParams) => {
        const service = KiroboService.getInstance();
        if (!service) {
          store.fetchCmd.done();
          return;
        }
        const network = getChainName(chainId);
        if (network && block) {
          service
            ?.getService(SERVICE.TRANSFERS(network))
            .find({ query })
            .then((payload: any) => {
              store.fetchCmd.done();
              addToStore({
                store,
                address: address,
                items: payload.data,
                count: payload.total,
              });
              store.setFetched(payload.skip + payload.data.length);
            })
            .catch(() => {
              store.fetchCmd.done();
            });
        } else {
          store.fetchCmd.done();
        }
      };

      if (store.fetchCmd.is.ready && !store.fetchCmd.is.running) {
        store.fetchCmd.start();
        if (store.fetched === 0 || store.fetched < store.count) {
          fetchTransfers({
            store,
            query: queryBuilder({
              address: address,
              $limit: store.fetchCmd.amount,
              $skip: store.fetched,
              watch,
              thresholdBlock,
            }),
          });
        } else {
          store.fetchCmd.done();
        }
      }
    },
    [address, block, chainId]
  );

  useEffect(() => {
    const service = KiroboService.getInstance();
    if (status && service) {
      const networkService = service.getService(SERVICE.NETWORKS);
      const ratesService = service.getService(SERVICE.RATES);
      const tokenRatesService = service.getService(SERVICE.TOKEN_RATES);

    //   const setHeight = (network: any) => {
    //     if (network.netId === "main") {
    //       setHeightMain(network.height);
    //     } else if (network.netId === "rinkeby") {
    //       setHeightRinkeby(network.height);
    //     }
    //   };

      networkService
        .find({ query: { watch: "replace" } })
        .then(async (networks: any) => {
          tokenRatesService.on("patched", (rates: any) => {
            for (const network of networks.data) {
              const token = __ERC20TokenList
                .current(network.netId)
                .find((token: {symbol: string}) => token.symbol === rates.symbol);
              __setErc20TokenRate.current(
                network.netId,
                token?.address as string,
                rates.usd
              );
            }
          });

          ratesService.on("updated", (rates: any) => {
            for (const network of networks.data) {
              const token = __ERC20TokenList
                .current(network.netId)
                .find((token: {symbol: string}) => token.symbol === rates.symbol);
              __setErc20TokenRate.current(
                network.netId,
                token?.address as string,
                rates.value
              );
            }
            __setRate.current(rates.value);
          });

          const { data: tokensRates }: any = await tokenRatesService.find({
            query: { watch: "replace" },
          });
  
          const resRateService: any = await ratesService.find({
            query: { source: "bitfinex.com", watch: "replace" },
          });

          for (const network of networks.data) {
            //setHeight(network);
            if (network?.contracts?.safeTransfer) {
              __setSafeTransferContract.current(
                network.netId,
                network.contracts.safeTransfer
              );
            }
            if (network?.contracts?.staking) {
              __setStakingContract.current(
                network.netId,
                network.contracts.staking
              );
            }
            if (network?.contracts?.kiroToken) {
              __setKiroTokenContract.current(
                network.netId,
                network.contracts.kiroToken
              );
            }

            const erc20Service = service.getService(
              SERVICE.ERC20(network.netId)
            );
            let rate = 0;
            if (resRateService.data.length === 1) {
              rate = resRateService.data[0].value as number;
              __setRate.current(rate);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const tokens = (
              ((await erc20Service.find({})) as any)
                .data as EthErc20ResponseDto[]
            ).map<ERC20TokenItem>((token) => ({
              address: token.address,
              symbol: token.symbol,
              decimals: token.decimals,
              name: token.name,
              balance: "",
              rate: tokensRates.find(
                ({ symbol }: { symbol: string }) => symbol === token.symbol
              )?.usd,
            }));
            const eth: ERC20TokenItem = {
              address: "0x000000000000",
              symbol: "ETH",
              decimals: 18,
              name: "Ethereum",
              balance: "",
              rate,
            };
            tokens.unshift(eth);
            __setERC20TokenContract.current(network.netId, tokens);
          }
        });

      networkService.on("patched", (network: any) => {
        //setHeight(network);
        if (network?.contracts?.safeTransfer) {
          __setSafeTransferContract.current(
            network.netId,
            network.contracts.safeTransfer
          );
        }
      });
    }
  }, [status]);

  const __fetchNextTransfers = useRef(fetchNextTransfers);
  useEffect(() => {
    const service = KiroboService.getInstance();
    if (!address || !kiroboServiceStatus) {
      __setBalance.current("");
      __setTokenBalance.current("");
      __setAllowance.current("");
      __setStakingBalance.current("");
      __clearERC20TokenBalances.current();
      return;
    }
    const network = getChainName(chainId);
    if (network) {
      service
        ?.getService(SERVICE.BALANCE(network))
        .find({
          query: {
            address,
            erc20: __ERC20TokenList
              .current(network)
              ?.filter((item: { address: string }) => item.address !== "0x000000000000")
              ?.map((item: { address: string }) => item.address)
              .join(";"),
          },
        })
        .then((response: any) => {
          const balance = response.data[0];
          __setBalance.current(balance?.balance || "");
          __setStakingBalance.current(balance?.stakingBalance || "");
          __setERC20TokenBalance.current(
            network,
            "0x000000000000",
            balance?.balance || ""
          );
          if (__currency.current.symbol === "ETH") {
            __setTokenBalance.current(balance?.kiroBalance || "");
          }
          if (
            __currency.current.balance === "" &&
            __currency.current.symbol === "ETH"
          ) {
            __setCurrencyBalance.current(balance?.balance || "");
          }
          for (const entry of Object.entries<string>(balance?.erc20 || {})) {
            __setERC20TokenBalance.current(network, entry[0], entry[1]);
            if (__currency.current.address === entry[0]) {
              __setTokenBalance.current(entry[1]);
            }
          }
        })
        .catch((reason) => console.warn(`error: ${JSON.stringify(reason)}`));

      if (
        __currency.current.symbol !== "ETH" &&
        __safeTransferContract.current?.address &&
        __erc20TokenContractWeb3.current
      ) {
        __erc20TokenContractWeb3.current.methods
          .allowance(address, __safeTransferContract.current?.address)
          .call()
          .then((allowance: string) => __setAllowance.current(allowance));
      }
    } else {
      __setBalance.current("");
      __setTokenBalance.current("");
      __setAllowance.current("");
      __setStakingBalance.current("");
      __clearERC20TokenBalances.current();
    }
  }, [kiroboServiceStatus, chainId, address]);

  useEffect(() => {
    const transfers = __transfers.current;
    const incoming = __incoming.current;
    const outgoing = __outgoing.current;
    const prevAddress = __prevAddress.current;
    const prevChainId = __prevChainId.current;
    const prevBlock = __prevBlock.current;
    const prevStatus = __prevStatus.current;
    const setCurrency = __setCurrency.current;
    if (!block) {
      transfers.clear();
      incoming.clear();
      outgoing.clear();
    }

    if (status && address && block) {
      const historyItems: ITransferItem[] = [
        ...removeFromStore({
          address: address,
          store: incoming,
          filter: (item) =>
            item.confirmedBlock > 0 &&
            item.confirmedBlock <= block - MAX_CONFIRMS &&
            (item.state === "collected" || item.state === "retrieved"),
        }),
        ...removeFromStore({
          address: address,
          store: outgoing,
          filter: (item) =>
            item.confirmedBlock > 0 &&
            item.confirmedBlock <= block - MAX_CONFIRMS &&
            (item.state === "collected" || item.state === "retrieved"),
        }),
      ];
      for (const historyItem of historyItems) {
        moveToStore({ store: transfers, address: address, item: historyItem });
      }
    }
    if (status && address && prevChainId !== chainId) {
      setCurrency({
        address: "0x000000000000",
        symbol: "ETH",
        decimals: 18,
        name: "Ethereum",
        balance: "",
      });
    }

    if (
      status &&
      address &&
      block &&
      (!prevBlock ||
        address !== prevAddress ||
        prevChainId !== chainId ||
        !prevStatus)
    ) {
      transfers.clear();
      incoming.clear();
      outgoing.clear();
      const network = getChainName(chainId);
      const service = KiroboService.getInstance();
      if (network && service) {
        transfers.fetch(40);
        incoming.fetch(40);
        outgoing.fetch(40);

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners("created");
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners("patched");
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners("updated");
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .removeAllListeners("removed");

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on("created", (item: EthTransferResponseDto) => {
            if (item.from === address) {
              putInStore({ store: __outgoing.current, address: address, item });
            } else if (item.to === address) {
              putInStore({ store: __incoming.current, address: address, item });
            }
          });
        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on("patched", (item: EthTransferResponseDto) => {
            if (
              (item.collect.confirmed > 0 &&
                item.collect.confirmed <= block - MAX_CONFIRMS) ||
              (item.retrieve.confirmed > 0 &&
                item.retrieve.confirmed <= block - MAX_CONFIRMS)
            ) {
              putInStore({
                store: __transfers.current,
                address: address,
                item,
              });
            }
            if (item.from === address) {
              if (
                (item.collect.confirmed > 0 &&
                  item.collect.confirmed <= block - MAX_CONFIRMS) ||
                (item.retrieve.confirmed > 0 &&
                  item.retrieve.confirmed <= block - MAX_CONFIRMS)
              ) {
                deleteFromStore({
                  store: __outgoing.current,
                  address: address,
                  id: item.id,
                });
              } else {
                putInStore({
                  store: __outgoing.current,
                  address: address,
                  item,
                });
              }
            } else if (item.to === address) {
              if (
                (item.collect.confirmed > 0 &&
                  item.collect.confirmed <= block - MAX_CONFIRMS) ||
                (item.retrieve.confirmed > 0 &&
                  item.retrieve.confirmed <= block - MAX_CONFIRMS)
              ) {
                deleteFromStore({
                  store: __incoming.current,
                  address: address,
                  id: item.id,
                });
              } else {
                putInStore({
                  store: __incoming.current,
                  address: address,
                  item,
                });
              }
            }
          });

        service
          ?.getService(SERVICE.TRANSFERS(network))
          .on("removed", (item: EthTransferResponseDto) => {
            deleteFromStore({
              store: __transfers.current,
              address: address,
              id: item.id,
            });
            deleteFromStore({
              store: __outgoing.current,
              address: address,
              id: item.id,
            });
            deleteFromStore({
              store: __incoming.current,
              address: address,
              id: item.id,
            });
          });
      }
    }
  }, [status, address, chainId, block]);

  // on transfers.fetch done
  useEffect(() => {
    const _transfers = __transfers.current;

    if (transfers.fetched > 0 && transfers.fetched < 60) {
      _transfers.fetch(40);
    }
  }, [transfers.fetched]);

  // on incoming.fetch done
  useEffect(() => {
    const _incoming = __transfers.current;

    if (incoming.fetched > 0) {
      _incoming.fetch(40);
    }
  }, [incoming.fetched]);

  // on outgoing.fetch done
  useEffect(() => {
    const _outgoing = __transfers.current;

    if (outgoing.fetched > 0) {
      _outgoing.fetch(40);
    }
  }, [outgoing.fetched]);

  // on transfers.fetch command
  useEffect(() => {
    const transfers = __transfers.current;
    const block = __block.current;
    const fetchNextTransfers = __fetchNextTransfers.current;

    const watch = transfers.count > 0 ? "ignore" : "replace";

    fetchNextTransfers({
      store: transfers,
      queryBuilder: historyQuery,
      thresholdBlock: block - MAX_CONFIRMS,
      watch,
    });
  }, [transfers.fetchCmd.is.ready]);

  // on incoming.fetch command
  useEffect(() => {
    const incoming = __incoming.current;
    const block = __block.current;
    const fetchNextTransfers = __fetchNextTransfers.current;

    fetchNextTransfers({
      store: incoming,
      queryBuilder: inboxQuery,
      thresholdBlock: block - MAX_CONFIRMS,
    });
  }, [incoming.fetchCmd.is.ready]);

  // on outgoing.fetch command
  useEffect(() => {
    const outgoing = __outgoing.current;
    const block = __block.current;
    const fetchNextTransfers = __fetchNextTransfers.current;

    fetchNextTransfers({
      store: outgoing,
      queryBuilder: outboxQuery,
      thresholdBlock: block - MAX_CONFIRMS,
    });
  }, [outgoing.fetchCmd.is.ready]);

  useEffect(() => {
    const transfers = __transfers.current
    const incoming = __incoming.current
    const outgoing = __outgoing.current
    const setActive = __setActive.current
    const setAddress = __setAddress.current
    const setChainId = __setChainId.current
    const setBalance = __setBalance.current
    const setTokenBalance = __setTokenBalance.current
    const setStakingBalance = __setStakingBalance.current
    const clearERC20TokenBalances = __clearERC20TokenBalances.current
    setActive(web3Active)
    setAddress(web3Address || '')
    setChainId(String(web3ChainId) as ChainIds)
    setBalance('')
    setTokenBalance('')
    setStakingBalance('')
    clearERC20TokenBalances()
    transfers.clear()
    outgoing.clear()
    incoming.clear()

  }, [web3Address, web3ChainId, web3Active])

};
