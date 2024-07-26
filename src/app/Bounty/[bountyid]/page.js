import LanguageTag from "@/components/Bounty/LanguageTag";
import StarRating from "@/components/Bounty/StarRating";
import React from "react";

export default async function page({ params }) {
  const data = await getBounty(params.bountyid);

  return (
    <div className="w-full p-5">
      <div className="flex flex-row">
        <StarRating rating={3} id={data?.id} />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold break-words mt-5 min-w-96">
        To make text wrap at any point, including breaking a word in the middle,
        you can use the CSS property word-break.
      </h1>
      <div className="flex flex-row w-full justify-start items-center mt-2 gap-2">
        <div className="rounded-2xl w-auto h-auto bg-pink-900 text-sm font-bold items-center justify-center flex px-4 py-1.5">
          DSA
        </div>
        <div className="inline-flex flex-wrap justify-start items-center gap-1 bg-secondary px-2 py-1 rounded-xl">
          <LanguageTag language={"python"} />
        </div>
      </div>
      <p className="text-base mt-5 break-words min-w-96">
        at ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50) at
        ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50) at
        ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50) at
        ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50) at
        ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50) at
        ErrorBoundary (webpack-internal:/// (ssr)/./node_modules
        /next/dist/client /components/error- boundary.js:159 :50)
      </p>
    </div>
  );
}

async function getBounty(id) {
  const formData = new FormData();
  formData.append("id", id);
  try {
    const response = await fetch("https://club.modo-dev.com/get-bounty-by-id", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return response.json();
    }
    const error = await response.text();
    console.log(error);
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
