import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shoppy-3b70c.firebaseapp.com",
  databaseURL:
    "https://shoppy-3b70c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-3b70c",
  storageBucket: "shoppy-3b70c.appspot.com",
  messagingSenderId: "299784274560",
  appId: "1:299784274560:web:51a552fc176d9953381c65",
  measurementId: "G-ZWZECKK9G5",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);
export { app, auth, db };
