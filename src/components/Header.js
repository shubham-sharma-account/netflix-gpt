import React, { useEffect } from "react";
import { LOGO } from "../constants/URLs";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleSetGPT } from "../utils/store/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const isGPTActive = useSelector((store) => store.gpt.isSetGPT);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ email, fullName: displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount
    return () => {
      unsubscribe()
    }
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {})
      .catch((error) => {});
  };

  const handleClickGpt = () => {
    console.log("toggle ", isGPTActive)
    dispatch(toggleSetGPT(true))
  }

  return (
    <div className="flex justify-end">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
        <img className="w-44" src={LOGO} alt="logo" />
      </div>
      {userData.length ? (
        <div className="w-80 z-10 flex my-4">
          <button className="p-3 bg-white text-black mx-10 rounded-md" onClick={handleClickGpt}>
            Search GPT
          </button>
          <img src={userData[0]?.photoURL} alt="profile-img" className="w-14" />
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
