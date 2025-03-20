import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/URLs";
import { addMovies } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const result = await data.json();
      console.log("data ", result);
      dispatch(addMovies(result?.results));
    };
    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
