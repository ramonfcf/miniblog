import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseKeys = process.env.FIREBASE_KEYS;

const firebaseConfig = {
  apiKey: firebaseKeys.apiKey,
  authDomain: firebaseKeys.authDomain,
  projectId: firebaseKeys.projectId,
  storageBucket: firebaseKeys.storageBucket,
  messagingSenderId: firebaseKeys.messagingSenderId,
  appId: firebaseKeys.appId,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
