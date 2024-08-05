import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genre.map((item, index) => (
        <div className="p-6 px-8 md:px-16">
          <h2 className="font-bold text-[20px] text-white">{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
