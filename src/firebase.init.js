// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_lwqlEgwf5XiqKuQeTvx5wORddtt2NtQ",
  authDomain: "simple-firebase-practice-d0d1b.firebaseapp.com",
  projectId: "simple-firebase-practice-d0d1b",
  storageBucket: "simple-firebase-practice-d0d1b.appspot.com",
  messagingSenderId: "947014227200",
  appId: "1:947014227200:web:ab85370c7ef4c318254fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;