import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBxi1GzjCawGwJeneMev5LLAYAJiqVmOnU",
  authDomain: "next-auth-6ddc2.firebaseapp.com",
  projectId: "next-auth-6ddc2",
  storageBucket: "next-auth-6ddc2.appspot.com",
  messagingSenderId: "527112644974",
  appId: "1:527112644974:web:fcc9831ef8f816af77f97f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)