import React from "react";
import SolutionCard from "./SolutionCard";

export default function page() {
  return (
    <div className="w-full p-5">
      <h1 className="font-bold text-3xl ml-1">Solutions</h1>
      <div className="stripecontainer w-full flex flex-col mt-5 overflow-hidden shadow-2xl rounded-lg">
        <SolutionCard id={"123"} />
        <SolutionCard id={"123"} />
        <SolutionCard id={"123"} />
        <SolutionCard id={"123"} />
      </div>
    </div>
  );
}
