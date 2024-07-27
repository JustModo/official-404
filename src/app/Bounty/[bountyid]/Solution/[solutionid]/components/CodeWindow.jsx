"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

export default function CodeWindow() {
  return (
    <div className="flex flex-grow flex-col">
      <DirTabs />
      <Editor
        language="python"
        value="print('Hello')"
        options={{ readOnly: true }}
        theme="vs-dark"
      />
    </div>
  );
}

function DirTabs() {
  return (
    <div className="w-full h-8 flex flex-row flex-grow-0 flex-shrink-0">
      <Tabs selected={true} />
      <Tabs />
    </div>
  );
}

function Tabs({ selected }) {
  return (
    <div
      className={`bg-base-300 px-4 text-center flex justify-center items-center rounded-t-md text-sm tab-border-2 cursor-pointer flex-row gap-1`}
      style={{ backgroundColor: `${selected && "#1e1e1e"}` }}
    >
      <CiFileOn />
      {"test1.c"}
    </div>
  );
}
