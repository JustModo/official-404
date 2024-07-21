"use client";
import React from "react";
import SwitchButton from "../components/SwitchButton";

export default function page() {
  const handleLogin = async (formData) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("Yay");
      } else {
        const errorData = await res.json();
        const errorMessage = errorData.message || "Login failed";

        throw new Error(errorMessage);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col w-1/2">
      <p>Login</p>
      <form action={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      {/* <SwitchButton title={"Register"} route={"Auth/Register"} /> */}
    </div>
  );
}
