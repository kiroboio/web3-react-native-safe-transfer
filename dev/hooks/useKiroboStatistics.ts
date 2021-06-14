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

export const useKiroboStatistics = () => {
  let endTokensRewardsBlock = useRef(0);
  let endEthCollectsBlock = useRef(0);
  let endErc20CollectsBlock = useRef(0);
  
  const uniqueHolders:  React.MutableRefObject<Set<string>> = useRef(new Set([]));

  const { block } = useAccount();
  const { setItem, getItem } = useStorage();

  const [lastBlockTo, setLastBlockTo] = useState(0);

  const [uniqueHoldersAmount, setUniqueHoldersAmount] = useState(0)

  const [totalTokensRewards, setTotalTokensRewards] = useState(0);
  const [tokenRewardsTotalAmount, setTokenRewardsTotalAmount] = useState(0);

  const [totalEthCollects, setTotalEthCollects] = useState(0);
  const [ethTotalCollectedAmount, setEthTotalCollectedAmount] = useState(0);

  const [totalErc20Collects, setTotalErc20Collects] = useState(0);
  const [erc20TotalCollectedAmount, setErc20TotalCollectedAmount] = useState(0);

  const [isFetching, setIsFetching] = useState(false);

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
    for (let i = fromBlock; i <= toBlock; i++) {
      const events = await web3.eth.getPastLogs({
        address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
        fromBlock: i,
        toBlock: i,
        topics: [
          web3.utils.sha3("Transfer(address,address,uint256)"),
          null,
          null,
        ],
      });

      for (let i = 0; i < events.length; ++i) {
        const transaction = await web3.eth.getTransaction(
          events[i].transactionHash
        );
        if (transaction.to && !uniqueHolders.current.has(transaction.to)) {
          const balanceTo = await tokenInst.methods
            .balanceOf(transaction.to)
            .call();
          if (balanceTo > 0) {
            uniqueHolders.current.add(transaction.to);
          }
        }
        if (transaction.from && !uniqueHolders.current.has(transaction.from)) {
          const balanceFrom = await tokenInst.methods
            .balanceOf(transaction.from)
            .call();
          if (balanceFrom > 0) {
            uniqueHolders.current.add(transaction.from);
          }
        }
        
        console.log(Array.from(uniqueHolders.current), "array of uniqueHolders");
        //const decodedData = decoder.decodeData(transaction.input);
      }
      
      if (toBlock === endTokensRewardsBlock.current) {
        console.log("total:", totalTokensRewards);
        console.timeEnd("collect");
        console.log(tokenRewardsTotalAmount);
      }
      
      const uniqueHoldersArray = Array.from(uniqueHolders.current);
      console.log(
        "token decoded data holders",
        uniqueHoldersArray.length
      );

      setUniqueHoldersAmount(uniqueHoldersArray.length);
      setItem("uniqueHolders", uniqueHoldersArray.join(","));
      setItem("holdersLastFetchedBlock", toBlock.toString());
    }
  };

  const collectTokenRewardsEvents = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    for (let i = fromBlock; i <= toBlock; i++) {
      const events = await web3.eth.getPastLogs({
        address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
        fromBlock: i,
        toBlock: i,
        topics: [
          web3.utils.sha3("Transfer(address,address,uint256)"),
          null,
          null,
        ],
      });

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
          if(decodedData.inputs[0]) {
            const balanceTo = await tokenInst.methods
              .balanceOf(decodedData.inputs[0])
              .call();
            if (balanceTo > 0) {
              uniqueHolders.current.add(decodedData.inputs[0]);
            }
          }
        }
      }

      console.log(Array.from(uniqueHolders.current), "array of uniqueHolders");
      setTokenRewardsTotalAmount((amount) => amount + events.length);
    }

    if (toBlock === endTokensRewardsBlock.current) {
      console.log("total:", totalTokensRewards);
      console.timeEnd("collect");
      console.log(tokenRewardsTotalAmount);
    }
    const uniqueHoldersArray = Array.from(uniqueHolders.current);
    console.log(
      "token decoded data holders",
      uniqueHoldersArray.length
    );
    
    setUniqueHoldersAmount(uniqueHoldersArray.length);
    setItem("uniqueHolders", uniqueHoldersArray.join(","));
    setItem("rewardsLastFetchedBlock", toBlock.toString());
    setItem("totalTokensRewards", totalTokensRewards.toString());
    setItem("tokenRewardsTotalAmount", tokenRewardsTotalAmount.toString());
  };

  const collectCollectedEvents = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    for (let i = fromBlock; i <= toBlock; i++) {
      const events = await web3.eth.getPastLogs({
        address: "0xd8133A158d4A45e230560656fe5Cd2C209ef7a72",
        fromBlock: i,
        toBlock: i,
        topics: [
          web3.utils.sha3("Collected(address,address,bytes32,uint256)"),
          null,
          null,
        ],
      });

      for (let i = 0; i < events.length; ++i) {
        const transaction = await web3.eth.getTransaction(
          events[i].transactionHash
        );
        const decodedData = saferTransferDecoder.decodeData(transaction.input);
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

    setItem("totalEthCollects", totalEthCollects.toString());
    setItem("ethTotalCollectedAmount", ethTotalCollectedAmount.toString());
    setItem("collectedEvents", toBlock.toString());
  };

  const collectCollectedErc20Events = async ({
    fromBlock,
    toBlock,
  }: {
    fromBlock: number;
    toBlock: number;
  }) => {
    for (let i = fromBlock; i <= toBlock; i++) {
      const events = await web3.eth.getPastLogs({
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
      });

      for (let i = 0; i < events.length; ++i) {
        const transaction = await web3.eth.getTransaction(
          events[i].transactionHash
        );
        const decodedData = saferTransferDecoder.decodeData(transaction.input);
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

    setItem("totalErc20Collects", totalErc20Collects.toString());
    setItem("erc20TotalCollectedAmount", erc20TotalCollectedAmount.toString());
    setItem("erc20CollectedEvents", toBlock.toString());
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
    const currentFromBlock =
      lastSavedBlock > 0 && lastSavedBlock > fromBlock
        ? lastSavedBlock
        : fromBlock;

    await collectTokenHolders({ fromBlock: currentFromBlock, toBlock });
  };

  const getTokenRewardsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endTokensRewardsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("rewardsLastFetchedBlock"));
    const currentFromBlock =
      lastSavedBlock > 0 && lastSavedBlock > fromBlock
        ? lastSavedBlock
        : fromBlock;

    await collectTokenRewardsEvents({ fromBlock: currentFromBlock, toBlock });
  };

  const getCollectedEventsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endEthCollectsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("collectedEvents"));
    const currentFromBlock =
      lastSavedBlock > 0 && lastSavedBlock > fromBlock
        ? lastSavedBlock
        : fromBlock;

    await collectCollectedEvents({ fromBlock: currentFromBlock, toBlock });
  };

  const getCollectedErc20EventsHistory = async ({
    fromBlock,
    toBlock,
  }: BlockBounders) => {
    endErc20CollectsBlock.current = toBlock;
    const lastSavedBlock = parseInt(await getItem("erc20CollectedEvents"));
    const currentFromBlock =
      lastSavedBlock > 0 && lastSavedBlock > fromBlock
        ? lastSavedBlock
        : fromBlock;

    await collectCollectedErc20Events({ fromBlock: currentFromBlock, toBlock });
  };


  useEffect(() => {
    if (block < 1) return;
    const getAllEventsAsync = async () => {
      if(isFetching) return;

      setIsFetching(true);
      
      const currentLastBlockTo = lastBlockTo;
      setLastBlockTo(block);

      const storedUniqueHolders = await getItem("uniqueHolders");
      if(storedUniqueHolders) {
        uniqueHolders.current = new Set(storedUniqueHolders.split(","));
      }

      const storedTotalTokensRewards = parseInt(await getItem("totalTokensRewards"));
      if(storedTotalTokensRewards && storedTotalTokensRewards > 0) {
        setTotalTokensRewards(storedTotalTokensRewards)
      }

      const storedTokenRewardsTotalAmount = parseInt(await getItem("tokenRewardsTotalAmount"));
      if(storedTokenRewardsTotalAmount && storedTokenRewardsTotalAmount > 0) {
        setTotalTokensRewards(storedTokenRewardsTotalAmount)
      }

      const storedTotalEthCollects = parseInt(await getItem("totalEthCollects"));
      if(storedTotalEthCollects && storedTotalEthCollects > 0) {
        setTotalTokensRewards(storedTotalEthCollects)
      }

      const storedEthTotalCollectedAmount = parseInt(await getItem("ethTotalCollectedAmount"));
      if(storedEthTotalCollectedAmount && storedEthTotalCollectedAmount > 0) {
        setTotalTokensRewards(storedEthTotalCollectedAmount)
      }

      const storedTotalErc20Collects = parseInt(await getItem("totalErc20Collects"));
      if(storedTotalErc20Collects && storedTotalErc20Collects > 0) {
        setTotalTokensRewards(storedTotalErc20Collects)
      }

      const storedErc20TotalCollectedAmount = parseInt(await getItem("erc20TotalCollectedAmount"));
      if(storedErc20TotalCollectedAmount && storedErc20TotalCollectedAmount > 0) {
        setTotalTokensRewards(storedErc20TotalCollectedAmount)
      }

      await getTokenHoldersHistory({
        fromBlock: currentLastBlockTo,
        toBlock: block,
      });
      await getTokenRewardsHistory({
        fromBlock: currentLastBlockTo,
        toBlock: block,
      });
      await getCollectedEventsHistory({
        fromBlock: currentLastBlockTo,
        toBlock: block,
      });
      await getCollectedErc20EventsHistory({
        fromBlock: currentLastBlockTo,
        toBlock: block,
      });

      setIsFetching(false);
    };
    getAllEventsAsync();
  }, [block]);

  return { totalTokensRewards, totalErc20Collects, totalEthCollects, uniqueHoldersAmount };
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
