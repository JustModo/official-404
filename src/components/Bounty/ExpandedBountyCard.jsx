import React from "react";
import { motion } from "framer-motion";
import LanguageTag from "@components/Bounty/LanguageTag";

export default function ExpandedBountyCard({ data, onClick, layoutId }) {
  return (
    <motion.div
      key={index}
      layoutId={layoutId}
      className={`flex items-center justify-center overflow-hidden h-full`}
      style={{ userSelect: "none" }}
      onClick={onClick}
      layout
    >
      <motion.div
        className="bg-black w-11/12 md:w-4/5 h-4/5 relative py-6 px-4 rounded-xl"
        layout
      >
        <motion.h1 layout>Rating:{index}</motion.h1>
        <motion.h1
          className="text-xl font-bold mt-2"
          style={{ lineHeight: "1.6rem" }}
          layout
        >
          {data?.title}
        </motion.h1>
        <motion.div
          className="flex flex-row w-full justify-start items-center mt-2"
          layout
        >
          <motion.div className="rounded-2xl w-auto h-auto bg-pink-900 text-sm font-bold items-center justify-center flex px-4 py-1.5">
            DSA
          </motion.div>
        </motion.div>
        <motion.p
          className="text-base text-justify mt-2"
          style={{ lineHeight: "1.4rem" }}
        >
          {data?.content}
        </motion.p>
        <motion.div
          className="inline-flex flex-wrap justify-start items-center mt-3 gap-1 bg-secondary px-2 py-1 rounded-xl"
          layout
        >
          <LanguageTag language={"python"} />
          <LanguageTag language={"java"} />
          <LanguageTag language={"c"} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
