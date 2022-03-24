import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCE60wJlGYdIfAUM9wg2SLEKGcXVcbP6JU",
  authDomain: "jugaad-dc4e0.firebaseapp.com",
  projectId: "jugaad-dc4e0",
  storageBucket: "jugaad-dc4e0.appspot.com",
  messagingSenderId: "944531526558",
  appId: "1:944531526558:web:d62865229402e50e8d3c8f",
  measurementId: "G-2FEN0WZXKX",
  databaseURL: "https://jugaad-dc4e0-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {app};
export {auth,database};

export function authorizeUser(email, password) {
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
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        writeUserData(user.uid, user.email, "test")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}

export function writeUserData(uid, email, name) {
    set(ref(database, uid), {
      email: email,
    name: name
    })
    .then(() => {
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
    });
  }