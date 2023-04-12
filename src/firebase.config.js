
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCgr2tAeyNkOxsBTgBTVEc5p60AF2LDnGc",
  authDomain: "mjmart-f3ece.firebaseapp.com",
  projectId: "mjmart-f3ece",
  storageBucket: "mjmart-f3ece.appspot.com",
  messagingSenderId: "871620907416",
  appId: "1:871620907416:web:0258742cee7f432769dbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)
export const storage=getStorage(app)
export default app