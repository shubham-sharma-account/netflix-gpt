import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  const isGPTActive = useSelector((store) => store.gpt.isSetGPT);
  return (
    <div>
      <Header />
      {isGPTActive ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
