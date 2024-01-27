import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCFtwCx9JO-QHwcuLYSTFkM4pSMWduEJR0",
  authDomain: "eride-6d8e7.firebaseapp.com",
  projectId: "eride-6d8e7",
  storageBucket: "eride-6d8e7.appspot.com",
  messagingSenderId: "506176569937",
  appId: "1:506176569937:web:3454e685c904c0f592ee70",
  measurementId: "G-YDR4NNHRXW"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
