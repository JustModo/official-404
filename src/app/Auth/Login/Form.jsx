"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InfoModal from "@components/InfoModal";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = (formData) => {
    setLoading(true);
    handleLogin(formData);
  };

  const handleLogin = async (formData) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        setLoading(false);
        const errorData = await res.json();
        let errorMessage;
        if (res.status === 502 || res.status === 1033)
          errorMessage = "Server Error";
        else errorMessage = errorData.message;
        setTitle(errorMessage);
        setOpen(true);
        throw new Error(errorMessage);
      }

      setLoading(false);
      router.push("/Profile");
      router.refresh();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return (
    <form action={handleClick} className="flex flex-col gap-2 mt-4">
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
      <button type="submit" className={`btn mt-2 ${loading && "btn-disabled"}`}>
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Login"
        )}
      </button>
      <InfoModal title={title} onClose={() => setOpen(false)} open={open} />
    </form>
  );
}
