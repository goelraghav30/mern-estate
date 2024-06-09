// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-123.firebaseapp.com",
  projectId: "mern-estate-123",
  storageBucket: "mern-estate-123.appspot.com",
  messagingSenderId: "741939625559",
  appId: "1:741939625559:web:f48f6c6ee9c4f54edcad12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);