import LanguageTag from "@/components/Bounty/LanguageTag";
import FieldTag from "@/components/Bounty/FieldTag";
import StarRating from "@/components/Bounty/StarRating";
import AddSolBtn from "@/components/Bounty/AddSolBtn";
import ViewSolBtn from "@/components/Bounty/ViewSolBtn";
import React from "react";

export default async function page({ params }) {
  const data = await getBounty(params.bountyid);

  return (
    <div className="w-full p-5 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row">
        <StarRating rating={3} id={data?.id} />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold break-words mt-5">
        To make text wrap at any point, including breaking a word in the middle,
        you can use the CSS property word-break.
      </h1>
      <div className="flex flex-row w-full justify-start items-center mt-2 gap-2">
        <FieldTag tag={"dsa"} />
        <div className="inline-flex flex-wrap justify-start items-center gap-1 bg-secondary px-2 py-1 rounded-xl">
          <LanguageTag language={"python"} />
        </div>
      </div>
      <p className="text-base mt-5 break-words">
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
      <div className="flex flex-row gap-5 justify-center">
        <AddSolBtn id={params.bountyid} />
        <ViewSolBtn id={params.bountyid} />
      </div>
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
