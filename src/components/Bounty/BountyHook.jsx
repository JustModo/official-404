import React, { useEffect, useRef, useState } from "react";

export default function BountyHook() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [connectionErr, setConnectionErr] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const pageRef = useRef(page);
  const dataRef = useRef(data);
  const initialFetchRef = useRef(false);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const loadMore = async () => {
    if (loading || isEndOfPage) return;

    setLoading(true);

    try {
      if (!hasSession) {
        const success = await getSession();
        if (!success) {
          setConnectionErr(true);
          return;
        }
      }

      const newData = await handleDataRequest(page);

      if (!newData) {
        console.error("Failed to get Data");
        setConnectionErr(true);
        return;
      }

      if (Array.isArray(newData) && newData.length === 0) {
        setIsEndOfPage(true);
        console.log("END");
        return;
      }

      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more data:", error);
      setConnectionErr(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDataRequest = async (page) => {
    try {
      const formData = new FormData();
      formData.append("page_number", page);
      const res = await fetch("/api/get-bounty", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData.message;
        console.error(errorMessage);
        return null;
      }
      const data = await res.json();
      return data.message;
    } catch (err) {
      console.error(err);
    }
  };

  const getSession = async () => {
    try {
      const res = await fetch("/api/bounty-session", {
        method: "POST",
      });

      if (res.ok) {
        console.log("Got Sess");
        setHasSession(true);
        return true;
      } else {
        const errorData = await res.json();
        const errorMessage = errorData.message;
        console.error(errorMessage);
        setHasSession(false);
        return false;
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!initialFetchRef.current) {
      async function call() {
        await loadMore();
      }
      call();
      console.log("Initial Load");
    }
    return () => {
      initialFetchRef.current = true;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        main.scrollTop + main.clientHeight >= main.scrollHeight - 2 &&
        hasSession &&
        !isEndOfPage
      ) {
        console.log("End of Page");
        const asyncLoadMore = async () => {
          await loadMore();
        };
        asyncLoadMore();
      }
    };

    const main = document.getElementById("mainwindow");
    main.addEventListener("scroll", handleScroll);

    return () => main.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { data, loading, connectionErr, isEndOfPage };
}
