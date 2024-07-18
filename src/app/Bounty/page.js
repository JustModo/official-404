"use client";
import React from "react";
import useBountyHook from "../../components/BountyHook";
import BountyCard from "../../components/BountyCard";
import { Masonry } from "@mui/lab";

export default function Bounty() {
  const { data, loading } = useBountyHook();

  const DATA1 = {
    title:
      "Sum of first 20 prime numbers using loop Sum of first 20 prime numbers using loop",
    content:
      "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderitin voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  const DATA2 = {
    title: "Sum of first 20 prime numbers",
    content:
      "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ",
  };
  const DATA3 = {
    title:
      " What is Life ?",
    content:
      "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex  ",
  };

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 m-4 items-start">
    <div className="w-full pb-20 flex flex-col items-center">
      <Masonry
        columns={{ xl: 4, md: 3, sm: 2, xs: 1 }}
        spacing={2}
        className="m-1"
      >
        {data.map((item, index) => (
          <>
            <BountyCard index={ index } data={DATA1} />
            <BountyCard index={ index } data={DATA2} />
            <BountyCard index={ index } data={DATA3} />
          </>
        ))}
      </Masonry>
      {loading && <div className="text-xl font-bold">Loading....</div>}
    </div>
    // </div>
  );
}
