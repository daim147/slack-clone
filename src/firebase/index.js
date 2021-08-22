import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjzfXC9_kMyoxOoPofJYqNlof-3gpTh2A",
  authDomain: "slack-clone-b3c4f.firebaseapp.com",
  projectId: "slack-clone-b3c4f",
  storageBucket: "slack-clone-b3c4f.appspot.com",
  messagingSenderId: "693246450682",
  appId: "1:693246450682:web:aa500feb1076983a1c2243",
  measurementId: "G-359V5H5ER3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
