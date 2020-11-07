import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCHI1F1PZ2TJLkSjc5HIZKmL0N8fEj--dE",
    authDomain: "whatwas-1bc76.firebaseapp.com",
    databaseURL: "https://whatwas-1bc76.firebaseio.com",
    projectId: "whatwas-1bc76",
    storageBucket: "whatwas-1bc76.appspot.com",
    messagingSenderId: "990905885306",
    appId: "1:990905885306:web:53971d4e636232cfbdd1c3",
    measurementId: "G-MTEF0928K9"
});

export {firebaseConfig as firebase};