import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { LOGIN_BG_IMG } from "../constants/URLs";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BG_IMG} alt="login-background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
