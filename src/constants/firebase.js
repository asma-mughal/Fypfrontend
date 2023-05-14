import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB3HPSQhCJryHv_SQlLvRMkWRnf3g3nd7M",
  authDomain: "fyphelpinghands.firebaseapp.com",
  projectId: "fyphelpinghands",
  storageBucket: "fyphelpinghands.appspot.com",
  messagingSenderId: "990209295947",
  appId: "1:990209295947:web:02a1d2deb478e2d8ed2fce",
  measurementId: "G-WXVHH0HSR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);