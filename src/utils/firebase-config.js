// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu85VfUh0VJxvIyrRp0vTpGNFsCbQFzjg",
  authDomain: "react-netflix-clone-cee7f.firebaseapp.com",
  projectId: "react-netflix-clone-cee7f",
  storageBucket: "react-netflix-clone-cee7f.appspot.com",
  messagingSenderId: "1021506686065",
  appId: "1:1021506686065:web:0dc6073d69f47a9f875fd0",
  measurementId: "G-FF639J05BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

