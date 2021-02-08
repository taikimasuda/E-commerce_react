import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD4vlq_k5YaydOHJf6xBFWfSuFVhHHs6lU",
  authDomain: "clothing-e-commerce1.firebaseapp.com",
  projectId: "clothing-e-commerce1",
  storageBucket: "clothing-e-commerce1.appspot.com",
  messagingSenderId: "110324669209",
  appId: "1:110324669209:web:4e9d5b3fe535665957c388",
  measurementId: "G-5EJ83YCW7G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;