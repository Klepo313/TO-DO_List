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
dbRef.on('value', snap => taskHeader.innerText = snap.val())

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
*/

var taskName = document.getElementById("inputAddTask")
var date = document.getElementById("inputPickADate")
var btnAddTask = document.getElementById("btnAddTask");
var submit = document.getElementsByClassName("fas")[0];

var task = document.querySelector(".task")

function addTaskFn(){
  if(taskName.value == null || taskName.value == "" || date.value == "" || date.value == null){
    alert("Please fill all empty fields!");
    return false;
  }

  var newTask = task.cloneNode(true);
  task_list.appendChild(newTask);

  newTask.querySelector("#taskHeader").value = taskName.value;
  newTask.querySelector("#taskDate").value = date.value;
}

function deleteTask(button){
  /*alert("Are you sure you want to delete this task?!");*/
  let task_list = button.parentNode.parentNode
  task_list.parentNode.removeChild(task_list)
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

