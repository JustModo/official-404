import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }) {
  const data = await getSolution(params.solutionid);
  // if (!data) return notFound();
  return <div>{params.solutionid}</div>;
}

async function getSolution(id) {
  const formData = new FormData();
  formData.append("id", id);
  try {
    const response = await fetch(
      "https://club.modo-dev.com/get-solution-by-id",
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
