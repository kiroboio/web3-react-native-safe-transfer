declare type EthTransferState = 'waiting-for-deposit' | 'retrieving' | 'retrieved' | 'ready' | 'collecting' | 'collected' | 'rejected' | 'invalid' | 'new' | 'creating' | 'unknown';
interface EthCollectInfo {
    /**
     * blockchain height
     *
     * @TJS-type number
     */
    broadcasted: number;
    /**
     * block number of confirmed transaction
     *
     * @TJS-type number
     */
    confirmed: number;
    /**
     * the tx id of the transaction
     *
     * @TJS-type string
     */
    txid: string;
}
interface EthRetrieveInfo {
    /**
     * blockchain height
     *
     * @TJS-type number
     */
    broadcasted: number;
    /**
     * block number of confirmed transaction
     *
     * @TJS-type number
     */
    confirmed: number;
    /**
     * the tx id of the transaction
     *
     * @TJS-type string
     */
    txid: string;
}
interface EthDepositInfo {
    /**
     * blockchain height
     *
     * @TJS-type number
     */
    broadcasted: number;
    /**
     * block number of confirmed transaction
     *
     * @TJS-type number
     */
    confirmed: number;
    /**
     * the tx id of the transaction
     *
     * @TJS-type string
     */
    txid: string;
}
interface EthTransactionInfo {
    inputs: {
        txid: string;
        vout: number;
    }[];
    coins: {
        value: number;
        address: string;
    }[];
    txid: string;
    hex: string;
}
export interface EthTokenInfo {
    address: string;
    decimals: number;
    symbol: string;
    type: 'ERC20';
}
export interface PaymentRequest {
    from: string;
    value: string;
    v: string;
    r: string;
    s: string;
}
export interface TransferFees {
    kiro?: {
        from: string;
        value: string;
        v: string;
        r: string;
        s: string;
    };
    eth?: {
        to: string;
        value: number;
    };
}
export declare type EthTransactionInformation = EthTransactionInfo;
export interface EthTransferCreateRequestDto {
    /**
     * senders address
     *
     * @TJS-type string
     */
    from: string;
    /**
     * the destination address
     *
     * @TJS-type string
     */
    to: string;
    /**
     * the transfer amount in wei
     *
     * @TJS-type string
     */
    value: string;
    token?: EthTokenInfo;
    /**
     * the transfer fees in wei
     *
     * @TJS-type string
     */
    fees: string;
    /**
     * hash use to verify recipient pass code
     *
     * @TJS-type string
     */
    secretHash: string;
    /**
     * free text to be attached to this transfer
     *
     * @TJS-type string
     */
    message: string;
    salt: string;
    state: EthTransferState;
    txid: string;
    /**
     * update date-time
     *
     * @TJS-type Date
     */
    updatedAt: Date;
    deposit: EthDepositInfo;
}
export interface EthTransferCreateDto extends EthTransferCreateRequestDto {
    /**
     * secret salt use to encrypt collect transaction
     *
     * @TJS-type string
     */
    /**
     * create date-time
     *
     */
    createdAt: Date;
    expires: {
        at?: Date;
        block?: number;
    };
}
export interface EthTransferUpdateRequestDto extends EthTransferCreateDto {
    /**
     * transfer state
     *
     * @TJS-type EthTransferState
     */
    state: EthTransferState;
    collect: EthCollectInfo;
    retrieve: EthRetrieveInfo;
    _id: string;
}
export interface EthTransferUpdateDto extends EthTransferUpdateRequestDto {
    state: EthTransferState;
    updatedAt: Date;
}
export interface EthTransferPatchDto {
    state: EthTransferState;
    deposit?: EthDepositInfo;
    collect?: EthCollectInfo;
    retrieve?: EthRetrieveInfo;
    expires?: {
        at?: Date;
        block?: number;
    };
    updatedAt: Date;
}
export interface EthTransferData extends EthTransferCreateDto {
    _id: string;
    deposit: EthDepositInfo;
    collect: EthCollectInfo;
    retrieve: EthRetrieveInfo;
}
export interface EthTransferSearchRequestDto {
    /**
     * transfer unique id
     *
     * @TJS-type string
     */
    id: string;
}
export interface EthTransferResponseDto {
    /**
     * senders address
     *
     * @TJS-type string
     */
    from: string;
    /**
     * the destination address
     *
     * @TJS-type string
     */
    to: string;
    /**
     * the transfer amount in wei
     *
     * @TJS-type string
     */
    value: string;
    /**
     * the coin used (wei if not exist)
     *
     */
    token?: EthTokenInfo;
    /**
     * the transfer fees in wei
     *
     * @TJS-type string
     */
    fees: string;
    /**
     * salt use to encrypt collect transaction
     *
     * @TJS-type string
     */
    salt: string;
    /**
     * hash use to verify recipient pass code
     *
     * @TJS-type string
     */
    secretHash: string;
    /**
     * free text to be attached to this transfer
     *
     * @TJS-type string
     */
    message: string;
    /**
     * hints for the id generator in the format 'algorithm;data'
     *
     * @TJS-type string
     */
    id: string;
    /**
     * create date-time
     *
     */
    createdAt: Date;
    /**
     * update date-time
     *
     * @TJS-type Date
     */
    updatedAt: Date;
    state: EthTransferState;
    deposit: EthDepositInfo;
    collect: EthCollectInfo;
    retrieve: EthRetrieveInfo;
    expires: {
        at?: Date;
        block?: number;
    };
    txid: string;
}
export {};
