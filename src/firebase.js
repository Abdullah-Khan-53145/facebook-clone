// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH8DXKpDKgI23q1tukISQQBwnhxKeu5Fw",
  authDomain: "facebook-clone-b1348.firebaseapp.com",
  projectId: "facebook-clone-b1348",
  storageBucket: "facebook-clone-b1348.appspot.com",
  messagingSenderId: "203193061353",
  appId: "1:203193061353:web:055bdfc2182a664a820578",
  measurementId: "G-XFZYY6J626",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const db = getFirestore();
export { app, auth, provider, storage, db };
