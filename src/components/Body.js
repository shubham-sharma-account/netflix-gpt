import React, { useEffect } from "react";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ email, fullName: displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        console.log("in else");
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;
