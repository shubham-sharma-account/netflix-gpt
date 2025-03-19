import React from "react";
import { LOGO } from "../constants/URLs";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((store) => store.user);
  console.log("header user ", userData);
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log("sign out ", res);
        // navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-end">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
        <img className="w-44" src={LOGO} alt="logo" />
      </div>
      {userData.length ? (
        <div className="w-36 z-10 flex my-4">
          <img
            src={userData[0]?.photoURL}
            alt="profile-img"
            className="w-14"
          />
          <p
            onClick={handleSignOut}
            className="ml-2 my-3 font-bold text-m cursor-pointer"
          >
            Sign Out
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
