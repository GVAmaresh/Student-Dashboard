import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { config } from "dotenv";
config({ path: "./config.env" });
import { FIREBASECONFIG as firebaseConfig } from "./config";

// const firebaseConfig = process.env.FIREBASECONFIG;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
