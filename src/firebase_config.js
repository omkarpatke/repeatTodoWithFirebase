import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyBZrXuH2Oen-1tbFfBZAFhhAdNrVNSzybM",
    authDomain: "repeattodowithfirebase.firebaseapp.com",
    projectId: "repeattodowithfirebase",
    storageBucket: "repeattodowithfirebase.appspot.com",
    messagingSenderId: "390440542011",
    appId: "1:390440542011:web:6caefb9e99d9cc2859611e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };