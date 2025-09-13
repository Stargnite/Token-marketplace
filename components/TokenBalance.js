import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import { ClipboardIcon, ClipboardCheckIcon, PlusIcon } from "@heroicons/react/outline";

import TransactionStatus from "./index";
import { getTokenAddress, getTokenBalance, increaseAllowance } from "../utils/context";

const TokenBalance = ({ name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    try {
      const bal = await getTokenBalance(name, walletAddress);
      console.log("Wallet balance >>>>>>>>>>>", bal);
      // balance could be a BigNumber (or returned error string)
      if (!bal || typeof bal === "string") {
        setBalance("-");
        return;
      }
      const fBal = ethers.utils.formatUnits(bal, 18);
      setBalance(fBal.toString());
    } catch (err) {
      notifyError(String(err));
      setBalance("-");
    }
  }

  async function fetchTokenAddress() {
    try {
      const address = await getTokenAddress(name);
      setTokenAddress(address);
    } catch (err) {
      console.error(err);
      setTokenAddress(undefined);
    }
  }

  const Icon = copyIcon.icon;

  return (
    <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">{balance}</p>
      </div>

      <div className="flex items-center p-2 px-2 bg-[#7765FE] rounded-r-lg">
        <Icon
          className="h-6 cursor-pointer"
          onClick={() => {
            if (tokenAddress) {
              navigator.clipboard.writeText(tokenAddress);
              setCopyIcon({ icon: ClipboardCheckIcon });
            }
          }}
        />
      </div>

      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  );
};

export default TokenBalance;


























// import { React, useState, useEffect, use } from "react";
// import { ethers } from "ethers";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ClipboardIcon,
//   ClipboardCheckIcon,
//   PlusIcon,
// } from "@heroicons/react/outline";

// import TransactionStatus from "./index";
// import {
//   getTokenAddress,
//   getTokenBalance,
//   increaseAllowance,
// } from "../utils/context";

// const TokenBalance = ({ name, walletAddress }) => {
//   const [balance, setBalance] = useState("-");
//   const [tokenAddress, setTokenAddress] = useState();
//   const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
//   const [txPending, setTxPending] = useState(false);

//   const notifyError = (msg) => toast.error(msg, { duration: 6000 });
//   const notifySuccess = () => toast.success("Transaction completed.");

//   useEffect(() => {
//     if (name && walletAddress) {
//       fetchTokenBalance();
//       fetchTokenAddress();
//     } else setBalance("-");
//   }, [name, walletAddress]);

//   async function fetchTokenBalance() {
//     const bal = await getTokenBalance(name, walletAddress);
//     console.log("Wallet balance >>>>>>>>>>>", bal);
//     const fBal = ethers.utils.formatUnits(bal.toString(), 18);
//     setBalance(fBal.toString());
//   }

//   async function fetchTokenAddress() {
//     const address = await getTokenAddress(name);
//     setTokenAddress(address);
//   }

//   return (
//     <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
//       <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
//         <p className="text-sm">{name}</p>
//         <p className='bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100'>
//           {balance}
//         </p>
//       </div>

//       <div className="flex items-center p-2 px-2 bg-[#7765FE] rounded-r-lg">
//         <copyIcon.icon
//           className="h-6 cursor-pointer"
//           onClick={() => {
//             navigator.clipboard.writeText(tokenAddress);
//             setCopyIcon({icon: ClipboardCheckIcon})
//           }} />
//       </div>

//       {txPending && <TransactionStatus />}

//       <Toaster />
//     </div>
//   );
// };

// export default TokenBalance;
