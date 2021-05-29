import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
    apiKey: "AIzaSyD3VGxiSqyZw3AQGoVaiiWzn03WlAiCDgg",
    authDomain: "purrfect-pair-a5a2c.firebaseapp.com",
    projectId: "purrfect-pair-a5a2c",
    storageBucket: "purrfect-pair-a5a2c.appspot.com",
    messagingSenderId: "147073974389",
    appId: "1:147073974389:web:10cf248a2d90ecec1df83c",
    measurementId: "G-0VGE040FWV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const functions = firebaseApp.functions();
export { auth, functions };
export default db;
