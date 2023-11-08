// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: "real-estate-mern-6be84.firebaseapp.com",
  projectId: "real-estate-mern-6be84",
  storageBucket: "real-estate-mern-6be84.appspot.com",
  messagingSenderId: "256220000905",
  appId: "1:256220000905:web:53feae0eb08c0e80f24c58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);