"use client";
import React, { useState } from "react";
import useBountyHook from "../../components/BountyHook";
import BountyCard from "../../components/BountyCard";
import ExpandedBountyCard from "../../components/ExpandedBountyCard";
import { Masonry } from "@mui/lab";
import { AnimatePresence, motion } from "framer-motion";

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
      " dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utali",
    content:
      "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex  ",
  };

  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimatePresence>
      <div className="w-full pb-20 flex flex-col items-center">
        <Masonry
          columns={{ xl: 4, md: 3, sm: 2, xs: 1 }}
          spacing={2}
          className="m-0"
        >
          {data.map((item, index) => (
            <motion.div className="bg-opacity-0 flex" layout>
              <BountyCard
                index={index}
                data={DATA1}
                layoutId={`item-${index}`}
                onClick={() => setSelectedId(index)}
              />
            </motion.div>
          ))}
        </Masonry>
        {loading && <div className="text-xl font-bold">Loading....</div>}
      </div>
      {selectedId !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex z-30 justify-center items-center"
          onClick={() => setSelectedId(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <ExpandedBountyCard
            className={"w-4/5"}
            index={selectedId}
            data={DATA1}
            layoutId={`item-${selectedId}`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
