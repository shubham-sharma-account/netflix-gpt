import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants/URLs";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const getPopularVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );


      const result = await data.json();
      setPopularMovies(result.results);
    };
    getPopularVideos();
  }, []);



  return (
    <div className=" bg-black">
      <div>
        <MovieList className="-mt-48 reltive z-20" title={"Popular Movies"} popularMovies={popularMovies} />
      </div>

      <MovieList title={"Top Shows"} popularMovies={popularMovies} />
      <MovieList title={"Continue Watching"} popularMovies={popularMovies} />
      <MovieList title={"Top 10 Movies"} popularMovies={popularMovies} />
      <MovieList title={"Horror Movies"} popularMovies={popularMovies} />
    </div>
  );
};

export default SecondaryContainer;
