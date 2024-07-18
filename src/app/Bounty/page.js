"use client";
import React, { useRef, useState } from "react";
import useBountyHook from "../../components/BountyHook";

export default function Bounty() {
  const { data, loading } = useBountyHook();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 m-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="min-h-72 sm:min-h-96 md:min-h-96 break-inside-avoid flex items-end bg-slate-800 rounded-xl overflow-hidden"
        >
          <div className="bg-black h-5/6 w-full relative">
            <div
              className="absolute left-2 rounded-full w-24 h-24 bg-purple-600"
              style={{ top: "-3rem" }}
            />
            <label className="absolute top-2 left-28 text-xl font-semibold">@Modo</label>
            <label>Sum of first 20 prime numbers using loop</label>
            <div>Tag1</div>
            <div>Lang</div>
          </div>
        </div>
      ))}
    </div>
  );
}
