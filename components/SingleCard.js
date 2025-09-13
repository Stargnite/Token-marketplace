import React, { useEffect, useState, useRef } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";

import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed.");

useEffect(() => {
  if (name && walletAddress) {
    fetchTokenBalance();
  } else {
    setBalance("-");
  }
}, [name, walletAddress]);


  async function fetchTokenBalance() {
  try {
    const bal = await getTokenBalance(name, walletAddress);
    console.log("Raw balance response >>>", bal);

    // Ensure bal is a BigNumber
    if (!bal || typeof bal.toString !== "function") {
      console.error("Invalid balance response (likely revert):", bal);
      setBalance("0");
      return;
    }

    const fBal = ethers.utils.formatUnits(bal, 18); // no need to bal.toString()
    setBalance(fBal.toString());
  } catch (err) {
    console.error("fetchTokenBalance error", err);
    setBalance("0");
  }
}

  
//   async function fetchTokenBalance() {
//   try {
//     const bal = await getTokenBalance(name, walletAddress);
//     console.log("Raw balance response >>>", bal);

//     if (!bal || bal.toString === undefined) {
//       console.error("Invalid balance response", bal);
//       setBalance("0");
//       return;
//     }

//     const fBal = ethers.utils.formatUnits(bal.toString(), 18);
//     setBalance(fBal.toString());
//   } catch (err) {
//     console.error("fetchTokenBalance error", err);
//     setBalance("0");
//   }
// }
  
  // async function fetchTokenBalance() {
  //   const bal = await getTokenBalance(name, walletAddress);

  //   const fBal = ethers.utils.formatUnits(bal.toString(), 18);
  //   setBalance(fBal.toString());
  // }

  // async function fetchTokenAddress() {
  //   const address = await getTokenAddress(name);
  //   setTokenAddress(address);
  // }

  return (
    <article className="felx flex-col bg-[#212429]">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-62 bg-gray-500"
          src={`img/${index + 1}.png`}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs track uppercase hover:underline text-[#7765f3]"
        >
          {name} 100 M Supply
        </a>

        <h3 className="flex py-2 text-sm font-semibold leading-3">
          Get {name} token, limited supply available
        </h3>

        {/* <div className="flex px-4 pt-[10px]">
          <div
            className="flex items-center bg-zinc-300 w-fit p-2 px-3
          rounded-l-lg"
          >
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>

          <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
            <copyIcon.icon
              className="h-6 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tokenAddress);
                setCopyIcon({ icon: ClipboardCheckIcon });
              }}
            />
          </div>
        </div> */}
        <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
          <div className="flex items-center bg-zinc-900 text-zinc-300 w-full p-2 px-3 rounded-l-lg">
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>

          <div className="flex items-center p-2 px-2 bg-[#7765FE] rounded-r-lg">
            <copyIcon.icon
              className="h-6 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tokenAddress);
                setCopyIcon({ icon: ClipboardCheckIcon });
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
