import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

export default function FileTabs({
  data,
  setPath,
  setContent,
  selected,
  setSelected,
}) {
  // const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(data[0]?.title);
    setContent(data[0]?.content);
  }, [data]);

  return (
    <div className="w-full h-8 flex flex-row flex-grow-0 flex-shrink-0">
      {data.map((item, index) => (
        <Tab
          title={item?.title}
          content={item?.content}
          type={item?.type}
          key={index}
          setPath={setPath}
          setContent={setContent}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

function Tab({
  title,
  type,
  content,
  setPath,
  setContent,
  selected,
  setSelected,
}) {
  return (
    <div
      className={`bg-base-300 px-4 text-center flex justify-center items-center rounded-t-md text-sm tab-border-2 cursor-pointer flex-row gap-1`}
      style={{
        backgroundColor: `${selected === title ? "#1e1e1e" : "#080c11"}`,
      }}
      key={title}
      onClick={() => {
        if (type === "Folder") {
          setPath(title);
        } else {
          setSelected(title);
          setContent(content);
        }
      }}
    >
      {type === "Folder" ? <CiFolderOn /> : <CiFileOn />}
      {title}
    </div>
  );
}
