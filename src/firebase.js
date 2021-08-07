import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9gQtHCSj7SsLqCgYDHk99PbRbI4M5kYg",
  authDomain: "clipkboard.firebaseapp.com",
  projectId: "clipkboard",
  storageBucket: "clipkboard.appspot.com",
  messagingSenderId: "805129398915",
  appId: "1:805129398915:web:342c171ef61dbb5825c9b6",
  measurementId: "G-0Z5HW6Q79T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();

//export { auth };

// export { db, auth };
export default db;