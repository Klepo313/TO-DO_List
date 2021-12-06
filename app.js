/*// Import the functions you need from the SDKs you need
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
dbRef.on('value', snap => taskHeader.innerText = snap.val())*/

var taskName = document.getElementById("inputAddTask")
var date = document.getElementById("inputPickADate");
const btnAddTask = document.getElementById("btnAddTask");

const task_list = document.getElementsByClassName("task-list")[0]

var fas = ["fas fa-check", "fas fa-pen", "fas fa-trash-alt"]
var ijevi = ["i1", "i2", "i3"]

btnAddTask.addEventListener("click", function(){

  let task = document.createElement("div")
  task.classList.add("task")

  let left_ctn = document.createElement("div")
  let inpCheckbox = document.createElement("input")
  inpCheckbox.setAttribute("type", "checkbox");
  let task_content = document.createElement("div")
  let taskHeader = document.createElement("span")
  let taskDate = document.createElement("span")
  let task_actions = document.createElement("div")
  for(var i = 0; i < 3; i++){
    ijevi[i] = document.createElement("i")
    ijevi[i].classList.add(fas[i])
  }
})
