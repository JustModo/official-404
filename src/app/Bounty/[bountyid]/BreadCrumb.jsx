"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BreadCrumb({ bountyid }) {
  const pathname = usePathname();
  const solPath = `/Bounty/${bountyid}/Solution`;
  const router = useRouter();

  console.log(pathname, solPath);
  return (
    <div className="breadcrumbs text-sm m-0 p-0 ml-5 my-3 flex-shrink-0 flex-grow-0">
      <ul>
        <li>
          <a onClick={() => router.push(`/Bounty/${bountyid}`)}>Bounty</a>
        </li>
        {pathname.startsWith(solPath) && (
          <li>
            <a>Solution</a>
          </li>
        )}
      </ul>
    </div>
  );
}
