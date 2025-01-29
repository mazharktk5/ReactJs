import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Firebase configuration using Vite's import.meta.env
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
    // sign up user
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, new firebase.auth.GoogleAuthProvider());
    };

    return (
        <FirebaseContext.Provider value={{ signup, login, googleLogin }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
