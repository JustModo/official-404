"use client";
import { useModal } from "@/components/ModalContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { langObj, fieldObj } from "./util";

export default function page() {
  const { openModal } = useModal();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (name, isChecked) => {
    if (isChecked) {
      setSelectedLanguages((prev) => [...prev, name]);
    } else {
      setSelectedLanguages((prev) =>
        prev.filter((language) => language !== name)
      );
    }
  };

  return (
    <div className="w-full min-h-full flex justify-center items-end">
      <div className="w-full max-w-6xl flex flex-col gap-5 bg-base-100 p-10 my-10 sm:mx-10 mb-0 sm:mb-10 rounded-2xl">
        <label className="text-4xl sm:text-6xl font-extrabold mb-10">
          Create Bounty
        </label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="input input-bordered w-full"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          className="textarea textarea-bordered textarea-lg w-full h-96 text-sm"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <div className="py-4 flex flex-col">
          <div className="w-full">
            <label className="font-bold px-1 text-xl">Language</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-2">
              {langObj.map((item) => (
                <LanguageCheck
                  key={item[0]}
                  name={item}
                  onLanguageChange={handleLanguageChange}
                />
              ))}
            </div>
          </div>

          <div className="w-full mt-10">
            <label className="font-bold px-1 text-xl">Field</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-2">
              {fieldObj.map((item) => (
                <FieldCheck key={item[0]} name={item} fieldChange={setField} />
              ))}
            </div>
          </div>
        </div>
        <div
          className="btn btn-accent max-w-xs self-end"
          onClick={() =>
            submitBounty(
              title,
              description,
              field,
              selectedLanguages,
              router,
              openModal
            )
          }
        >
          Submit
        </div>
      </div>
    </div>
  );
}

function LanguageCheck({ name, onLanguageChange }) {
  const handleChange = (event) => {
    onLanguageChange(name[0], event.target.checked);
  };

  return (
    <label className="cursor-pointer label mx-4">
      <span className="label-text">{name[1]}</span>
      <input
        type="checkbox"
        className="checkbox checkbox-accent checkbox-sm"
        onChange={handleChange}
        required
      />
    </label>
  );
}

function FieldCheck({ name, fieldChange }) {
  return (
    <label className="cursor-pointer label mx-4">
      <span className="label-text">{name[1]}</span>
      <input
        type="radio"
        name="radio"
        className="radio radio-accent radio-sm"
        value={name[0]}
        onChange={(event) => fieldChange(event.target.value)}
      />
    </label>
  );
}

async function submitBounty(
  title,
  description,
  field,
  selectedLanguages,
  router,
  openModal
) {
  try {
    if (!title || !description || !field || !selectedLanguages) return;
    const formData = new FormData();
    const languages = selectedLanguages.join(",");
    formData.append("title", title);
    formData.append("description", description);
    formData.append("field", field);
    formData.append("languages", languages);

    const response = await fetch(`/api/create-bounty`, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    if (response.ok) {
      openModal("Submitted!");
      router.push(`/Bounty`);
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
