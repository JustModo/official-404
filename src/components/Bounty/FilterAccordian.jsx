import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";

export default function FilterAccordian() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex flex-col mt-2 px-2 w-full ">
      <div className="flex flex-row">
        <label className="input input-bordered flex items-center gap-2 bg-neutral w-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="opacity-70 w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div>
          <div
            className="btn bg-neutral rounded-b-none"
            onClick={() => setisOpen((prev) => !prev)}
          >
            <FaFilter />
          </div>
        </div>
      </div>

      <motion.div
        className="w-full bg-neutral overflow-hidden rounded-b-lg"
        initial={{ height: "0" }}
        animate={{ height: isOpen ? "auto" : "0px" }}
      >
        <div className="mx-4 my-2">Hello</div>
      </motion.div>
    </div>
  );
}
