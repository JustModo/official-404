import React from "react";
import { motion } from "framer-motion";
import LanguageTag from "@components/Bounty/LanguageTag";
import StarRating from "@components/Bounty/StarRating";
import { IoIosArrowBack } from "react-icons/io";

export default function ExpandedBountyCard({ data, onClick, layoutId }) {
  return (
    <motion.div
      key={data?.id}
      layoutId={layoutId}
      className={`flex items-center justify-center overflow-hidden h-full w-full z-50`}
      style={{ userSelect: "none" }}
      layout
    >
      <motion.div
        className="bg-neutral w-11/12 md:w-4/5 h-4/5 relative py-6 px-4 md:px-10 rounded-xl overflow-y-auto flex flex-col justify-between"
        layout
      >
        <motion.div>
          <motion.div
            className="w-full flex justify-between items-center"
            layout
          >
            <motion.div className="btn-link" onClick={onClick}>
              <IoIosArrowBack className="h-5 w-5" />
            </motion.div>
            <StarRating rating={4} id={data?.id} />
          </motion.div>
          <motion.h1
            className="text-3xl font-bold mt-10"
            style={{ lineHeight: "1.6rem" }}
            layout
          >
            {data?.title}
          </motion.h1>
          <motion.div
            className="flex flex-row w-full justify-start items-center mt-5"
            layout
          >
            <motion.div className="rounded-2xl w-auto h-auto bg-pink-900 text-sm font-bold items-center justify-center flex px-4 py-1.5">
              DSA
            </motion.div>
          </motion.div>
          <motion.p
            className="text-base text-justify mt-10"
            style={{ lineHeight: "1.4rem" }}
          >
            {data?.description}
          </motion.p>
          <motion.div
            className="inline-flex gap-2 bg-secondary px-2 py-1 rounded-xl mt-5"
            layout
          >
            <LanguageTag language={data?.language} />
          </motion.div>
        </motion.div>
        <motion.div className="sticky mt-3 bottom-0 flex justify-end self-stretch">
          <motion.div
            className="btn btn-accent"
            onClick={(e) => e.preventDefault()}
          >
            View More
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
