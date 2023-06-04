// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByx9jfw7SRZGOm-AP6iixEqRx7upZ_pI8",
  authDomain: "react-note-1cfc5.firebaseapp.com",
  projectId: "react-note-1cfc5",
  storageBucket: "react-note-1cfc5.appspot.com",
  messagingSenderId: "929957860103",
  appId: "1:929957860103:web:5eb44b5538baffe7212ba2",
  measurementId: "G-KD6EW784Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
