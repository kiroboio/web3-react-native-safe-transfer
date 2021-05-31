import web3 from "web3";

export const isValidAddress = (address: string) => {
  if (parseFloat(web3.utils.hexToNumberString(address)) === 0) return false;
  return web3.utils.isAddress(address);
};
