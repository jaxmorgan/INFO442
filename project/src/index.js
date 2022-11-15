import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqoBen1OT9jVA6f1e3r0f0pqCUZdZVNXw",
  authDomain: "source-info442.firebaseapp.com",
  projectId: "source-info442",
  storageBucket: "source-info442.appspot.com",
  messagingSenderId: "1086599180153",
  appId: "1:1086599180153:web:46f5bfebaab2432342c9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();