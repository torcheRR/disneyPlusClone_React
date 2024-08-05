import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="
        object-cover 
        md:w-[300px] 
        w-[150px] 
        rounded-lg 
        hover:border-[3px]
      border-gray-300 
        hover:scale-105 
        transition-all 
        cursor-pointer 
        hover:shadow-lg
      hover:shadow-gray-700
        ease-in"
      />
    </>
  );
}

export default MovieCard;
