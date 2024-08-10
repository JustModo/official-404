"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <div
      className="btn btn-accent"
      onClick={() => {
        handleLogout(router);
      }}
    >
      Logout
    </div>
  );
}

const handleLogout = async (router) => {
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (!res.ok) {
      const errorMessage = await res.json();
      throw new Error(errorMessage);
    }
    console.log("Sucess");
    router.push("/Auth/Login");
    router.refresh();
  } catch (err) {
    console.error(err);
  }
};
