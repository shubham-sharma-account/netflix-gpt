import React, { useRef, useState } from "react";
import Header from "./Header";
import { AVTAR_IMAGE, LOGIN_BG_IMG } from "../constants/URLs";
import { checkValidData } from "../utils/validate";
// import app from "../utils/firebase.config"; // Adjust the path to your firebase config file

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIn);
  };

  const fullName = useRef();
  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate the form data
    const isValid = checkValidData(
      email,
      password,
      fullName?.current?.value,
      isSignIn
    );
    setErrorMessage(isValid);
    if (isValid) return false;

    if (isSignIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(`${errorCode} - ${errorMsg}`);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user ", user);
          updateProfile(user, {
            displayName: fullName?.current?.value || "test namee",
            photoURL:
              AVTAR_IMAGE,
          })
            .then(() => {
              console.log("Profile updated!");
              const { displayName, email, uid, photoURL } = auth.currentUser;

              dispatch(
                addUser({ email, fullName: displayName, uid, photoURL })
              );

              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log("Error in Profile update ", error);
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(`${errorCode} - ${errorMsg}`);
          // ..
        });
    }
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
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
            ref={fullName}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <p className="text-red-600 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
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
