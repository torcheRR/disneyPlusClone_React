const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import React from "react";

function HrMovieCard({ movie }) {
  return (
    <div
      className='        
        object-cover 
        md:w-[300px] 
        w-[150px] 
        rounded-lg 
        hover:border-[3px]
      border-gray-300 
        hover:scale-105 
        transition-all 
        cursor-pointer 
        hover:shadow-2xl
      hover:shadow-gray-700
        ease-in
        p-1'
    >
      <img src={IMAGE_BASE_URL + movie.backdrop_path} className="rounded-lg"/>
      <h2
        className="        
        md:w-[300px] 
        w-[150px]"
      >
        {movie.title}
      </h2>
    </div>
  );
}

export default HrMovieCard;
