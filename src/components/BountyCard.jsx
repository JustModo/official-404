import React from "react";
import { motion } from "framer-motion";

export default function BountyCard({ index, data, onClick, layoutId }) {
  return (
    <motion.div
      key={index}
      layoutId={layoutId}
      className={`flex items-center overflow-hidden h-full`}
      style={{ userSelect: "none" }}
      onClick={onClick}
      layout
    >
      <motion.div
        className="bg-black w-full relative py-6 px-4 rounded-xl"
        layout
      >
        <motion.h1 layout>Rating:{index}</motion.h1>
        <motion.h1
          className="text-xl font-bold mt-2"
          style={{ lineHeight: "1.6rem" }}
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
          className="text-base line-clamp-3 text-justify mt-2"
          style={{ lineHeight: "1.4rem" }}
        >
          {data?.content}
        </motion.p>
        <motion.div
          className="flex flex-row justify-start items-center mt-3 gap-1 overflow-x-hidden"
          layout
        >
          <motion.div
            className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5"
            layout
          >
            Data Science
          </motion.div>
          <motion.div
            className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5"
            layout
          >
            C
          </motion.div>
          <motion.div
            className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5"
            layout
          >
            Linux
          </motion.div>
          <motion.div
            className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5"
            layout
          >
            Python
          </motion.div>
          <motion.div
            className="rounded-2xl w-auto h-auto bg-blue-800 text-sm font-bold items-center justify-center flex px-4 py-1.5"
            layout
          >
            Ransomware
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
