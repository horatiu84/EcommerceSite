import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFUhTxWftts2mZfKz719il03U_1KVyoq4",
  authDomain: "crown-shop-db-83c23.firebaseapp.com",
  projectId: "crown-shop-db-83c23",
  storageBucket: "crown-shop-db-83c23.appspot.com",
  messagingSenderId: "289444821978",
  appId: "1:289444821978:web:bb123e2723eac974ae9ee3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
