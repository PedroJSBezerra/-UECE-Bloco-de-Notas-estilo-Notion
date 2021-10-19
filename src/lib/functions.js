//======== IMPORT DATA ============
import { initializeApp } from "firebase/app";
import { writable } from 'svelte/store'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { 
  getFirestore, 
  onSnapshot, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  collection 
} from 'firebase/firestore'

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
export const currentDoc = writable(
  {
    id: '',
    data:{
      title: "Escolha um documento na lista", 
      data: "",
    },
    geolocation: [], 
  }
)
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
export const getDocs = () => {

  const db = getFirestore()
  const auth = getAuth()

  onSnapshot(collection(db, auth.currentUser.uid), (querySnapshot) => {
    let documentList = []
    querySnapshot.forEach((doc) => {
      let docobj = {
        id:doc.id,
        data: doc.data(),
        geolocation: doc.geolocation,
      }
      documentList.push(docobj)
    })
    docList.set(documentList)
  })
}
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
export const addDocument = () => {
  let documentObject = {
    title: 'Novo documento',
    data: '',
    geolocation: []
  }
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
  let db = getFirestore()
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
export const addLocation = (currentDoc) => {
  navigator.geolocation.getCurrentPosition( position => {
    const {latitude, longitude} = position.coords
    
    let date = new Date(position.timestamp)
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    let geolocation = `${latitude} ${longitude}`
    let geolocation_date = `${day}/${month}/${year}`
    let geolocation_time = `${hour}:${minute}:${second}`
    let geoobj = {
      date: geolocation_date,
      time: geolocation_time,
      coordinates: geolocation,
    }
    currentDoc.geolocation.concat(geoobj)
  })
}
