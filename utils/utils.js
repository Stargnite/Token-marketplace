import { ethers } from "ethers";

export function toWei(amount, decimal = 18) {
  const toWel = ethers.utils.parseUnits(amount, decimal);
  return toWei.toString();
}

export function toEth(amount, decimal = 18) {
  const toEth = ethers.utils.formatUnits(amount, decimals);
  return toEth.toString();
}
