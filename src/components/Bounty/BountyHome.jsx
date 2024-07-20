import React from "react";

export default function BountyHome() {
  return (
    <div className="bg-neutral w-full h-full flex flex-col justify-center items-center snap-start">
      <div className="carousel w-full h-full">
        <div id="item1" className="carousel-item w-full h-full">
          <img
            src="https://picsum.photos/1920/1080"
            className="w-full h-full object-cover"
            alt="Item 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-full">
          <img
            src="https://picsum.photos/1920/1080?grayscale"
            className="w-full h-full object-cover"
            alt="Item 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-full">
          <img
            src="https://picsum.photos/1920/1080/?blur"
            className="w-full h-full object-cover"
            alt="Item 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-full">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=0.1"
            className="w-full h-full object-cover"
            alt="Item 4"
          />
        </div>
      </div>
      <div className="flex w-full max-w-screen-lg justify-center gap-2 py-2 mt-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
}
