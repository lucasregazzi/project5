//import firebase sdk from firebase module
import firebase from "firebase/app";
// realtime database library
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAS2ZniN68tC6pujBy5cckqpNuvj4YHmUQ",
    authDomain: "arteria-19e5f.firebaseapp.com",
    projectId: "arteria-19e5f",
    storageBucket: "arteria-19e5f.appspot.com",
    messagingSenderId: "859275627034",
    appId: "1:859275627034:web:9a9a334aac18669cabdfa3"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;