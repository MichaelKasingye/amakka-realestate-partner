/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import app from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
  // onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();

export function login({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   setErrors(errorCode);
      // console.log(errorCode);
      // return new Error({error:errorMessage})
      return { error: errorMessage };
    });
}

export function register({ email, password, displayName }) {
  const auth = getAuth();
// console.log(displayName);
   createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName
      })
      // console.log(userCredential);

      // console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // return { error: errorMessage };
      return errorMessage;


    });
}

export function updateUser(name) {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name
  })
  // .then((displayedName) => {
  //   console.log(displayedName);
  //   console.log("name successful..");

  // }).catch((error) => {
  //   console.log(error);
  // });
}

export function Logout() {
  return auth.signOut();
}
