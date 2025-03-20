import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;
