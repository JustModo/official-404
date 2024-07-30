"use client";
import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

export default function FolderBreadCrumbs({ dir, goToFolder }) {
  return (
    <div className="breadcrumbs text-sm mt-0 bg-base-300 flex-grow-0 flex-shrink-0 w-screen overflow-x-auto snap-x snap-proximity">
      <ul>
        <Crumb goToFolder={goToFolder} home={true} />
        {dir.map((item, index) => {
          return <Crumb title={item} goToFolder={goToFolder} key={index} />;
        })}
      </ul>
    </div>
  );
}

function Crumb({ title, goToFolder, home = false }) {
  return (
    <li className="flex flex-row gap-1 snap-start last:pr-5 first:pl-5">
      {!home ? (
        <>
          <CiFolderOn />
          <a onClick={() => goToFolder(title)}>{title}</a>
        </>
      ) : (
        <>
          <FaHome />
          <a onClick={() => goToFolder("Home")}>Home</a>
        </>
      )}
    </li>
  );
}
