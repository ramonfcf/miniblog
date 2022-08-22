import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf4xWoAKLd4xQDWn9HQq3W9lSxOrbMwnw",
  authDomain: "mini-blog-5fcea.firebaseapp.com",
  projectId: "mini-blog-5fcea",
  storageBucket: "mini-blog-5fcea.appspot.com",
  messagingSenderId: "98941275596",
  appId: "1:98941275596:web:a6c1411269c1dba5a8e169"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };