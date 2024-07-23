import React from "react";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <motion.div
      className="w-full min-h-full flex justify-center items-center snap-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">404 Not Found</h1>
    </motion.div>
  );
}
