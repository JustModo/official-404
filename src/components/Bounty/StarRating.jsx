import React from "react";
import LStar from "@assets/Left_half_star.svg";
import RStar from "@assets/Right_half_star.svg";
import Image from "next/image";

export default function StarRating({ rating = 0 }) {
  return (
    <div className="flex items-center">
      <Half1 value={rating >= 1} />
      <Half2 value={rating >= 2} />
      <Half1 value={rating >= 3} />
      <Half2 value={rating >= 4} />
      <Half1 value={rating >= 5} />
      <Half2 value={rating >= 6} />
      <Half1 value={rating >= 7} />
      <Half2 value={rating >= 8} />
      <Half1 value={rating >= 9} />
      <Half2 value={rating == 10} />
    </div>
  );
}

function Half1({ value }) {
  return (
    <div className={`relative h-6 w-6 ${!value && "opacity-0"}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 12 12"
      >
        <path
          style={{
            fill: "#fff",
            stroke: "#fff",
            strokeWidth: ".8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="M6 1 4.88 4.453H1.243l2.941 2.14-1.12 3.454L6 7.913Z "
        />
      </svg>
    </div>
  );
}

function Half2({ value }) {
  return (
    <div className={`relative h-6 w-6 -ml-6 ${!value && "opacity-0"}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 12 12"
      >
        <path
          style={{
            fill: "#fff",
            stroke: "#fff",
            strokeWidth: ".8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="M6 1v6.913l2.936 2.134-1.121-3.454 2.941-2.14H7.121Z"
        />
      </svg>
    </div>
  );
}
