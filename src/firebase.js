import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Entry point for the project and firebase app
const firebaseApp = initializeApp(firebaseConfig);

//Authentication
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
