//import firebase sdk from firebase module
import firebase from "firebase/app";
// realtime database library
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCgK3oA9j9l2i7YVbx_uGJDbe-3g9uqG0E",
    authDomain: "project5-31701.firebaseapp.com",
    databaseURL: "https://project5-31701.firebaseio.com",
    projectId: "project5-31701",
    storageBucket: "project5-31701.appspot.com",
    messagingSenderId: "361138521711",
    appId: "1:361138521711:web:fb490152ae8004d51fef9a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;