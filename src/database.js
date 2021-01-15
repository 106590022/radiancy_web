import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDs-XdbdwrgwPkQhs-kuGwu04knK-utd6A",
    authDomain: "quantum-e58e4.firebaseapp.com",
    projectId: "quantum-e58e4",
    storageBucket: "quantum-e58e4.appspot.com",
    messagingSenderId: "331765446078",
    appId: "1:331765446078:web:bce703980fbbc5164a35ef",
    measurementId: "G-K415DH9KXE"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export {
  db,
  auth,
  firebase
}

firebase.auth().onAuthStateChanged(function (user) {
  console.log("(database) userId : " + user.uid)
})

// firebase.auth().signInWithEmailAndPassword(email, pwd).catch(function (error) {
//   var errorCode = error.code
//   var errorMessage = error.message
//   console.log(errorCode)
//   console.log(errorMessage)
// })
