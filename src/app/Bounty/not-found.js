import React from "react";
import Button from "./Button";

export default function notFound() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-neutral flex-col">
      <h1 className="text-xl font-semibold">Content Doesn't Exist</h1>
      <Button />
    </div>
  );
}
