// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEoxBtJHz6ResKRSWAXCiPiLolnSNIp0",
  authDomain: "ema-john-simple-eb5c0.firebaseapp.com",
  projectId: "ema-john-simple-eb5c0",
  storageBucket: "ema-john-simple-eb5c0.appspot.com",
  messagingSenderId: "216249469929",
  appId: "1:216249469929:web:ed6db47580ee2edce89978",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
