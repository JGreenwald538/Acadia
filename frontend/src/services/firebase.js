import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Destructure environment variables from import.meta.env
const {
  VITE_APIKEY: apiKey,
  VITE_AUTHDOMAIN: authDomain,
  VITE_PROJECTID: projectId,
  VITE_STORAGEBUCKET: storageBucket,
  VITE_MESSAGINGSENDERID: messagingSenderId,
  VITE_APPID: appId,
} = import.meta.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
