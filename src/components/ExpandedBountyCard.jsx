import React from "react";
import { motion } from "framer-motion";

export default function ExpandedBountyCard({ index, data, onClick, layoutId }) {
  return (
    <motion.div
      key={index}
      layoutId={layoutId}
      className={`flex items-center overflow-hidden`}
      style={{ userSelect: "none" }}
      onClick={onClick}
      layout
    >
      <motion.div
        className="bg-black w-full h-4/5 relative py-6 px-4 rounded-xl"
        layout
      >
        <motion.h1 layout>Rating:{index}</motion.h1>
        <motion.h1
          className="text-xl font-bold mt-2"
          style={{ lineHeight: "1.25rem" }}
          layout
        >
          {data?.title}
        </motion.h1>
        <motion.div
          className="flex flex-row w-full justify-start items-center mt-2"
          layout
        >
          <motion.div className="rounded-2xl px-3 bg-red-600 text-sm font-bold">
            DSA
          </motion.div>
        </motion.div>
        <motion.p
          className="text-base line-clamp-3 text-justify mt-2"
          style={{ lineHeight: "1.125rem" }}
          layout
        >
          {data?.content}
        </motion.p>
        <motion.div
          className="flex flex-row justify-start items-center mt-3 gap-1 overflow-x-hidden"
          layout
        >
          <motion.div
            className="rounded-full w-10 h-10 bg-red-600 text-sm font-bold items-center justify-center flex flex-shrink-0"
            layout
          >
            Java
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
