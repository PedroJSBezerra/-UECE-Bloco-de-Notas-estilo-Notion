// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// Initialize Firebase
firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAKoiwLVrDDiCLHTIpPgylwlw_gi8XRZ20",
  authDomain: "xternapp.firebaseapp.com",
  projectId: "xternapp",
  storageBucket: "xternapp.appspot.com",
  messagingSenderId: "740351658749",
  appId: "1:740351658749:web:9149120ef83c07feb6cc94"
});
// database reference
export const db = firebase.firestore()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

function add(){
  // Add a new document in collection "users"
  db
    .collection("users")
    .doc() //random document id generated// use .add instead .doc().set() is valid
    .set({
      uuid: "google user id",
      avatar: "google avatar url"
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}