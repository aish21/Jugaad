import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
const firebasestorage = getStorage(app);

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

export function signUpUser(emailId,password, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID) {
    createUserWithEmailAndPassword(auth, emailId, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        writeUserData(user.uid, emailId, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}

export function writeUserData(uid, emailId, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID) {
    set(ref(database, "users/" + uid), {
      email: emailId,
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      companyContactNo: companyContactNo,
      companyEmail: companyEmail,
      twitchID: twitchID
    })
    .then(() => {
        console.log("user data registered")
        readUserData(uid);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
    });
  }

export function writeProductInfo(uid, title, desc, price, photoURL) {
    set(ref(database, "products/" + uid), {
        title: title,
        desc: desc,
        price: price,
        photoURL: photoURL
      })
      .then(() => {
          console.log("user data registered");
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
      });
}

export function readUserData(uid) {
    const userRef = ref(database, 'users/' + uid);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        return data;
    });
}