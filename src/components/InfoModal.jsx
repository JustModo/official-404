import React, { useEffect, useState } from "react";

export default function InfoModal({ title, onClose, open }) {
  return (
    open && (
      <div className="h-screen w-screen fixed top-0 left-0 bg-secondary bg-opacity-50 flex justify-center items-center z-50 ">
        <div className="h-44 md:min-h-44 max-w-sm w-full bg-black flex flex-col justify-center items-center gap-5 rounded-xl relative mx-5">
          <h1 className="text-lg mb-10">{title}</h1>
          <div
            className=" btn absolute bottom-5 font-semibold px-8"
            onClick={onClose}
          >
            {"Ok"}
          </div>
        </div>
      </div>
    )
  );
}
