// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC0UpAFrulDBAJDTQ_rkfuOsdWxzC1NZQ8',
    authDomain: 'electro-auth.firebaseapp.com',
    projectId: 'electro-auth',
    storageBucket: 'electro-auth.firebasestorage.app',
    messagingSenderId: '1013353588709',
    appId: '1:1013353588709:web:f3628f2c2975013aa3710c',
    measurementId: 'G-K7CV5HFWYC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
