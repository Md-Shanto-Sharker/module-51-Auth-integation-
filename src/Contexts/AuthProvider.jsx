import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (createUser) {
      console.log("has current user", currentUser);
    } else {
      console.log("current user", currentUser);
    }
  });

  const useInfo = {
    createUser,
    signInUser,
  };
  return <AuthContext value={useInfo}>{children}</AuthContext>;
};

export default AuthProvider;
