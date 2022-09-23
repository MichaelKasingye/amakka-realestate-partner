import { useNavigate } from "react-router-dom";

import {
    getAuth,
    signInWithEmailAndPassword,
    // onAuthStateChanged,
  } from 'firebase/auth';

  const auth = getAuth();
  
export function login({email, password}) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   setErrors(errorCode);
      console.log(errorCode);
      return new Error(`An error ocurred ${errorMessage}`)
    });
  }

  export function Logout() {
//   const history = useNavigate();
//   history("/login");
    return auth.signOut();
  }