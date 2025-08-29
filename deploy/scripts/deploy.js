const hre = require("hardhat")

async function main(params) {
    const CustomDex = await hre.ethers.getContractFactory("CustomDex");
    const customDex = await CustomDex.deploy();

    await customDex.deployed();
    console.log(` CustomDex: ${customDex.address}`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})