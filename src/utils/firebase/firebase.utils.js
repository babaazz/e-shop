import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  writeBatch,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs55QTcqCz7eGDdSSb2GgspEcM-r4R4F0",
  authDomain: "e-shop-dcac3.firebaseapp.com",
  projectId: "e-shop-dcac3",
  storageBucket: "e-shop-dcac3.appspot.com",
  messagingSenderId: "75543172759",
  appId: "1:75543172759:web:696f6749715adb316ffbd2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firestrore Database
export const db = getFirestore(firebaseApp);

// Authentication////////////////////////////////////////////////////////

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//Sign in with google popup

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Sign in with email and password

export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Creating user document on first sign in with google or on sign up

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

// Sign Up with email and password

export const createUserAuthFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign Out

export const signOutUser = async () => await signOut(auth);

// Auth state change listener

export const authStateChangeListner = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};

// Products data push to database ///////////////////////////////////////////

export const addCollectionToDB = async (collectionKey, docsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  docsToAdd.forEach((docObj) => {
    const docRef = doc(collectionRef, docObj.title);
    batch.set(docRef, docObj);
  });
  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndProducts = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
