import React, { useState } from "react";
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwars from "../assets/images/starwar.png";

import disneyV from "../assets/videos/disney";
import marvelV from "../assets/videos/marvel";
import nationalgeographic from "../assets/videos/national-geographic";
import pixarV from "../assets/videos/pixarV";
import starwarsV from "../assets/videos/star-wars";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalgeographic,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwars,
      video: starwarsV,
    },
  ];

  const handleMouseOver = (video) => {
    video.play();
  };

  const handleMouseOut = (video) => {
    video.pause();
  };

  return (
    <div className="flex md:mx-10 gap-5 md:gap-10 p-0 md:p-2 px-5 md:px-16 relative">
      {ProductionHouseList.map((item) => (
        <div
          key={item.id}
          className="
          border-[2px]
          border-gray-600
          rounded-lg
          hover:scale-105
          transition-all 
          w-screen
          md:w-full
          ease-in-out 
          cursor-pointer
          relative
          shadow-2xl
          shadow-gray-700"
        >
          <div>
            <video
              src={item.video}
              loop
              playsInline
              className="absolute rounded-md opacity-0 hover:opacity-50"
            />
          </div>
          <img
            src={item.image}
            className="w-full top-0"
            onMouseOver={(e) => handleMouseOver(e.target.parentNode.querySelector('video'))}
            onMouseOut={(e) => handleMouseOut(e.target.parentNode.querySelector('video'))}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
