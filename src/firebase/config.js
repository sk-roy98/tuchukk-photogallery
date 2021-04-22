import  firebase from 'firebase'; 
//  import 'firebase/storage';
//  import 'firebase/firestore';


  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBFvOWVWMtISNzYW7FovmB3TXNtb6UQVik",
    authDomain: "tuchukk-picture-gallery.firebaseapp.com",
    projectId: "tuchukk-picture-gallery",
    storageBucket: "tuchukk-picture-gallery.appspot.com",
    messagingSenderId: "251746717770",
    //databaseURL: "https://tuchukk-picture-gallery-default-rtdb.firebaseio.com/",
    appId: "1:251746717770:web:bef2c8235a26c9b43f56b3",
    measurementId: "G-PCP03P1TWR"
  });

const tuchukkStorage= firebaseApp.storage();
const tuchukkFirestore= firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {tuchukkStorage, tuchukkFirestore, timestamp};
