import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXp6KRvrQLzmN3PRvEjhwQV0Uoygf-53U",
  authDomain: "clone-a4462.firebaseapp.com",
  databaseURL: "https://clone-a4462.firebaseio.com",
  projectId: "clone-a4462",
  storageBucket: "clone-a4462.appspot.com",
  messagingSenderId: "781517221067",
  appId: "1:781517221067:web:9bf20fe30e979663153f4e",
  measurementId: "G-9KLRJT7KNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
