import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import { ClipboardIcon, PlusIcon } from "@heroicons/react/outline";

import { SingleCard, TransactionStatus } from "./index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";

const Card = () => {
  const { address } = useAccount();

  return (
    <section className="py-6 sm:py-12 bg-[#1A1A1A] text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">All Listed Token For Sale</h2>
          <p className="font-serif text-sm text-grsy-400">
            lorem this is a filler text for my lorem ipsum generator since not
            working.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <SingleCard index={1} name={"ETH"} walletAddress={address} />
          <SingleCard index={2} name={"MON"} walletAddress={address} />
          <SingleCard index={3} name={"Tether USD"} walletAddress={address} />
          <SingleCard index={4} name={"USD Coin"} walletAddress={address} />
        </div>
      </div>
    </section>
  );
};

export default Card;
