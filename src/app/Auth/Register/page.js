import React from "react";
import SwitchButton from "../components/SwitchButton";

export default function page() {
  return (
    <div className="flex flex-col w-1/2">
      <p>Register</p>
      <input className="input"></input>
      <SwitchButton title={"Login"} route={"Auth/Login"} />
    </div>
  );
}
