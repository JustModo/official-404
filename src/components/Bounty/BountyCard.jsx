import React from "react";
import { motion } from "framer-motion";
import LanguageTag from "@components/Bounty/LanguageTag";
import StarRating from "@components/Bounty/StarRating";

export default function BountyCard({ data, onClick, layoutId }) {
  return (
    <motion.div
      layoutId={layoutId}
      className={`flex items-center overflow-hidden h-full w-full`}
      style={{ userSelect: "none" }}
      onClick={onClick}
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-neutral w-full relative py-6 px-4 rounded-xl"
        layout
      >
        <motion.h1 layout>
          <StarRating rating={data?.average_rating} id={data?.id} />
        </motion.h1>
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
          {data?.description}
        </motion.p>
        <motion.div
          className="inline-flex flex-wrap justify-start items-center mt-3 gap-1 bg-secondary px-2 py-1 rounded-xl"
          layout
        >
          <LanguageTag language={data?.language} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
