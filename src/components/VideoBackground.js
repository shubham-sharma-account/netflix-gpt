import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants/URLs";

const VideoBackground = ({ recommendedMovie }) => {
  const movieId = recommendedMovie?.id;
  const [trailorId, setTrailorId] = useState(null);
  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const result = await data.json();
      setTrailorId(
        result?.results?.length &&
          result?.results?.filter((video) => video.type === "Trailer")[0]?.key
      );
    };
    getMovieVideos();
  }, [movieId]);

  return (
    <div className="relative bg-gray-200 h-[40rem]">
      {trailorId && (
        <iframe
          className="h-[40rem] w-[99rem]"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailorId}?autoplay=1&mute=1&si=30ihTS_IgezUUMat&controls=0&modestbranding=1&showinfo=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
