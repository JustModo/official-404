import React, { useEffect, useRef, useState } from "react";

export default function BountyHook() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(page);
  const initialFetchRef = useRef(false);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  const loadMore = (fetchData) => {
    if (!loading) {
      console.log("Loaded More");
      setLoading(true);
      //   fetchData(page).then((newData) => {
      //     setData((prevData) => [...prevData, ...newData]);
      //     setPage((prevPage) => prevPage + 1);
      //     setLoading(false);
      //   });
      const newData = new Array(20)
        .fill(0)
        .map((_, index) => index + 1 + (pageRef.current - 1) * 20);
      console.log(pageRef.current);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  };

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
        loadMore();
      }
    };

    const main = document.getElementById("mainwindow");
    main.addEventListener("scroll", handleScroll);

    return () => main.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { data, loading };
}
