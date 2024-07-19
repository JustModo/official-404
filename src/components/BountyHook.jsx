import React, { useEffect, useRef, useState } from "react";

export default function BountyHook() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(page);
  const dataRef = useRef(data);
  const initialFetchRef = useRef(false);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const loadMore = (fetchData) => {
    if (!loading) {
      console.log("Loaded More");
      setLoading(true);

      const newData = new Array(20).fill(0).map((_, index) => ({
        id: generateUniqueNumber(dataRef.current),
        title: getRandomOutput(),
        content:
          "Lorem ips um dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderitin voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }));
      console.log(pageRef.current);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  };

  //____________________________________________________________________ DEV FUNCTIONS ____________________________________________________________________

  function getRandomOutput() {
    const outputs = [
      "Sum of first 20 prime numbers using loop Sum of first 20 prime  ",
      "Sum of first 20 prime numbers ",
      "Sum of first 20 prime numbers using loop Sum of first 20 prime numbers using loop Sum of first 20 prime numbers using loop Sum of first 20 prime numbers using loop  ",
    ];

    const randomIndex = Math.floor(Math.random() * outputs.length);

    return outputs[randomIndex];
  }

  function generateUniqueNumber(data) {
    const generateRandomNumber = () =>
      Math.floor(100000 + Math.random() * 900000);

    let uniqueNumber;
    const existingNumbers = new Set(data);

    do {
      uniqueNumber = generateRandomNumber();
    } while (existingNumbers.has(uniqueNumber));

    return uniqueNumber;
  }

  //____________________________________________________________________ DEV FUNCTIONS ____________________________________________________________________

  useEffect(() => {
    if (!initialFetchRef.current) loadMore();
    return () => {
      initialFetchRef.current = true;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (main.scrollTop + main.clientHeight >= main.scrollHeight - 2) {
        console.log("End of Page");
        setLoading(true);
        loadMore();
        // const timer = setTimeout(() => {
        // }, 3000);
        // return () => clearTimeout(timer);
      }
    };

    const main = document.getElementById("mainwindow");
    main.addEventListener("scroll", handleScroll);

    return () => main.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { data, loading };
}
