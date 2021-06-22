import { EthTransferResponseDto } from "../dto";
import { ChainIds } from "../stores";
import { ITransferItem, ITransfers } from "../stores/account";


export const SERVICE = {
  RATES: "v1/eth/to/usd",
  TOKEN_RATES: "v1/eth/erc20/rates",
  NETWORKS: "v1/eth/networks",
  BALANCE(network: string) {
    return `v1/eth/${network}/balance`;
  },
  TRANSFERS(network: string) {
    return `v1/eth/${network}/transfers`;
  },
  TRANSFER_REQUEST(network: string) {
    return `v1/eth/${network}/transfer/request`;
  },
  FOLLOW(network: string) {
    return `v1/eth/${network}/action/follow`;
  },
  COLLECT(network: string) {
    return `v1/eth/${network}/action/collect`;
  },
  ERC20(network: string) {
    return `v1/eth/${network}/erc20`;
  },
};

export const getChainName = (chainId: ChainIds) => {
  if (Number(chainId) === 1) return "main";
  if (Number(chainId) === 4) return "rinkeby";
  return "";
};

interface PutInStoreParams {
  store: ITransfers;
  address: string;
  item: EthTransferResponseDto;
}

interface MoveToStoreParams {
  store: ITransfers;
  address: string;
  item: ITransferItem;
}

interface AddToStoreParams {
  store: ITransfers;
  address: string;
  items: EthTransferResponseDto[];
  count: number;
}

const responseToTransferItem = (
  item: EthTransferResponseDto
): ITransferItem => {
  const confirmedBlock =
    item.state === "new"
      ? item.deposit.confirmed
      : item.state === "collected"
      ? item.collect.confirmed
      : item.state === "retrieved"
      ? item.retrieve.confirmed
      : -1;

  const txid =
    item.collect.broadcasted > 0
      ? item.collect.txid
      : item.retrieve.broadcasted > 0
      ? item.retrieve.txid
      : item.deposit.txid;

  return {
    id: item.id,
    txid,
    from: item.from,
    to: item.to,
    value: item.value,
    fees: item.fees,
    salt: item.salt,
    secretHash: item.secretHash,
    state: item.state,
    updatedAt: new Date(item.updatedAt),
    confirmedBlock,
    message: item.message,
    token: item.token,
  };
};

export const moveToStore = ({ store, address, item }: MoveToStoreParams) => {
  store.upsert(address, item);
};

export const putInStore = ({ store, address, item }: PutInStoreParams) => {
  store.upsert(address, responseToTransferItem(item));
};

interface DeleteFromStoreParams {
  store: ITransfers
  address: string
  id: string
}

interface RemoveFromStoreParams {
  store: ITransfers
  address: string
  filter: (item: ITransferItem) => boolean
}

export const deleteFromStore = ({ store, address, id }: DeleteFromStoreParams) => {
  store.delete(address, id)
}

export const removeFromStore = ({ store, address, filter }: RemoveFromStoreParams) => {
  return store.remove(address, filter)
}


export const addToStore = ({
  store,
  address,
  items,
  count,
}: AddToStoreParams) => {
  store.add({
    address,
    count,
    transfers: items.map((item) => responseToTransferItem(item)),
  });
};

export interface FetchQueryParams {
  address: string
  thresholdBlock: number
  $skip: number
  $limit: number
  watch: string
}

export const historyQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  $or: [
    { 'collect.confirmed': { $gt: -1, $lte: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: -1, $lte: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})

export const inboxQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  type: 'incoming',
  state: {
    $in: [
      'new',
      'creating',
      'retrieved',
      'retrieving',
      'collected',
      'collecting',
    ],
  },
  $or: [
    { 'collect.confirmed': -1, 'retrieve.confirmed': -1 },
    { 'collect.confirmed': { $gt: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})

export const outboxQuery = ({
  address,
  thresholdBlock,
  $skip,
  $limit,
  watch,
}: FetchQueryParams) => ({
  address,
  type: 'outgoing',
  state: {
    $in: [
      'new',
      'creating',
      'retrieved',
      'retrieving',
      'collected',
      'collecting',
      'unknown',
    ],
  },
  $or: [
    { 'collect.confirmed': -1, 'retrieve.confirmed': -1 },
    { 'collect.confirmed': { $gt: thresholdBlock } },
    { 'retrieve.confirmed': { $gt: thresholdBlock } },
  ],
  $sort: { updatedAt: -1 },
  $skip,
  $limit,
  watch,
})
