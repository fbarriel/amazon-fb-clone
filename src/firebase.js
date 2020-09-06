import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA41IrY4y346V6t3Vxy7VNlrLV4nx826OY",
  authDomain: "fb-clone-52aa0.firebaseapp.com",
  databaseURL: "https://fb-clone-52aa0.firebaseio.com",
  projectId: "fb-clone-52aa0",
  storageBucket: "fb-clone-52aa0.appspot.com",
  messagingSenderId: "46377562331",
  appId: "1:46377562331:web:1352f0159fe2ee2c8d1cfe"
});

/*const db = firebaseApp.firestore();*/
const auth = firebase.auth();

export { /*db,*/ auth };