import React from "react";

export default function BountyCard({ index, data }) {
  return (
    // Main Card
    <div
      key={index}
      className="flex flex-col rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
      style={{ userSelect: "none" }}
    >
      <div className="bg-black w-full relative py-6 px-4">
        <h1>Rating : {index}</h1>
        <h1
          className="text-xl font-bold mt-2"
          style={{ lineHeight: "1.6rem" }}
        >
          {data?.title}
        </h1>
        <div className="flex flex-row w-full justify-start items-center mt-2">
          <div className="rounded-2xl w-auto h-auto bg-pink-900 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            DSA
          </div>
        </div>
        <p
          className="text-base line-clamp-3 text-justify mt-2"
          style={{ lineHeight: "1.4rem" }}
        >
          {data?.content}
        </p>
        <div className="flex flex-wrap justify-start items-center mt-3 gap-2">
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            Data Science
          </div>
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            C##
          </div>
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            C
          </div>
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            Linux
          </div>
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            Python
          </div>
          <div className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            Ransomware
          </div>
        </div>
      </div>
    </div>
  );
}
