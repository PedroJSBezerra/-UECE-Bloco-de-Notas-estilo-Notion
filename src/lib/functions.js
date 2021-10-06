//======== IMPORT DATA ============
import { initializeApp } from "firebase/app";
import { writable } from 'svelte/store'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, addDoc, updateDoc, deleteDoc, collection } from 'firebase/firestore'

//========= Initialize Firebase ==========
initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAKoiwLVrDDiCLHTIpPgylwlw_gi8XRZ20",
  authDomain: "xternapp.firebaseapp.com",
  projectId: "xternapp",
  storageBucket: "xternapp.appspot.com",
  messagingSenderId: "740351658749",
  appId: "1:740351658749:web:9149120ef83c07feb6cc94"
});
// ======== EXPORT DATA ==========
export let docList = writable([])
export const open = writable(false)
export const currentDoc = writable({title: "Escolha um documento na lista", data: ""})
export const loged = writable('loading')
//======= AUTH OBSERVER ===============
onAuthStateChanged(getAuth(), (user) => {
  if(user){
    console.log('Observer: signed in '+ user.displayName)
    loged.set('loged')
  }else{
    console.log('Observer: not signed.')
    loged.set('logedOut')
  }
})
// //========= REALTIME DATABASE FROM FIRESTORE ==========
// onSnapshot(collection(db, 'getAuth().currentUser.uid'), (querySnapshot) => {
//   let documentList = []
//   querySnapshot.forEach((doc) => {
//     documentList.push(doc)
//   })
//   docList.set(documentList)
//   console.log('snap!')
// })

// ======== SOME FUNCTIONS =================
export const login = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Loged-in with user: "+ result.user.displayName)
    }).catch((error) => {
      const errorMessage = error.message
      console.log(errorMessage)
    })
}
export const addDocument = (documentObject) => {
  const db = getFirestore()
  const auth = getAuth()
  let uidCollection = auth.currentUser.uid
  addDoc(collection(db, uidCollection), documentObject)
}
export const updateDocument = (docId,documentObject) => {
  const db = getFirestore()
  const auth = getAuth()
  let uidCollection = auth.currentUser.uid
  updateDoc(doc(db, uidCollection, docId), documentObject)
}
export const deleteDocument = (docId) => {
  let uidCollection = getAuth().currentUser.uid
  deleteDoc(doc(db, uidCollection, docId))
}
export const clickOutside = (node) => {

  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click_outside', node)
      )
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
