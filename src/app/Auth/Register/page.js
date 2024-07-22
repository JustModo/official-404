"use client";
import React from "react";
import SwitchButton from "../components/SwitchButton";

export default function page() {
  const handleRegister = async (formData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("Yay");
      } else {
        const errorData = await res.json();
        const errorMessage = errorData.message;
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-full flex-grow">
      <div className="flex flex-col w-full max-w-sm md:max-w-md">
        <p className="font-bold text-6xl">Register</p>
        <form action={handleRegister} className="flex flex-col gap-2 mt-4">
          <input
            type="text"
            name="email"
            placeholder="Username"
            className="input"
            required
          />
          <input
            type="text"
            name="handle"
            placeholder="Handle"
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            required
          />
          <button type="submit" className="btn mt-2">
            Register
          </button>
        </form>
        <SwitchButton title={"Login"} route={"Auth/Login"} />
      </div>
    </div>
  );
}
