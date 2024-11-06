/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile as firebaseUpdateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setLoading(false);
            return result;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const updateProfile = async (user, profile) => {
        return firebaseUpdateProfile(user, {
            displayName: profile.name,
            photo_url: profile.image,
        });
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            return result;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const googleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setLoading(false);
            return result;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const resetPassword = async (email) => {
        try {
            return await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        resetPassword,
        loading,
        updateProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
