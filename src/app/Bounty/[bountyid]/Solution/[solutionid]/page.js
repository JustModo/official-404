import { notFound } from "next/navigation";
import React from "react";
// import FolderBreadCrumb from "./components/FolderBreadCrumb";
import CodeWindow from "./components/CodeWindow";

export default async function page({ params }) {
  const data = await getSolution(params.solutionid);
  if (!data) return notFound();
  return (
    <>
      <div className="divider m-0 p-0 h-auto" />
      {/* <FolderBreadCrumb /> */}
      <div className="flex flex-grow bg-base-300 overflow-hiddens">
        <CodeWindow recievedData={data} />
      </div>
    </>
  );
}

async function getSolution(id) {
  const formData = new FormData();
  formData.append("solution_id", id);
  try {
    const response = await fetch(`${process.env.BASE_URL}/get-solution-by-id`, {
      method: "POST",
      body: formData,
      cache: "no-store",
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
