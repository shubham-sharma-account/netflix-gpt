import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Body;
