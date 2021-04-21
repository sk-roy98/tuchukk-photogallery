import  firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/database'

  var firebaseConfig = {
    apiKey: "AIzaSyBFvOWVWMtISNzYW7FovmB3TXNtb6UQVik",
    authDomain: "tuchukk-picture-gallery.firebaseapp.com",
    projectId: "tuchukk-picture-gallery",
    storageBucket: "tuchukk-picture-gallery.appspot.com",
    messagingSenderId: "251746717770",
    databaseURL: "https://tuchukk-picture-gallery-default-rtdb.firebaseio.com/",
    appId: "1:251746717770:web:bef2c8235a26c9b43f56b3",
    measurementId: "G-PCP03P1TWR"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
const tuchukkStorage= firebase.storage();
const tuchukkFirestore= firebase.firestore();

export {tuchukkStorage,tuchukkFirestore};
