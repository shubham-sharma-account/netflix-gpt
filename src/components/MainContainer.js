import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieDetails = useSelector((store) => store.movies.nowPlayingMovies);
  const randomMovie =
  movieDetails?.length && movieDetails[Math.floor(Math.random() * movieDetails.length)];
  return (
    <div>
      <VideoBackground recommendedMovie={randomMovie} />
      <VideoTitle recommendedMovie={randomMovie} />
    </div>
  );
};

export default MainContainer;
