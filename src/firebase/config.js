import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

console.log("env vars", process.env.REACT_APP_TEST_VAR);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_API_KEY,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db };
