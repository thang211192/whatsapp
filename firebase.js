import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHndmFKy8ugmku7xr1Z54IGx4Fs_Xbbyw",
    authDomain: "whatsapp-19b0b.firebaseapp.com",
    projectId: "whatsapp-19b0b",
    storageBucket: "whatsapp-19b0b.appspot.com",
    messagingSenderId: "105069283707",
    appId: "1:105069283707:web:aefb98e281eb36a13195de",
    measurementId: "G-PZFK39P5DT"
  };

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }