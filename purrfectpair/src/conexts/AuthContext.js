import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import db from "../Firebase";
import { functions } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      db.collection("users").doc(cred.user.uid).set({
      });
    });
  }

  function addAdminRole(email) {
    //console.log(email);
    const addAdminRole = functions.httpsCallable("addAdminRole");
    return addAdminRole({ email: email })
      .then((result) => {
        console.log(result.data.text);
      })
      .catch((e) => {
        console.log(e.message);
        console.log(e.code);
        console.log(e.details);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    //useEffect -> only runs once the component is mounted because we use []
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //set the current user
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    addAdminRole,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  //if were not loading than render our the children
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
