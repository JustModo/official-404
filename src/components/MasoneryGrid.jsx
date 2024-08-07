import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

export default function MasoneryGrid({ children }) {
  const isXl = useMediaQuery({ minWidth: 1280 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isSm = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isXs = useMediaQuery({ maxWidth: 639 });

  const [noCols, setNoCols] = useState(1);

  const updateNoCols = useCallback(() => {
    if (isXl) setNoCols(4);
    else if (isMd) setNoCols(3);
    else if (isSm) setNoCols(2);
    else setNoCols(1);
  }, [isXl, isMd, isSm, isXs]);

  useEffect(() => {
    updateNoCols();
  }, [updateNoCols]);
  const [col1, col2, col3, col4] = useMemo(() => {
    const first = [];
    const second = [];
    const third = [];
    const fourth = [];

    Children.forEach(children, (child, index) => {
      if (index % noCols === 0) {
        first.push(child);
      } else if (index % noCols === 1) {
        second.push(child);
      } else if (index % noCols === 2) {
        third.push(child);
      } else {
        fourth.push(child);
      }
    });

    return [first, second, third, fourth];
  }, [children, noCols]);

  return (
    <motion.div className="w-full columns-1 sm:columns-2 md:columns-3 xl:columns-4 p-2">
      <motion.div className="first-col flex flex-1 flex-col gap-4 break-inside-avoid">
        {col1.map((child, index) => cloneElement(child))}
      </motion.div>
      {noCols > 1 && (
        <motion.div className="second-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col2.map((child, index) => cloneElement(child))}
        </motion.div>
      )}
      {noCols > 2 && (
        <motion.div className="third-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col3.map((child, index) => cloneElement(child))}
        </motion.div>
      )}
      {noCols > 3 && (
        <motion.div className="fourth-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col4.map((child, index) => cloneElement(child))}
        </motion.div>
      )}
    </motion.div>
  );
}
