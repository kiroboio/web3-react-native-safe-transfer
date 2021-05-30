import numeral from 'numeral';
import Web3 from 'web3';

export const etherToWei = (value: number | string): string => {
  return Web3.utils.toWei(value?.toString() || '0', 'ether');
};

export const weiToEther = (value: number | string): string => {
  return Web3.utils.fromWei('' + value, 'ether');
};

export const formatEther = (
  value: number | string,
  format?: string // '0,0.0[00000]'
): string => {
  if (!format) {
    const val = typeof value === 'number' ? value : parseFloat(value);
    const precision = val > 0 ? Math.max(0, Math.log(val) / Math.LN10 + 1 + 1e-15) : 0;

    if (precision < 6) {
      format = `00.0[${'0'.repeat(6 - precision)}]`;
    } else {
      format = '0.0';
    }
  }
  return numeral(value).format(format);
};

const ethereum = {
  weiToEther,
  etherToWei,
  formatEther,
};

export default ethereum;
