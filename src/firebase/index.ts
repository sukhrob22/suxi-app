import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_J8a_2tSvaeRYnZb8JpScB-uArJUvj0M",
  authDomain: "suxi-movie-app.firebaseapp.com",
  projectId: "suxi-movie-app",
  storageBucket: "suxi-movie-app.appspot.com",
  messagingSenderId: "7848383553",
  appId: "1:7848383553:web:9ab6fdefc29b657b9022c0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { db, auth }