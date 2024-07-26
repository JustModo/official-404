import React from "react";
import { notFound } from "next/navigation";
import BreadCrumbs from "./BreadCrumb";

export default async function layout({ children, params }) {
  const { bountyid } = params;

  const data = await getBounty(bountyid);
  // if (!data) return notFound();

  return (
    <div className="w-full bg-neutral h-full">
      <BreadCrumbs bountyid={bountyid} />
      {children}
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

    return response.ok;
    // const error = await response.text();
    // console.log(error);
    // return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
