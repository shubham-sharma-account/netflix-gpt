import React from "react";

const VideoTitle = ({ recommendedMovie }) => {
  return <div className="absolute top-[25rem] ml-12 w-96 z-10">
    <h1 className="text-6xl font-bold text-white">{recommendedMovie?.title}</h1>
    <h1 className="font-bold text-white my-2">{recommendedMovie?.overview}</h1>
    <div>
      <button className="bg-white w-36 my-4 rounded-md px-3 py-2 mx-1">Info</button>
      <button className="bg-gray-400 w-36 my-4 text-white rounded-md px-3 py-2 mx-1">Play</button>
    </div>
  </div>;
};

export default VideoTitle;
