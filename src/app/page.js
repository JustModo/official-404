"use client"; // Ensure this component runs on the client side

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden">
      <h1 className="text-5xl font-bold text-white">Welcome to CLUB404!</h1>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, loop: Infinity }}
        className="fixed inset-0 z-[-1] blur-3xl opacity-50 flex justify-center items-center animated-gradient"
      /> */}
    </div>
  );
}
