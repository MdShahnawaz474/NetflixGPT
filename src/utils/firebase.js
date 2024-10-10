// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvtNb7nz6v0_-AG3UwNg3NfDR-W7-QJHc",
  authDomain: "netflixgpt-a58e8.firebaseapp.com",
  projectId: "netflixgpt-a58e8",
  storageBucket: "netflixgpt-a58e8.appspot.com",
  messagingSenderId: "1038440238429",
  appId: "1:1038440238429:web:847a593f9474e31709ecb4",
  measurementId: "G-9C94SNREV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 export const auth = getAuth();