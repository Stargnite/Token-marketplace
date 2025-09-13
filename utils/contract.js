import { ethers } from "ethers";
import CustomDexABI from "./CustomDex.json";
import CustomTokenABI from "./CustomToken.json";

const MONAD_TESTNET_RPC = "https://testnet-rpc.monad.xyz";
const DEX_CONTRACT_ADDRESS = "0xb762870804186dBF1e107185b9aC3acD4A08a707"; // update if your deployed address differs

async function getProviderAndSigner() {
  if (typeof window !== "undefined" && window.ethereum) {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = web3Provider.getSigner();
    return { provider: web3Provider, signer };
  } else {
    // fallback provider to Monad testnet
    const provider = new ethers.providers.JsonRpcProvider(MONAD_TESTNET_RPC, {
      name: "monad-testnet",
      chainId: 10143,
    });
    return { provider, signer: null };
  }
}

// returns an ERC20 token contract instance at `address` connected to signer (if available) or provider
export const tokenContract = async (address) => {
  if (!address) throw new Error("tokenContract: address is required");
  const { provider, signer } = await getProviderAndSigner();
  const used = signer ?? provider;
  return new ethers.Contract(address, CustomTokenABI.abi, used);
};

// returns the DEX contract instance (connected to signer if wallet available)
export const contract = async () => {
  const { provider, signer } = await getProviderAndSigner();
  const used = signer ?? provider;
  return new ethers.Contract(DEX_CONTRACT_ADDRESS, CustomDexABI.abi, used);
};

















// import { ethers } from "ethers";
// import CustomDexABI from "./CustomDex.json";
// import CustomTokenABI from "./CustomToken.json";

// export const tokenContract = async (address) => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const { ethereum } = window;

//   if (ethereum) {
//     const signer = provider.getSigner();

//     const contractReader = new ethers.Contract(
//       address,
//       CustomTokenABI.abi,
//       signer
//     );

//     return contractReader;
//   }
// };

// export const contract = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const ethereum = window;

//     if (ethereum) {
//         const signer = provider.getSigner();

//         const contractReader = new ethers.Contract(
//             "0x4aeA1B5a647715B741Ef3c7F06E6C8477fFf19E8",
//             CustomDexABI.abi,
//             signer
//         );

//         return contractReader;
//     }
// }
