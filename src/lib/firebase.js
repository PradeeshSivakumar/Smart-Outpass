import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtLSLtokHlWNgCrAT6r3gXaolY9GRwfDs",
    authDomain: "outpass-system-cit.firebaseapp.com",
    projectId: "outpass-system-cit",
    storageBucket: "outpass-system-cit.firebasestorage.app",
    messagingSenderId: "225850430564",
    appId: "1:225850430564:web:56bb727cefef3e3236bb71",
    measurementId: "G-JG1T9410WJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
