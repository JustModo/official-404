import React from "react";
import { FaHeart } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-full p-5">
      <h1 className="font-bold text-3xl ml-1">Solutions</h1>
      <div className="stripecontainer w-full flex flex-col mt-5 overflow-hidden shadow-2xl rounded-lg">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div>
    </div>
  );
}

function SolutionCard() {
  return (
    <div className="flex items-center px-2 md:px-5 py-2 h-15 justify-between hover:brightness-105 duration-200 ease-in-out cursor-pointer">
      <div className="flex flex-row items-center">
        <div className="h-10 w-10 rounded-full bg-neutral"></div>
        <div className="flex flex-row items-baseline">
          <h1 className="ml-5 font-semibold align-baseline text-ellipsis whitespace-nowrap overflow-hidden max-w-24 md:max-w-48">
            Mododsdsveaefweafewfaw
          </h1>
          <p className="menu-title p-0 m-0 ml-2 text-xs">01/11/24</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <FaHeart className="h-4" />
        <p className="font-semibold ml-1">40</p>
      </div>
    </div>
  );
}
