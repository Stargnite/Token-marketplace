import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth } from "./utils";

export async function swapEthToToken(tokenName, amount) {
  try {
    const contractObj = await contract();
    // toWei returns a BigNumber (see helper below)
    const value = toWei(amount);
    const data = await contractObj.swapEthToToken(tokenName, { value });
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract();
    const tokenAddress = await contractObj.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(tokenAddress);
    const data = await tokenContractObj.allowance(owner, contractObj.address);

    // Compare BigNumbers: is allowance >= required amount?
    const allowanceBN = BigNumber.from(data);
    const requiredBN = toWei(amount);

    return allowanceBN.gte(requiredBN);
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract();
    const tx = await contractObj.swapTokenToEth(tokenName, toWei(amount));
    const result = await tx.wait();
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenBalance(tokenName, address) {
  try {
    const contractObj = await contract();
    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract();
    const tokenAddress = await contractObj.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(tokenAddress);
    const tx = await tokenContractObj.approve(contractObj.address, toWei(amount));
    const receipt = await tx.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getAllHistory() {
  try {
    const contractObj = await contract();
    const getAllHistory = await contractObj.getAllHistory();

    const historyTransaction = getAllHistory.map((history) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
      userAddress: history.userAddress,
    }));
    return historyTransaction;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Helper: returns a BigNumber ready to be passed to contract calls
function toWei(amount) {
  // parseUnits accepts string and defaults to 18 decimals; return BigNumber
  return ethers.utils.parseUnits(amount.toString(), 18);
}

function parseErrorMsg(e) {
  try {
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message || json?.message || String(e);
  } catch {
    return String(e);
  }
}




































// import { BigNumber, ethers } from "ethers";
// import { contract, tokenContract } from "./contract";
// import { toEth } from "./utils";

// export async function swapEthToToken(tokenName, amount) {
//   try {
//     const tx = { value: toWei(amount) };

//     const contractObj = await contract();
//     const data = await contractObj.swapEthToToken(tokenName, tx);

//     receipt = await data.wait();

//     return receipt;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function hasValidAllowance(owner, tokenName, amount) {
//   try {
//     const contractObj = await contract();
//     const address = await contractObj.getTokenAddress(tokenName);

//     const tokenContractObj = await tokenContract();
//     const data = await tokenContractObj.allowance(
//       owner,
//       "0x4aeA1B5a647715B741Ef3c7F06E6C8477fFf19E8"
//     );

//     const result = BigNumber.from(data.toString()).get(
//       BigNumber.from(toWei(amount))
//     );

//     return result;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function swapTokenToEth(tokenName, amount) {
//   try {
//     const contractObj = await contract();
//     const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));

//     const result = await data.wait();
//     return result;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function swapTokenToToken(srcToken, destToken, amount) {
//   try {
//     const contractObj = await contract();
//     const data = await contractObj.swapTokenToToken(
//       srcToken,
//       destToken,
//       toWei(amount)
//     );
//     const receipt = await data.wait();
//     return receipt;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function getTokenBalance(tokenName, address) {
//   const contractObj = await contract();
//   const balance = await contractObj.getBalance(tokenName, address);
//   return balance;
// }

// export async function getTokenAddress(tokenName) {
//   try { 
//     const contractObj = await contract();
//     const address = await contractObj.getTokenAddress(tokenName);
//     return address;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function increaseAllowance(tokenName, amount) {
//   try {
//     const contractObj = await contract();
//     const address = await contractObj.getTokenAddress(tokenName);

//     const tokenContractObj = await tokenContract();
//     const data = await tokenContractObj.approve(
//       "0x4aeA1B5a647715B741Ef3c7F06E6C8477fFf19E8",
//       toWei(amount)
//     );

//     const receipt = await data.wait();
//     return receipt;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// export async function getAllHistory() {
//   try {
//     const contractObj = await contract();
//     const getAllHistory = await contractObj.getAllHistory();

//     const historyTransaction = getAllHistory.map((history, i) => ({
//       historyId: history.historyId.toNumber(),
//       tokenA: history.tokenA,
//       tokenB: history.tokenB,
//       inputValue: toEth(history?.inputValue),
//       outputValue: toEth(history?.outputValue),
//       userAddress: history.userAddress,
//     }));
//     return historyTransaction;
//   } catch (e) {
//     return parseErrorMsg(e);
//   }
// }

// function toWei(amount) {
//   const toWei = ethers.utils.parseUnits(amount.toString());
//   return toWei.toString();
// }

// function parseErrorMsg(e) {
//   const json = JSON.parse(JSON.stringify(e));
//   return json?.reason || json?.error?.message;
// }
