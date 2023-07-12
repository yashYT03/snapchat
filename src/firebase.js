import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDaEG51UP-6kL3cfxLw8i6YWLR4NalFEKk",
    authDomain: "snapchat-540ac.firebaseapp.com",
    projectId: "snapchat-540ac",
    storageBucket: "snapchat-540ac.appspot.com",
    messagingSenderId: "967328899381",
    appId: "1:967328899381:web:814370c28dfd7fd3d2ec7c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db, auth, storage, provider };
  