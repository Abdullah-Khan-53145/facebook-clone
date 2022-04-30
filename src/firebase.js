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
  apiKey: "AIzaSyBHuoD7_vvkUeBNqXHCg83dFHqglcVa99U",
  authDomain: "fb-clone-41a28.firebaseapp.com",
  projectId: "fb-clone-41a28",
  storageBucket: "fb-clone-41a28.appspot.com",
  messagingSenderId: "787589252409",
  appId: "1:787589252409:web:c2b1b42536deec3a2cd4e8",
  measurementId: "G-C6FJL3KP0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const db = getFirestore();
export { app, auth, provider, storage, db };
