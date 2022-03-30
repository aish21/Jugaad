import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";
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
export {auth,database, firebasestorage};

export function signUpUser(emailId,password, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID) {
    createUserWithEmailAndPassword(auth, emailId, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        writeUserData(user.uid, emailId, firstName, lastName, companyName, companyContactNo, companyEmail, twitchID);
        // ...
    })
    .catch((error) => {
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
      twitchID: twitchID,
      insta: null,
      fb: null,
      youtube: null,
      twitter: null,
      bannerURL: "/banner/banner-1.jpg"
    })
    .then(() => {
        console.log("user data registered");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
    });
  }

export function writeProductInfo(uid, title, desc, price, photoURL) {
    const prodRef = ref(database, "products/" + uid + "%" + title)
    set(prodRef, {
        desc: desc,
        price: price,
        photoURL: photoURL
      })
      .then(() => {
          console.log("product data registered");
      })
      .catch((error) => {
          const errorCode = error.message;
          console.log(errorCode);
      });
}

export function updateSocialsAndBanner(uid, insta, facebook, youtube, twitter,bannerURL) {
    update(ref(database, "users/" + uid), {
        insta: insta,
        fb: facebook,
        twitter: twitter,
        youtube: youtube,
        bannerURL: bannerURL
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
    });
    alert("User data updated");
}
