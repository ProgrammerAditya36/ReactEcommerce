import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAPE5yVYta1P1tZDrLqqCmbdz3jQCdXncY",
    authDomain: "ecommerce-a5864.firebaseapp.com",
    projectId: "ecommerce-a5864",
    storageBucket: "ecommerce-a5864.appspot.com",
    messagingSenderId: "665870264924",
    appId: "1:665870264924:web:8e5d69726290c7cc051499",
};
const app = initializeApp(firebaseConfig);
export const fireDb = getFirestore(app);
export const auth = getAuth(app);
export default app;
