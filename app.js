//npm install browserify-fs
var taskName = document.getElementById("inputAddTask")
var date = document.getElementById("inputPickADate")
var btnAddTask = document.getElementById("btnAddTask");
var submit = document.getElementsByClassName("fas")[0];

var task = document.querySelector(".task")

/*JAVASCRIPT*/

fetch('./db.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    let task_list = document.querySelector(".task-list")
    var count = Object.keys(data.tasks).length;

    for(let i = 0; i < count; i++) {
      let newTask = task.cloneNode(true)
      task_list.appendChild(newTask);

      newTask.querySelector("#taskHeader").value = data.tasks[i].ts_name
      newTask.querySelector("#taskDate").value = data.tasks[i].ts_date
    }

})

function addTaskFn(){
  let task_list = document.querySelector(".task-list")
  if(taskName.value == null || taskName.value == "" || date.value == "" || date.value == null){
    alert("Please fill all empty fields!");
    return false;
  }

  let newTask = task.cloneNode(true)
  task_list.appendChild(newTask);

  newTask.querySelector("#taskHeader").value = taskName.value
  newTask.querySelector("#taskDate").value = date.value

  fetch('./db.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      var count = Object.keys(data.tasks).length;
      var idCount = count + 1;

      const newTaskDetails = {
        "ts_id": idCount,
        "ts_name": newTask.querySelector("#taskHeader").value,
        "ts_date": newTask.querySelector("#taskDate").value
      }

    })
    .catch((err) => console.log(err));
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

function submitChanges(button){
  let task = button.parentNode.parentNode
  task.querySelector("#taskHeader").readOnly = true
  task.querySelector("#taskHeader").style.borderBottom = "none"
}