import { ethers } from "ethers";
import CustomDexABI from "./CustomDex.json";
import CustomTokenABI from "./CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;
  }
};


export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ethereum = window;

    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            "0x4aeA1B5a647715B741Ef3c7F06E6C8477fFf19E8",
            CustomDexABI.abi,
            signer
        );

        return contractReader;
    }
} 