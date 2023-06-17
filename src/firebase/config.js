import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAnTu3_tdbO2fhE3VUvWfsQkd0omp2jTwU",
    authDomain: "thedojosite-ab601.firebaseapp.com",
    projectId: "thedojosite-ab601",
    storageBucket: "thedojosite-ab601.appspot.com",
    messagingSenderId: "565403631569",
    appId: "1:565403631569:web:957c4d419b3e14c8ceeaf0"
  };

  firebase.initializeApp(firebaseConfig)


  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth ()
  const projectStorage = firebase.storage ()
  const timestamp = firebase.firestore.Timestamp
  
  export {projectFirestore, projectAuth, projectStorage, timestamp}