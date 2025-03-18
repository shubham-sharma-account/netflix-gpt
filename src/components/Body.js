import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checkkkkkkkkkk");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("auth state >> ", user);
        const { displayName, email, uid } = user;
        dispatch(addUser({ email, fullName: displayName, uid }));
        // navigate("/browse");
        window.location.href = "/browse";

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
      } else {
        dispatch(removeUser());
        // navigate("/");
        // window.location.href = "/";
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;
