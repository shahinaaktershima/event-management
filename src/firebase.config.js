// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0YVPiNtk8XEPFbrJStIrrsRvGy1P-wEk",
  authDomain: "event-project-cb4d7.firebaseapp.com",
  projectId: "event-project-cb4d7",
  storageBucket: "event-project-cb4d7.appspot.com",
  messagingSenderId: "228129736371",
  appId: "1:228129736371:web:be60c01fef90ec175152c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;