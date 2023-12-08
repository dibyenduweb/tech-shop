
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlITW6pjeb3yh9DCjj1IGnV9nx35WZOw",
  authDomain: "project-asiment-10.firebaseapp.com",
  projectId: "project-asiment-10",
  storageBucket: "project-asiment-10.appspot.com",
  messagingSenderId: "782924787093",
  appId: "1:782924787093:web:f88ad35956807ff52c5a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
