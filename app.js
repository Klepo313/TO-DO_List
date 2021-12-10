// Import the functions you need from the SDKs you need
/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFmMd4Iur3GCLcO3-IWu8fzNUtGByCQJM",
  authDomain: "to-do-live-8dd25.firebaseapp.com",
  projectId: "to-do-live-8dd25",
  storageBucket: "to-do-live-8dd25.appspot.com",
  messagingSenderId: "1021120218423",
  appId: "1:1021120218423:web:c16587b02867223e04c6b2",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

*/

/*JAVASCRIPT*/
var taskName = document.getElementById("inputAddTask")
var date = document.getElementById("inputPickADate")
var btnAddTask = document.getElementById("btnAddTask");
var submit = document.getElementsByClassName("fas")[0];

var task = document.querySelector(".task")

function addTaskFn(){
  let task_list = document.querySelector(".task-list")
  if(taskName.value == null || taskName.value == "" || date.value == "" || date.value == null){
    alert("Please fill all empty fields!");
    return false;
  }

  var newTask = task.cloneNode(true);
  task_list.appendChild(newTask);

  /*db.collection("todo-items").add({
    text: taskName.value,
    date: date.value
  })*/

  newTask.querySelector("#taskHeader").value = taskName.value;
  newTask.querySelector("#taskDate").value = date.value;
}

function deleteTask(button){
  /*alert("Are you sure you want to delete this task?!");*/
  if(confirm("Are you sure you want to delete this task?")){
    let task_list = button.parentNode.parentNode
    task_list.parentNode.removeChild(task_list)
  } else{

  }
}
function editTask(button){
  let task = button.parentNode.parentNode
  task.querySelector("#taskHeader").readOnly = false
  task.querySelector("#taskHeader").style.borderBottom = "1px solid white"
}
submit.addEventListener("click", function(){
  task.querySelector("#taskHeader").readOnly = true
  task.querySelector("#taskHeader").style.borderBottom = "none"
})

