import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-full flex justify-center items-end">
      <form className="w-full max-w-6xl flex flex-col gap-5 bg-base-100 p-10 my-10 sm:mx-10 mb-0 sm:mb-10 rounded-2xl">
        <lable className="text-4xl sm:text-6xl font-extrabold mb-10 text-accent">
          Create Bounty
        </lable>
        <input
          type="text"
          placeholder="Title"
          name="title"
          class="input input-bordered w-full"
        />
        <textarea
          placeholder="Description"
          name="description"
          class="textarea textarea-bordered textarea-lg w-full h-96 text-sm"
        ></textarea>
        <div className="py-4 flex flex-col sm:flex-row gap-5 justify-around items-center w-full">
          <div className="form-control w-full">
            <label className="font-bold px-1 text-xl">Language</label>
            <LanguageCheck name={"C"} />
            <LanguageCheck name={"C++"} />
            <LanguageCheck name={"C#"} />
            <LanguageCheck name={"CSS"} />
            <LanguageCheck name={"HTML"} />
            <LanguageCheck name={"Javascript"} />
            <LanguageCheck name={"Java"} />
            <LanguageCheck name={"Python"} />
            <LanguageCheck name={"Ruby"} />
            <LanguageCheck name={"Rust"} />
          </div>
          <div className="form-control w-full">
            <label className="font-bold px-1 text-xl">Field</label>
            <FieldCheck name={"C"} />
            <FieldCheck name={"C++"} />
            <FieldCheck name={"C#"} />
            <FieldCheck name={"CSS"} />
            <FieldCheck name={"HTML"} />
            <FieldCheck name={"Javascript"} />
            <FieldCheck name={"Java"} />
            <FieldCheck name={"Python"} />
            <FieldCheck name={"Ruby"} />
            <FieldCheck name={"Rust"} />
          </div>
        </div>
        <div className="btn btn-accent max-w-xs self-end">Submit</div>
      </form>
    </div>
  );
}

function LanguageCheck({ name }) {
  return (
    <label className="cursor-pointer label">
      <span className="label-text">{name}</span>
      <input type="checkbox" className="checkbox checkbox-accent checkbox-sm" />
    </label>
  );
}

function FieldCheck({ name }) {
  return (
    <label className="cursor-pointer label">
      <span className="label-text">{name}</span>
      <input
        type="radio"
        name="radiof"
        className="radio radio-accent radio-sm"
      />
    </label>
  );
}
