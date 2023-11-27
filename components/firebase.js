// firebase.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
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

export { app, analytics };
