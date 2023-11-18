import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

 export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider();
    const [loading,setLoading]=useState('');
    const [user,setUser]=useState();
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
   
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
      const googleSignin=()=>{
        return signInWithPopup(auth,provider)
      }
    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
       useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
       },[])   

    const authInfo={
        createUser,
        user,
        login,
        logout,
        loading,
        googleSignin
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {
                children
            }
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;