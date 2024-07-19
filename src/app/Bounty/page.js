"use client";
import React, { useState } from "react";
import useBountyHook from "../../components/BountyHook";
import MasoneryGrid from "../../components/MasoneryGrid";
import BountyCard from "../../components/BountyCard";
import ExpandedBountyCard from "../../components/ExpandedBountyCard";
import { AnimatePresence, motion } from "framer-motion";

export default function Bounty() {
  const { data, loading, temp } = useBountyHook();

  const DATA1 = {
    title:
      "Sum of first 20 prime numbers using loop Sum of first 20 prime numbers using loop ",
    content:
      "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderitin voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="w-full pb-20 flex flex-col items-center">
      <AnimatePresence>
        <MasoneryGrid>
          {data.map((item, index) => (
            <motion.div className="bg-opacity-0 flex" key={item.id}>
              <BountyCard
                index={index}
                data={item}
                layoutId={`item-${item.id}`}
                onClick={() => setSelectedId(item.id)}
              />
            </motion.div>
          ))}
        </MasoneryGrid>
        <div
          className="fixed bottom-0 right-0 btn bg-pink-600"
          onClick={() => temp()}
        >
          P
        </div>
        {loading && <div className="text-xl font-bold">Loading....</div>}
        {selectedId !== null && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex z-30 justify-center items-center bg-black"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ExpandedBountyCard
              index={selectedId}
              data={DATA1}
              layoutId={`item-${selectedId}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
