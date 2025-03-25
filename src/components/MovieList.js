import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, popularMovies }) => {
  console.log("MovieList ", popularMovies);
  return (
    <div className="p-6">
      <p className="text-2xl font-bold text-white">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex z-20">
          {popularMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
