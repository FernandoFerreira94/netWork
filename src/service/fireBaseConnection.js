import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCEOp_hIV8OXeLcWRLwJrMhiAcPaejUgts",
    authDomain: "network-900e9.firebaseapp.com",
    projectId: "network-900e9",
    storageBucket: "network-900e9.firebasestorage.app",
    messagingSenderId: "727978399424",
    appId: "1:727978399424:web:f7c415306984cab85d3f25",
    measurementId: "G-ZKRMN8W4BE",
};
const firebaseApp = initializeApp(firebaseConfig);
export const Db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
