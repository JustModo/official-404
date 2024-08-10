import React from "react";
import { motion } from "framer-motion";
import LanguageTag from "@components/Bounty/LanguageTag";
import StarRating from "@components/Bounty/StarRating";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import FieldTag from "./FieldTag";

export default function ExpandedBountyCard({ data, onClick, layoutId }) {
  const router = useRouter();
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
            {data?.average_rating > 0 ? (
              <StarRating rating={data?.average_rating} id={data?.id} />
            ) : (
              <h1 style={{ lineHeight: 1 }}>Not Rated</h1>
            )}
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
            <FieldTag tag={data?.field} />
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
            {data?.languages &&
              data?.languages
                .split(",")
                .map((language, index) => (
                  <LanguageTag language={language} key={index} />
                ))}
          </motion.div>
        </motion.div>
        <motion.div className="sticky mt-3 bottom-0 flex justify-end self-stretch">
          <motion.div
            className="btn btn-accent"
            onClick={() => {
              router.push(`/Bounty/${data?.id || ""}`);
            }}
          >
            View More
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
