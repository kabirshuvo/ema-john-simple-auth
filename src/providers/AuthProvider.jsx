import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {

   const [user, setuser] = useState(null);

   const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
    return signOut(auth);
   }

   useEffect(, [])


    const authInfo = {
        user,
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