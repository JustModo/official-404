"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ViewSolBtn({ id }) {
  const router = useRouter();
  return (
    <div
      className="btn btn-info mt-5"
      onClick={() => router.push(`/Bounty/${id}/Solution`)}
    >
      <h1 className="font-semibold">View Solution</h1>
    </div>
  );
}
