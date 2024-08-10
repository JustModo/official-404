import React from "react";
import { notFound } from "next/navigation";
import BreadCrumbs from "./BreadCrumb";

export default async function layout({ children, params }) {
  const { bountyid } = params;

  const data = await getBounty(bountyid);
  if (!data) return notFound();

  return (
    <div className="w-full bg-base-100 h-full flex-grow flex flex-col">
      <BreadCrumbs bountyid={bountyid} />
      {children}
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
      cache: "no-store",
    });

    return response.ok;
    // const error = await response.text();
    // console.log(error);
    // return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
