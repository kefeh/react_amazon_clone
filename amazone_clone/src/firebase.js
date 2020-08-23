import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWBaQouvrPOGmbWX1bWOB3Ai6Ca0vzXRU",
    authDomain: "e-clone-68ac1.firebaseapp.com",
    databaseURL: "https://e-clone-68ac1.firebaseio.com",
    projectId: "e-clone-68ac1",
    storageBucket: "e-clone-68ac1.appspot.com",
    messagingSenderId: "458926069217",
    appId: "1:458926069217:web:7c9a26a08cb0a2c5276ea0",
    measurementId: "G-GMN60H5MKY"
})

const auth = firebase.auth();

export {auth};