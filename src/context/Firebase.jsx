import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCPDMRzJNdJpjQoLPL5yrlUvy13beXaEiE",
    authDomain: "e-commerce-d010f.firebaseapp.com",
    projectId: "e-commerce-d010f",
    storageBucket: "e-commerce-d010f.firebasestorage.app",
    messagingSenderId: "909551923098",
    appId: "1:909551923098:web:56e495deda175b24ce1423"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);


export const FirebaseContext = createContext();

export const  FirebaseProvider = (props)=>



{
     // sign up user
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const googleLogin = () => {
       return signInWithPopup(auth, new firebase.auth.GoogleAuthProvider());
    }
    return(
        <FirebaseContext.Provider value={{signup,login,googleLogin}}>
          {props.children}
        </FirebaseContext.Provider>

    )
}