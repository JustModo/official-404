"use client";
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import FolderBreadCrumbs from "./FolderBreadCrumb";
import FileTabs from "./FileTabs";
import { getLanguageFromExt, examplefiledir } from "./util";

export default function CodeWindow() {
  const [data, setData] = useState(examplefiledir);
  const [currentDir, setCurrentDir] = useState([]);
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
    return res;
  };

  const setPath = (path) => {
    let tempData = currentDir;
    tempData.push(path);
    setCurrentDir(tempData);
    getCurrentFolderContents(tempData, data);
  };

  const [content, setContent] = useState("");
  const [selected, setSelected] = useState("");
  const [language, setLanguage] = useState("");

  const setContentCall = (content) => {
    setContent(content);
  };

  useEffect(() => {
    getCurrentFolderContents(currentDir, data);
  }, [currentDir, data]);

  useEffect(() => {
    if (selected === "" || !selected) return;
    setLanguage(getLanguageFromExt(selected.split(".")[1]));
  }, [selected]);

  return (
    <div className="flex flex-grow flex-col">
      <FolderBreadCrumbs dir={currentDir} goToFolder={goToFolder} />
      {data && (
        <>
          <FileTabs
            data={currentDirFiles}
            setPath={setPath}
            setContent={setContentCall}
            setSelected={setSelected}
            selected={selected}
          />
          <Editor
            language={language}
            value={content}
            options={{ readOnly: true }}
            theme="vs-dark"
          />
        </>
      )}
    </div>
  );
}
