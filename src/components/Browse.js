import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.config";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out")
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div>Browse</div>
      <div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
};

export default Browse;
