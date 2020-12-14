import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';
// require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'whatwas-1bc76.firebaseapp.com',
  databaseURL: 'https://whatwas-1bc76.firebaseio.com',
  projectId: 'whatwas-1bc76',
  storageBucket: 'whatwas-1bc76.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: 'G-MTEF0928K9',
};

const firebase = Firebase.initializeApp(config);
firebase.analytics();

export { firebase };
