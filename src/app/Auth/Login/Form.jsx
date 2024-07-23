"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleLogin = async (formData) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.back();
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
    <form action={handleLogin} className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        name="email"
        placeholder="Username"
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
        Login
      </button>
    </form>
  );
}
