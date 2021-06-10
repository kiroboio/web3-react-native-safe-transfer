import Web3 from "web3";
import InputDataDecoder from "ethereum-input-data-decoder";
import erc20Abi from "../abi/erc20.json";
import saferTransferAbi from "../abi/safeTransfer.json";
import { fromWei } from "web3-utils";
import { useEffect, useState, useRef } from "react";
import { useAccount } from "../context/account";
import { useStorage } from "./useStorage";

const decoder = new InputDataDecoder(erc20Abi);
const saferTransferDecoder = new InputDataDecoder(saferTransferAbi);

const provider = () =>
  new Web3.providers.WebsocketProvider(
    "wss://mainnet.infura.io/ws/v3/1bcb00c18e274db1b63b634146835663",
    {
      clientConfig: {
        keepalive: true,
        keepaliveInterval: 60000,
      },
      reconnect: {
        auto: true,
        delay: 5000,
        onTimeout: true,
      },
    }
  );
const web3 = new Web3(provider());

const uniqueHolders: Set<string> = new Set([
  "0xb1191f691a355b43542bea9b8847bc73e7abb137",
]);
export const useKiroboStatistics = () => {
  let endTokensRewardsBlock = useRef(0);
  let endEthCollectsBlock = useRef(0);
  let endErc20CollectsBlock = useRef(0);

  const { block } = useAccount();
  const { setItem, getItem } = useStorage();

  const [lastBlockTo, setLastBlockTo] = useState(0);

  const [totalTokensRewards, setTotalTokensRewards] = useState(0);
  const [tokenRewardsTotalAmount, setTokenRewardsTotalAmount] = useState(0);

  const [totalEthCollects, setTotalEthCollects] = useState(0);
  const [ethTotalCollectedAmount, setEthTotalCollectedAmount] = useState(0);

  const [totalErc20Collects, setTotalErc20Collects] = useState(0);
  const [erc20TotalCollectedAmount, setErc20TotalCollectedAmount] = useState(0);

  const subCollect = async (
    func:
      | typeof collectTokenHolders
      | typeof collectTokenRewardsEvents
      | typeof collectCollectedEvents
      | typeof collectCollectedErc20Events,
    fromBlock: number,
    toBlock: number,
    factor: number
  ) => {
    web3.setProvider(provider());
    await web3.eth
      .getBlockNumber()
      .then(async () => {
        const from = fromBlock;
        const to = toBlock;
        const segment = Math.ceil((to - from) / factor) + 1;
        for (let i = from; i <= to; i += segment) {
          await func({ fromBlock: i, toBlock: Math.min(to, i + segment - 1) });
        }
      })
      .catch((e) => {
        console.error("Too much data and ws reset failed", e);
      });
  };
  const tokenAbi = erc20Abi as any;
  var tokenInst = new web3.eth.Contract(
    tokenAbi,
    "0xb1191f691a355b43542bea9b8847bc73e7abb137"
  );
  const collectTokenHolders = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    const nextBlock = toBlock;
    await web3.eth
      .getPastLogs({
        address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
        fromBlock,
        toBlock,
        topics: [
          web3.utils.sha3("Transfer(address,address,uint256)"),
          null,
          null,
        ],
      })
      .then(async (events: Array<any>) => {
        if (events.length > 0) {
          for (let i = 0; i < events.length; ++i) {
            const transaction = await web3.eth.getTransaction(
              events[i].transactionHash
            );
            console.log("token not decoded transaction", transaction);
            if (transaction.to && !uniqueHolders.has(transaction.to)) {
              const balanceTo = await tokenInst.methods
                .balanceOf(transaction.to)
                .call();
              if (balanceTo > 0) {
                uniqueHolders.add(transaction.to);
                console.log("token decoded data balanceTo", balanceTo);
              }
            }
            if (transaction.from && !uniqueHolders.has(transaction.from)) {
              const balanceFrom = await tokenInst.methods
                .balanceOf(transaction.from)
                .call();
              if (balanceFrom > 0) {
                uniqueHolders.add(transaction.from);
                console.log("token decoded data balanceFrom", balanceFrom);
              }
            }
            console.log(
              "token decoded data holders",
              Array.from(uniqueHolders).length
            );

            //const decodedData = decoder.decodeData(transaction.input);
          }
          setTokenRewardsTotalAmount((amount) => amount + events.length);
        }
        if (toBlock === endTokensRewardsBlock.current) {
          console.log("total:", totalTokensRewards);
          console.timeEnd("collect");
          console.log(tokenRewardsTotalAmount);
        }

        setItem("holdersLastFetchedBlock", toBlock.toString());
      })
      .catch(async () => {
        await subCollect(collectTokenHolders, fromBlock, toBlock, 8);
      });
    return nextBlock;
  };

  const collectTokenRewardsEvents = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    const nextBlock = toBlock;
    await web3.eth
      .getPastLogs({
        address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
        fromBlock,
        toBlock,
        topics: [
          web3.utils.sha3("Transfer(address,address,uint256)"),
          null,
          null,
        ],
      })
      .then(async (events: Array<any>) => {
        if (events.length > 0) {
          for (let i = 0; i < events.length; ++i) {
            const transaction = await web3.eth.getTransaction(
              events[i].transactionHash
            );
            console.log("token not decoded transaction", transaction);
            const decodedData = decoder.decodeData(transaction.input);
            if (
              decodedData &&
              decodedData.inputs &&
              decodedData.inputs.length &&
              web3.utils.isBN(decodedData.inputs[1])
            ) {
              setTotalTokensRewards(
                (amount) =>
                  amount + parseInt(fromWei(decodedData.inputs[1].toString()))
              );
            }
          }
          setTokenRewardsTotalAmount((amount) => amount + events.length);
        }

        if (toBlock === endTokensRewardsBlock.current) {
          console.log("total:", totalTokensRewards);
          console.timeEnd("collect");
          console.log(tokenRewardsTotalAmount);
        }

        setItem("rewardsLastFetchedBlock", toBlock.toString());
      })
      .catch(async () => {
        await subCollect(collectTokenRewardsEvents, fromBlock, toBlock, 8);
      });
    return nextBlock;
  };

  const collectCollectedEvents = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    const nextBlock = toBlock;
    await web3.eth
      .getPastLogs({
        address: "0xd8133A158d4A45e230560656fe5Cd2C209ef7a72",
        fromBlock,
        toBlock,
        topics: [
          web3.utils.sha3("Collected(address,address,bytes32,uint256)"),
          null,
          null,
        ],
      })
      .then(async (events: Array<any>) => {
        if (events.length > 0) {
          for (let i = 0; i < events.length; ++i) {
            const transaction = await web3.eth.getTransaction(
              events[i].transactionHash
            );
            const decodedData = saferTransferDecoder.decodeData(
              transaction.input
            );
            if (
              decodedData &&
              decodedData.inputs &&
              decodedData.inputs.length &&
              web3.utils.isBN(decodedData.inputs[2])
            ) {
              setTotalEthCollects(
                (amount) =>
                  amount + parseInt(fromWei(decodedData.inputs[2].toString()))
              );
            }
          }
          setEthTotalCollectedAmount((amount) => amount + events.length);
        }
        if (toBlock === endEthCollectsBlock.current) {
          console.log("total collected eths:", totalEthCollects);
          console.timeEnd("collect");
          console.log("collectedEthTotalAmount", ethTotalCollectedAmount);
        }

        setItem("collectedEvents", toBlock.toString());
      })
      .catch(async (err: { message: string }) => {
        await subCollect(collectCollectedEvents, fromBlock, toBlock, 8);
      });
    return nextBlock;
  };

  const collectCollectedErc20Events = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    const nextBlock = toBlock;
    await web3.eth
      .getPastLogs({
        address: "0xd8133A158d4A45e230560656fe5Cd2C209ef7a72",
        fromBlock,
        toBlock,
        topics: [
          web3.utils.sha3(
            "ERC20Collected(address,address,address,bytes32,uint256)"
          ),
          null,
          null,
        ],
      })
      .then(async (events: Array<any>) => {
        if (events.length > 0) {
          for (let i = 0; i < events.length; ++i) {
            const transaction = await web3.eth.getTransaction(
              events[i].transactionHash
            );
            const decodedData = saferTransferDecoder.decodeData(
              transaction.input
            );
            if (
              decodedData &&
              decodedData.inputs &&
              decodedData.inputs.length &&
              web3.utils.isBN(decodedData.inputs[4])
            ) {
              setTotalErc20Collects(
                (amount) =>
                  amount + parseInt(fromWei(decodedData.inputs[4].toString()))
              );
            }
          }
          setErc20TotalCollectedAmount((amount) => amount + events.length);
        }
        if (toBlock === endErc20CollectsBlock.current) {
          console.log("total erc20 collected:", totalErc20Collects);
          console.timeEnd("collect");
          console.log("collected erc 20TotalAmount", erc20TotalCollectedAmount);
        }

        setItem("erc20CollectedEvents", toBlock.toString());
      })
      .catch(async () => {
        await subCollect(collectCollectedEvents, fromBlock, toBlock, 8);
      });
    return nextBlock;
  };
  type BlockBounders = {
    fromBlock: number;
    toBlock: number;
  };

  const getTokenHoldersHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endTokensRewardsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("holdersLastFetchedBlock"));
    const currentFromBlock = lastSavedBlock > 0 && lastSavedBlock > fromBlock ? lastSavedBlock : fromBlock;

    await collectTokenHolders({ fromBlock: currentFromBlock, toBlock });
  };

  const getTokenRewardsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endTokensRewardsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("rewardsLastFetchedBlock"));
    const currentFromBlock = lastSavedBlock > 0 && lastSavedBlock > fromBlock ? lastSavedBlock : fromBlock;

    await collectTokenRewardsEvents({ fromBlock: currentFromBlock, toBlock });
  };


  const getCollectedEventsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endEthCollectsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("collectedEvents"));
    const currentFromBlock = lastSavedBlock > 0 && lastSavedBlock > fromBlock ? lastSavedBlock : fromBlock;

    await collectCollectedEvents({ fromBlock: currentFromBlock, toBlock });
  };

  const getCollectedErc20EventsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endErc20CollectsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("erc20CollectedEvents"));
    const currentFromBlock = lastSavedBlock > 0 && lastSavedBlock > fromBlock ? lastSavedBlock : fromBlock;

    await collectCollectedErc20Events({ fromBlock: currentFromBlock, toBlock });
  };

  useEffect(() => {
    if (block < 1) return;
    const getAllEventsAsync = async () => {
      setLastBlockTo(block);
      
      await getTokenHoldersHistory({ fromBlock: lastBlockTo, toBlock: block });
      await getTokenRewardsHistory({ fromBlock: lastBlockTo, toBlock: block });
      await getCollectedEventsHistory({ fromBlock: lastBlockTo, toBlock: block });
      await getCollectedErc20EventsHistory({ fromBlock: lastBlockTo, toBlock: block });

    };
    getAllEventsAsync();
  }, [block]);

  return { totalTokensRewards, totalErc20Collects, totalEthCollects };
};




/*
     private watchSafeTransferEvents(fromBlock: number) {
        this[contracts].safeTransfer.events
          .allEvents({
            fromBlock,
            topics: [
              [
                this[web3b].utils.sha3(
                  'Deposited(address,address,uint256,uint256,bytes32)'
                ),
                this[web3b].utils.sha3(
                  'Retrieved(address,address,bytes32,uint256)'
                ),
                this[web3b].utils.sha3(
                  'Collected(address,address,bytes32,uint256)'
                ),
                this[web3b].utils.sha3(
                  'ERC20Deposited(address,address,address,uint256,uint256,bytes32)'
                ),
                this[web3b].utils.sha3(
                  'ERC20Retrieved(address,address,address,bytes32,uint256)'
                ),
                this[web3b].utils.sha3(
                  'ERC20Collected(address,address,address,bytes32,uint256)'
                ),
              ],
            ],
          })
    
    
       Collect:
       Safe Transfer Contract: 0xd8133A158d4A45e230560656fe5Cd2C209ef7a72
             web3.utils.sha3('Collected(address,address,bytes32,uint256)')
             web3.utils.sha3('ERC20Collected(address,address,address,bytes32,uint256)')
    
       Rewards:
       Kiro Token Contract: 0xb1191f691a355b43542bea9b8847bc73e7abb137
             web3.utils.sha3('Transfer(address,address,uint256)')
       (filter from address: 0x0449345bd7af07b6c5545b88e1d37aafe1d20e42
    
    
    event Collected(
            address indexed from,
            address indexed to,
            bytes32 indexed id,
            uint256 value
    );
    
    event ERC20Collected(
            address indexed token,
            address indexed from,
            address indexed to,
            bytes32 id,
            uint256 value
        );
    
    
    event Transfer(address indexed from, address indexed to, uint256 value); */
