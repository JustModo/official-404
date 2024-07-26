"use client";
import JSZip from "jszip";
import React, { useState } from "react";

export default function page() {
  // const [files, setFiles] = useState([]);

  // const handleFileChange = (event) => {
  //   const selectedFiles = Array.from(event.target.files);
  //   setFiles(selectedFiles);
  // };

  // const handleUpload = async () => {
  //   const zip = new JSZip();

  //   files.forEach((file) => {
  //     zip.file(file.webkitRelativePath || file.name, file);
  //   });

  //   try {
  //     const zipBlob = await zip.generateAsync({ type: "blob" });
  //     const formData = new FormData();
  //     formData.append("file", zipBlob, "files.zip");

  //     const response = await fetch("https://club.modo-dev.com/test", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log("Upload successful:", data);
  //   } catch (error) {
  //     console.error("Error uploading files:", error);
  //   }
  // };

  return (
    <div className="w-full h-full">
      {/* <input
        type="file"
        webkitdirectory="true" // Chrome/Edge
        mozdirectory="true" // Firefox
        directory="true" // Generic
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload and Zip Files</button> */}
      div
    </div>
  );
}
