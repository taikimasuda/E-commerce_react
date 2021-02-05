import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCOToGnmjtnd8lnXKN9IHDul-SpgY6Sm_I",
  authDomain: "clothing-db-318ef.firebaseapp.com",
  databaseURL: "https://clothing-db-318ef.firebaseio.com",
  projectId: "clothing-db-318ef",
  storageBucket: "clothing-db-318ef.appspot.com",
  messagingSenderId: "21092593065",
  appId: "1:21092593065:web:48bd2530764b5d65c128b8",
  measurementId: "G-ZRST43811D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;