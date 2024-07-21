"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SwitchButton({ title, route }) {
  const router = useRouter();

  return (
    <div
      className="btn btn-link"
      onClick={() => {
        router.push(`/${route ? route : ""}`);
      }}
    >
      {title}
    </div>
  );
}
