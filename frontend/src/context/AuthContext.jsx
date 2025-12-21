import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null); // Stores full user profile including role
    const [loading, setLoading] = useState(true);

    async function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function signup(email, password, name) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // Create user document with default 'student' role
        await setDoc(doc(db, "users", result.user.uid), {
            name,
            email,
            role: 'student',
            createdAt: serverTimestamp()
        });
        return result;
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        if (!auth) {
            console.error("Auth not initialized (missing config)");
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    // Fetch user role from Firestore
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        setUserData(userDoc.data());
                    } else {
                        console.warn("User document not found in Firestore");
                        setUserData(null);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
                setUserData(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userData,
        userRole: userData?.role,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
