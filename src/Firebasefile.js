// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW4jaN6TQpkInK_8s7wVvlFaIfjMw-SAU",
    authDomain: "facebook-clone-df9ab.firebaseapp.com",
    projectId: "facebook-clone-df9ab",
    storageBucket: "facebook-clone-df9ab.appspot.com",
    messagingSenderId: "715484174249",
    appId: "1:715484174249:web:a76e3b73d0c6c313ab16b8",
    measurementId: "G-VLXD8CZD0M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;

