// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyDnwAdHDzBQZjJNOuXvwXypCdzIZ1kw7CQ",
    authDomain: "belief-4a9c4.firebaseapp.com",
    projectId: "belief-4a9c4",
    storageBucket: "belief-4a9c4.appspot.com",
    messagingSenderId: "96254208481",
    appId: "1:96254208481:web:b4d66f5b14b5d8baa90aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };