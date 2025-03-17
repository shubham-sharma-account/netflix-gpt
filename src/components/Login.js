import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_BG_IMG } from "../constants/URLs";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIn);
  };

  return (
    <div>
      <div>
        <Header />
        <img src={LOGIN_BG_IMG} alt="login-background" className="absolute" />
      </div>
      <form className="absolute w-3/12 p-12 bg-black mt-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-sm">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-gray-300">
          {isSignIn ? "New to Netflix? " : "Already Registered? "}
          <span onClick={toggleSignInForm} className="cursor-pointer font-bold">
            Sign Up Now
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
