// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIvE-9lxcyVWk4hzmzbVwaARwV88WH-pE",
  authDomain: "netflixgpt-41206.firebaseapp.com",
  projectId: "netflixgpt-41206",
  storageBucket: "netflixgpt-41206.firebasestorage.app",
  messagingSenderId: "9282654582",
  appId: "1:9282654582:web:4d16d5da11fc45ff3f2a57",
  measurementId: "G-WG8R52LBPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

