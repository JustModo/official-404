"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Button() {
  const router = useRouter();
  return (
    <div
      className="text-sm btn btn-link font-normal"
      onClick={() => router.push("/Bounty")}
    >
      Go Back
    </div>
  );
}
