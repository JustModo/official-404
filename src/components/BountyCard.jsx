import React from "react";

export default function BountyCard({ index, data }) {
  return (
    <div
      key={index}
      className="flex items-end rounded-xl overflow-hidden"
      style={{ userSelect: "none" }}
    >
      <div className="bg-black w-full relative py-6 px-4">
        <h1>Rating:{index}</h1>
        <h1
          className="text-xl font-bold mt-2"
          style={{ lineHeight: "1.25rem" }}
        >
          {data?.title}
        </h1>
        <div className="flex flex-row w-full justify-start items-center mt-2">
          <div className="rounded-2xl px-3 bg-red-600 text-sm font-bold">
            DSA
          </div>
        </div>
        <p
          className="text-base line-clamp-3 text-justify mt-2"
          style={{ lineHeight: "1.125rem" }}
        >
          {data?.content}
        </p>
        <div className="flex flex-row justify-start items-center mt-3 gap-1 overflow-x-hidden">
          <div className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0">
            Java
          </div>
          <div className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0">
            Java
          </div>
          <div className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0">
            Java
          </div>
          <div className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0">
            Java
          </div>
          <div className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0">
            Java
          </div>
        </div>
      </div>
    </div>
  );
}
