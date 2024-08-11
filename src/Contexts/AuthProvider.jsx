import React,{ createContext, useEffect, useState } from 'react'
import app from "../Firebase/firebase.config"
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, 
signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"


const AuthContext= createContext();
const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true);

//Create User
const createuser= (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
};

//Create user using Gmail
const signUpWithGmail= ()=> {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

//Login
const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

//Logout
const logOut = ()=> {
    return signOut(auth).finally(() => setLoading(false))
}

//User is Available or Not

useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
    });
    return () => unsubscribe();
}, [])
    const authInfo= {
        user,
        loading,
        createuser,
        signUpWithGmail,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext};