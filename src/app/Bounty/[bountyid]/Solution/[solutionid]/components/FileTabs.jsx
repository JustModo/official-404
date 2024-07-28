import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

export default function FileTabs({ data }) {
  const selected = false;

  return (
    <div className="w-full h-8 flex flex-row flex-grow-0 flex-shrink-0">
      {data.map((item, index) => (
        <Tab
          title={item?.title}
          content={item?.content}
          type={item?.type}
          key={index}
        />
      ))}
    </div>
  );
}

function Tab({ title, type, content }) {
  const [contentData, setContentData] = useState(content);
  const selected = false;

  return (
    <div
      className={`bg-base-300 px-4 text-center flex justify-center items-center rounded-t-md text-sm tab-border-2 cursor-pointer flex-row gap-1`}
      style={{ backgroundColor: `${selected && "#1e1e1e"}` }}
      key={title}
    >
      <CiFileOn />
      {title}
    </div>
  );
}
