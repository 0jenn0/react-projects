import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import FbaseApi from "../api/database";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const isLogin = userData;

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        const user = new FbaseApi(data.user);
        setUserData(user);
        // userData.isAdmin();
        user.isAdmin();
        user.updateUser();
      })
      .catch((err) => console.log("로그인 error : ", err));
  };

  const handleGoogleLogOut = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider
      value={{ userData, isLogin, handleGoogleLogin, handleGoogleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
