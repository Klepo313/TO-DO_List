// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnjDjXOHcaAJcXoTZtPT6deeFJzf2FO00",
  authDomain: "todo-list-fa916.firebaseapp.com",
  databaseURL: "https://todo-list-fa916-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-fa916",
  storageBucket: "todo-list-fa916.appspot.com",
  messagingSenderId: "939710266868",
  appId: "1:939710266868:web:037ef65d5600d007d98da1",
  measurementId: "G-HVDRCTT55N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var taskHeader = document.getElementById("taskHeader");

var dbRef = firebase.database().ref()
dbRef.on('value', snap => taskHeader.innerText = snap.val())