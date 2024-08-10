"use client";
import React, { Fragment, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useModal } from "@/components/ModalContext";

export default function Page({ params }) {
  const [files, setFiles] = useState([]);

  const { openModal } = useModal();
  const router = useRouter();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length < 0) return;
    let total = 0;
    files.map((file, index) => {
      total += file.size;
    });
    if (total > 5 * 1024 * 1024) {
      openModal("Too Big! File Limit: 5MB");
      setFiles([]);
    } else {
      setFiles(files);
    }
  };

  const buildFileStructure = (files) => {
    const fileMap = files.reduce((acc, file) => {
      const pathParts = file.webkitRelativePath.split("/");
      let currentLevel = acc;

      pathParts.forEach((part, index) => {
        if (index === pathParts.length - 1) {
          if (!currentLevel.files) {
            currentLevel.files = [];
          }
          currentLevel.files.push(part);
        } else {
          if (!currentLevel[part]) {
            currentLevel[part] = {};
          }
          currentLevel = currentLevel[part];
        }
      });

      return acc;
    }, {});

    return fileMap;
  };

  const renderFileTree = (node, level = 0) => {
    return (
      <div className="py-1">
        {Object.keys(node).map((key) => {
          if (key === "files") {
            return (
              <div key={key} style={{ marginLeft: level * 4 * 3 }}>
                {node[key].map((file, index) => (
                  <div
                    key={index}
                    className={`flex flex-row gap-1 items-center`}
                  >
                    <CiFileOn />
                    <p>{file}</p>
                  </div>
                ))}
              </div>
            );
          }
          return (
            <div key={key}>
              <div
                className={`flex flex-row font-semibold gap-1 items-center`}
                style={{ marginLeft: level * 4 * 3 }}
              >
                <CiFolderOn />
                <h1>{key}</h1>
              </div>
              {renderFileTree(node[key], level + 1)}
            </div>
          );
        })}
      </div>
    );
  };

  const fileStructure = buildFileStructure(files);

  const handleSubmit = async () => {
    await submitSol(params.bountyid, files, router, openModal);
  };

  return (
    <div className="p-4 space-y-4 h-full flex flex-col overflow-y-auto">
      <h1 className="flex text-3xl font-bold">Add Solution</h1>
      {files.length > 0 ? (
        <Fragment>
          <div className="bg-neutral border border-gray-300 rounded-md p-4 shadow-sm">
            {renderFileTree(fileStructure)}
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="btn btn-accent" onClick={handleSubmit}>
              Submit
            </div>
            <div
              className="btn btn-error btn-outline"
              onClick={() => setFiles([])}
            >
              <GrPowerReset />
              Reset
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="relative flex flex-grow">
          <input
            type="file"
            multiple
            webkitdirectory="true"
            onChange={handleFileChange}
            className="w-full h-full py-2 px-3 rounded-md shadow-sm bg-neutral opacity-0 cursor-pointer absolute inset-0"
            id="fileInputBtn"
          />
          <div className="flex justify-center items-center w-full h-full bg-neutral rounded-md border border-gray-300 shadow-sm cursor-pointer flex-col">
            <IoMdAddCircleOutline className="w-10 h-10" />
            <div className="text-xl font-bold">Add Files</div>
          </div>
        </div>
      )}
    </div>
  );
}

async function submitSol(id, files, router, openModal) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  formData.append("bounty_id", id);
  try {
    const response = await fetch(`/api/submit-solution`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      openModal("Submitted!");
      router.push(`/Bounty/${id}`);
      return true;
    }
    const error = await response.json();
    openModal(error.message);
    console.error(error);
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
