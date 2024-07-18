"use client";
import React, { useRef, useState } from "react";
import useBountyHook from "../../components/BountyHook";

export default function Bounty() {
  const { data, loading } = useBountyHook();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 m-4 items-start">
      {data.map((item, index) => (
        <>
          <div
            key={index}
            className="flex items-end rounded-xl overflow-hidden"
          >
            <div className="bg-black w-full relative py-6 px-4">
              <h1>Rating:*****</h1>
              <h1
                className="text-xl font-bold mt-2"
                style={{ lineHeight: "1.25rem" }}
              >
                Sum of first 20 prime numbers using loop Sum of first 20 prime
                numbers using loop
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
                Lorem ips um dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <div
            key={index}
            className="flex items-end rounded-xl overflow-hidden"
          >
            <div className="bg-black w-full relative py-6 px-4">
              <h1>Rating:*****</h1>
              <h1
                className="text-xl font-bold mt-2"
                style={{ lineHeight: "1.25rem" }}
              >
                Sum of first 20 prime np
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
                Lorem ips um dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            
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
        </>
      ))}
    </div>
  );
}
