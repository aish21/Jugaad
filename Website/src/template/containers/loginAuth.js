import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE60wJlGYdIfAUM9wg2SLEKGcXVcbP6JU",
  authDomain: "jugaad-dc4e0.firebaseapp.com",
  projectId: "jugaad-dc4e0",
  storageBucket: "jugaad-dc4e0.appspot.com",
  messagingSenderId: "944531526558",
  appId: "1:944531526558:web:d62865229402e50e8d3c8f",
  measurementId: "G-2FEN0WZXKX"
};

export function authorizeUser(email, password) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
    });
}

export function signUpUser(email, password) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}