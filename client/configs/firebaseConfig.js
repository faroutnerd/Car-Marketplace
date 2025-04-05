// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-15931.firebaseapp.com",
  projectId: "car-marketplace-15931",
  storageBucket: "car-marketplace-15931.firebasestorage.app",
  messagingSenderId: "710340531408",
  appId: "1:710340531408:web:8c5c9efe2de833cb47fad5",
  measurementId: "G-5C2WXC5SG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);