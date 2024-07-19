import React, { Children, cloneElement, useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function MasoneryGrid({ children }) {
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);
  const [col4, setCol4] = useState([]);

  const isXl = useMediaQuery({ minWidth: 1280 });
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isSm = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isXs = useMediaQuery({ maxWidth: 639 });

  const [noCols, setNoCols] = useState(1);

  useEffect(() => {
    if (isXl) setNoCols(4);
    else if (isMd) setNoCols(3);
    else if (isSm) setNoCols(2);
    else setNoCols(1);
  }, [isXl, isMd, isSm, isXs]);

  useEffect(() => {
    console.log(noCols);
  }, [noCols]);

  useEffect(() => {
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

    setCol1(first);
    setCol2(second);
    setCol3(third);
    setCol4(fourth);
  }, [children, noCols]);

  return (
    <div className="w-full columns-1 sm:columns-2 md:columns-3 xl:columns-4 p-2">
      <div className="first-col flex flex-1 flex-col gap-4 break-inside-avoid">
        {col1.map((child, index) => cloneElement(child))}
      </div>
      {noCols > 1 && (
        <div className="second-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col2.map((child, index) => cloneElement(child))}
        </div>
      )}
      {noCols > 2 && (
        <div className="third-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col3.map((child, index) => cloneElement(child))}
        </div>
      )}
      {noCols > 3 && (
        <div className="fourth-col flex flex-1 flex-col gap-4 break-inside-avoid">
          {col4.map((child, index) => cloneElement(child))}
        </div>
      )}
    </div>
  );
}
