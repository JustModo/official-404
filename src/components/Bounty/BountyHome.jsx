import React from "react";

export default function BountyHome() {
  return (
    <div className="bg-neutral w-full h-128 flex flex-col justify-center items-center snap-start">
      <div className="carousel w-full h-full">
        <div id="item1" className="carousel-item w-full h-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full h-full object-cover"
            alt="Item 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover"
            alt="Item 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover"
            alt="Item 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover"
            alt="Item 4"
          />
        </div>
      </div>
      <div className="flex w-full max-w-screen-lg justify-center gap-2 py-2 mt-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
