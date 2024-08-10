"use client";
import React, { createContext, useState, useContext } from "react";
import InfoModal from "@components/InfoModal";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const openModal = (title) => {
    if (!title) return;
    setTitle(title);
    setOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <InfoModal title={title} onClose={() => setOpen(false)} open={open} />
    </ModalContext.Provider>
  );
};
