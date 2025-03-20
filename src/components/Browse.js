import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      {/* 
        Main video container
          -Video background
          -Video File
        SecondaryContainer
          -Movieslist * n
            -card * n
      */}
    </div>
  );
};

export default Browse;
