"use client";
import React from "react";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

export default function BreadCrumb({ dir }) {
  return (
    <div className="breadcrumbs text-sm ml-5 mt-0 bg-base-300">
      <ul>
        <Crumb />
        <Crumb />
      </ul>
    </div>
  );
}

function Crumb() {
  return (
    <li className="flex flex-row gap-1">
      <CiFolderOn />
      <a>Root</a>
    </li>
  );
}
