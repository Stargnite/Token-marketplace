require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const MONAD_RPC = "https://testnet-rpc.monad.xyz";
// USELESS PRIVATE KEY, SO DON'T BOTHER DOING WHAT YOU'RE THINKING
const PRIVATE_KEY = "7c44bc065447840d4e0258be665a38b54dc0f01cfb1350c0807bb886c8b07092";

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "monad",
  networks: {
    hardhat: {},
    monad: {
      url: MONAD_RPC,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 10143, // Monad testnet chainId
    },
  },
};

require("@nomicfoundation/hardhat-toolbox");









// /** @type import('hardhat/config').HardhatUserConfig */

// // const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
// const NEXT_PUBLIC_MONAD_RPC = "https://testnet-rpc.monad.xyz";
// const NEXT_PUBLIC_PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.0",
//   defaultNetwork: "matic",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: NEXT_PUBLIC_MONAD_RPC,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//   },
// };
