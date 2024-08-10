import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoModal({ title, onClose, open }) {

  useEffect(() => {
    if (!open) return;

    const handleClick = () => {
      onClose();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="flex items-center justify-center fixed top-16 left-0 w-full z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div role="alert" className="alert bg-slate-300 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <motion.span
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-black"
            >
              {title}
            </motion.span>
            <div>
              <button
                className="btn btn-sm btn-ghost text-black"
                type="button"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
