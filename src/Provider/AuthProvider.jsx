import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.congig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] =useState(null);

    const[loading, setLoading] =useState(true);



    const createtUser = (email, password) =>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const handleUpdateProfile =(name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut (auth);
    }
    // observe auth state


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            console.log('obser', currenUser)
            setUser(currenUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,loading, signInWithGoogle, createtUser,signInUser,logOut,handleUpdateProfile}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


);
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}