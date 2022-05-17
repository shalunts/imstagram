// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnYni5b6T5VqvtQXETisbrBMIpacL83f4',
  authDomain: 'pictures-firegram.firebaseapp.com',
  projectId: 'pictures-firegram',
  storageBucket: 'pictures-firegram.appspot.com',
  messagingSenderId: '306046901603',
  appId: '1:306046901603:web:d0b48bf173db6540f10756',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
