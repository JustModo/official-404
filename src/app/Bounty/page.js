"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useBountyHook from "../../components/Bounty/BountyHook";
import MasoneryGrid from "../../components/MasoneryGrid";
import BountyCard from "../../components/Bounty/BountyCard";
import ExpandedBountyCard from "../../components/Bounty/ExpandedBountyCard";
import BountyHome from "../../components/Bounty/BountyHome";
import FilterAccordian from "../../components/Bounty/FilterAccordian";
import ErrorPage from "@components/Bounty/ErrorPage";
import { useRouter } from "next/navigation";

export default function Bounty() {
  const { data, loading, connectionErr, isEndOfPage } = useBountyHook();
  const router = useRouter();

  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <>
      <BountyHome />
      {!connectionErr ? (
        <div className="w-full h-auto pb-10 flex flex-col items-center snap-start">
          <FilterAccordian />
          <MasoneryGrid>
            {data &&
              data.map((item, index) => (
                <motion.div
                  className="bg-opacity-0 flex"
                  key={`container-${item.id}`}
                >
                  <BountyCard
                    data={item}
                    layoutId={`item-${item.id}`}
                    onClick={() => {
                      setSelectedId(item.id);
                      setSelectedData(item);
                    }}
                  />
                </motion.div>
              ))}
          </MasoneryGrid>
          <AnimatePresence>
            {loading && (
              <div className="mt-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
            {isEndOfPage && (
              <div className="text-xl font-bold mt-4">
                Nothing More to See :D
              </div>
            )}
            {selectedId !== null && (
              <motion.div
                className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex z-30 justify-center items-center bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={"container-selection"}
              >
                <ExpandedBountyCard
                  data={selectedData}
                  layoutId={`item-${selectedId}`}
                  onClick={() => {
                    setSelectedId(null);
                    setSelectedData(null);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="btn btn-accent fixed bottom-4 right-4 text-xl font-extrabold"
            onClick={() => {
              router.push("/Bounty/CreateBounty");
            }}
          >
            +
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
