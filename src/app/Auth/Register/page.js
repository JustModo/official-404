import React from "react";
import SwitchButton from "../components/SwitchButton";
import Form from "./Form.jsx";

export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-full flex-grow bg-neutral">
      <div className="flex flex-col w-full max-w-sm md:max-w-md">
        <p className="font-bold text-6xl">Register</p>
        <Form />
        <SwitchButton title={"Login"} route={"Auth/Login"} />
      </div>
    </div>
  );
}
