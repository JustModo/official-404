"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "../ModalContext";

const RatingComponent = ({ value, id }) => {
  console.log(value);

  const [rating, setRating] = useState(value > 0 ? value : 0);

  const { openModal } = useModal();

  const handleRatingChange = async (rating) => {
    setRating(rating);
    await rateBounty(id, rating);
  };

  async function rateBounty(id, rating) {
    try {
      const formData = new FormData();
      formData.append("bounty_id", id);
      formData.append("rating", rating);

      const response = await fetch(`/api/bounty-rate`, {
        method: "POST",
        body: formData,
        cache: "no-store",
      });

      if (response.ok) {
        openModal("Rated!");
        return true;
      }
      const error = await response.json();
      openModal(error.message);
      console.error(error);
      return false;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }

  return (
    <div className="flex items-center">
      <Half1 value={rating >= 1} handleClick={() => handleRatingChange(1)} />
      <Half2 value={rating >= 2} handleClick={() => handleRatingChange(2)} />
      <Half1 value={rating >= 3} handleClick={() => handleRatingChange(3)} />
      <Half2 value={rating >= 4} handleClick={() => handleRatingChange(4)} />
      <Half1 value={rating >= 5} handleClick={() => handleRatingChange(5)} />
      <Half2 value={rating >= 6} handleClick={() => handleRatingChange(6)} />
      <Half1 value={rating >= 7} handleClick={() => handleRatingChange(7)} />
      <Half2 value={rating >= 8} handleClick={() => handleRatingChange(8)} />
      <Half1 value={rating >= 9} handleClick={() => handleRatingChange(9)} />
      <Half2 value={rating == 10} handleClick={() => handleRatingChange(10)} />
    </div>
  );
};

function Half1({ value, handleClick }) {
  return (
    <div className={`relative h-6 w-3 `} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 12 12"
        className="absolute top-0 left-0"
      >
        <path
          style={{
            fill: "#4a4a4a",
            stroke: "#4a4a4a",
            strokeWidth: ".8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
            fillOpacity: 1,
          }}
          d="M6 1 4.88 4.453H1.243l2.941 2.14-1.12 3.454L6 7.913Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 12 12"
        className={`relative ${!value && "opacity-0"}`}
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
          d="M6 1 4.88 4.453H1.243l2.941 2.14-1.12 3.454L6 7.913Z"
        />
      </svg>
    </div>
  );
}

function Half2({ value, handleClick }) {
  return (
    <div className={`relative h-6 w-3`} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="6 0 12 12"
        className="absolute top-0 left-0"
      >
        <path
          style={{
            fill: "#4a4a4a",
            stroke: "#4a4a4a",
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="6 0 12 12"
        className={`relative ${!value && "opacity-0"}`}
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

export default RatingComponent;
