import React from "react";

export default function FieldTag({ tag }) {
  const fieldObj = {
    dsa: "DSA",
  };

  return (
    <div className="rounded-2xl w-auto h-auto bg-pink-900 text-sm font-bold items-center justify-center flex px-4 py-1.5">
      {fieldObj[tag] || "Other"}
    </div>
  );
}
