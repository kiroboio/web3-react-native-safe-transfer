export declare const etherToWei: (value: number | string) => string;
export declare const weiToEther: (value: number | string) => string;
export declare const formatEther: (value: number | string, format?: string | undefined) => string;
declare const ethereum: {
    weiToEther: (value: number | string) => string;
    etherToWei: (value: number | string) => string;
    formatEther: (value: number | string, format?: string | undefined) => string;
};
export default ethereum;
