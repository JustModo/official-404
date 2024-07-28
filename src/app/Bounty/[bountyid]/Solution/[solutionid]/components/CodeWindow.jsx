"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import FolderBreadCrumbs from "./FolderBreadCrumb";
import FileTabs from "./FileTabs";

export default function CodeWindow() {
  const filedir = {
    "test1.c": "content of test1.c",
    "test2.c": "content of test2.c",
    folder1: {
      "test3.c": "content of test3.c",
      "test4.c": "content of test4.c",
      folder2: {
        "test5.c": "content of test5.c",
        "test6.c": "content of test6.c",
      },
    },
  };

  const [data, setData] = useState(filedir);
  const [currentDir, setCurrentDir] = useState(["folder1", "folder2"]);
  const [currentDirFiles, setCurrentDirFiles] = useState([]);

  const goToFolder = (folder) => {
    if (folder === "Home") setCurrentDir([]);
    const index = currentDir.indexOf(folder);
    if (index !== -1) {
      const newDir = currentDir.slice(0, index + 1);
      setCurrentDir(newDir);
    }
  };

  const getCurrentFolderContents = (currentDir, data) => {
    if (currentDir.length === 0) return setCurrentDirFiles(formatData(data));
    let newdata = data;
    for (let property in currentDir) {
      newdata = newdata[currentDir[property]];
    }
    setCurrentDirFiles(formatData(newdata));
  };

  const formatData = (obj) => {
    const res = [];
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object") {
        res.push({
          type: "Folder",
          title: key,
          content: null,
        });
      } else {
        res.push({
          type: "File",
          title: key,
          content: obj[key],
        });
      }
    }
    console.log(res);
    return res;
  };

  useEffect(() => {
    getCurrentFolderContents(currentDir, data);
  }, [currentDir, data]);

  return (
    <div className="flex flex-grow flex-col">
      <FolderBreadCrumbs dir={currentDir} goToFolder={goToFolder} />
      <FileTabs data={currentDirFiles} />
      <Editor
        language="python"
        value="print('Hello')"
        options={{ readOnly: true }}
        theme="vs-dark"
      />
    </div>
  );
}
