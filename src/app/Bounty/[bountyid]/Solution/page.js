import React from "react";
import SolutionCard from "./SolutionCard";

export default async function page({ params }) {
  const data = await getSolList(params.bountyid);
  return (
    <div className="w-full p-5">
      <h1 className="font-bold text-3xl ml-1">Solutions</h1>
      <div className="stripecontainer w-full flex flex-col mt-5 overflow-hidden shadow-2xl rounded-lg">
        {data &&
          data?.map((item) => (
            <SolutionCard
              key={item?.solution_id}
              id={item?.solution_id}
              likes={item?.likes}
              author={item?.creator_display_name}
              uid={item?.creator_id}
            />
          ))}
      </div>
    </div>
  );
}

async function getSolList(id) {
  const formData = new FormData();
  formData.append("bounty_id", id);
  try {
    const response = await fetch(
      "https://club.modo-dev.com/get-solution-list",
      {
        method: "POST",
        body: formData,
      }
    );

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
