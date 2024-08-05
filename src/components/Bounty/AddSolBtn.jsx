"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function AddSolBtn({ id }) {
  const router = useRouter();

  return (
    <div
      className="btn btn-accent mt-5"
      onClick={() => router.push(`/Bounty/${id}/AddSolution`)}
    >
      <h1 className="font-semibold">Add Solution</h1>
    </div>
  );
}
