import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjemJOk6vmYoz1QAM-7BUUyUW3f8cT3sU",
  authDomain: "react-1e4e0.firebaseapp.com",
  projectId: "react-1e4e0",
  storageBucket: "react-1e4e0.appspot.com",
  messagingSenderId: "1070409152487",
  appId: "1:1070409152487:web:a642eba1e942600f84af42",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
