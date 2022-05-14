// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb6O18SD2A74HTFdEJEMkXtvc3Jri5eA4",
  authDomain: "todo-test-2-fa053.firebaseapp.com",
  projectId: "todo-test-2-fa053",
  storageBucket: "todo-test-2-fa053.appspot.com",
  messagingSenderId: "207214281128",
  appId: "1:207214281128:web:664be22acfe52dbfcd1d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app)