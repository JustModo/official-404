"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center snap-start h-full">
      <h1 className="text-5xl font-bold text-white">Welcome to Next.js!</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, loop: Infinity }}
        className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#6d94ff] to-[#5d00ff] blur-3xl opacity-50 flex justify-center align-middle"
      />
    </div>
  );
}
