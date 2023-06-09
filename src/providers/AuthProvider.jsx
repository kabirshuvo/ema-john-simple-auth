import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user, setuser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
    return signOut(auth);
   }

   

   //* SettingUp Observer on user auth state
   useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
          setuser(currentUser);
          setLoading(false);

      });

  //* Stopping the Observation while unmounting

      return () => {
          return unsubscribe();
      }
 }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;