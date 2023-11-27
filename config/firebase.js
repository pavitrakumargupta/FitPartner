// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFIGg2kbYFhxJ44X5n7Y3PbRgqNZ-yvbk",
  authDomain: "movieappauth-3705f.firebaseapp.com",
  projectId: "movieappauth-3705f",
  storageBucket: "movieappauth-3705f.appspot.com",
  messagingSenderId: "1090304663215",
  appId: "1:1090304663215:web:e7849cf5f507a4fecafe5a",
  measurementId: "G-KPLKC36NXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;