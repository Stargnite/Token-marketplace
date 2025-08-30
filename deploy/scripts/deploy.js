// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Compile contracts if needed
  await hre.run("compile");

  // Get the contract factory
  const ContractFactory = await hre.ethers.getContractFactory("CustomDex");

  console.log("Deploying CustomEx contract...");

  // Deploy the contract
  const contract = await ContractFactory.deploy();

  // Wait for deployment to complete
  await contract.deployed();

  console.log(`✅ Contract deployed to: ${contract.address}`);
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});







// const hre = require("hardhat")

// async function main(params) {
//     const CustomDex = await hre.ethers.getContractFactory("CustomDex");
//     const customDex = await CustomDex.deploy();

//     await customDex.deployed();
//     console.log(` CustomDex: ${customDex.address}`)
// }


// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// })