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
        {data?.average_rating > 0 ? (
          <StarRating rating={data?.average_rating} id={data?.id} />
        ) : (
          <h1 style={{ lineHeight: 1 }}>Not Rated</h1>
        )}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold break-words mt-2">
        {data?.title}
      </h1>
      <div className="flex flex-row w-full justify-start items-center mt-2 gap-2">
        <FieldTag tag={data?.field} />
        <div className="inline-flex flex-wrap justify-start items-center gap-1 bg-secondary px-2 py-1 rounded-xl">
          {data?.languages &&
            data?.languages
              .split(",")
              .map((language, index) => (
                <LanguageTag language={language} key={index} />
              ))}
        </div>
      </div>
      <p className="text-base mt-5 break-words">{data?.description}</p>
      <div className="flex flex-row gap-5 justify-center">
        <AddSolBtn id={params.bountyid} />
        <ViewSolBtn id={params.bountyid} />
      </div>
    </div>
  );
}

async function getBounty(id) {
  const formData = new FormData();
  formData.append("bounty_id", id);
  try {
    const response = await fetch(`${process.env.BASE_URL}/get-bounty-by-id`, {
      method: "POST",
      body: formData,
      next: { revalidate: 60 },
    });

    if (response.ok) {
      return await response.json();
    }
    const error = await response.text();
    console.log(error);
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
