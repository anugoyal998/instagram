// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhubkPZl4s_eB1xkS-qEchH1-APTMsvc",
  authDomain: "instagram-d0b00.firebaseapp.com",
  projectId: "instagram-d0b00",
  storageBucket: "instagram-d0b00.appspot.com",
  messagingSenderId: "164474087680",
  appId: "1:164474087680:web:e7d526ddbb2ce6b3766be5",
  measurementId: "G-MDHPVLTB6J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()
// const analytics = getAnalytics(app);

export {app,db,storage}