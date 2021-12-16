

/*var task = '<div class="task">' +
                    '<div class="left-ctn">'+ 
                        '<input type="checkbox" id="checkbox">'+
                        '<div class="task-content">'+
                            '<input type="text" value="Example Task" id="taskHeader" readonly>'+
                            '<input type="text" value="2021-07-07" id="taskDate" readonly>'+
                        '</div>'+
                    '</div>'+
                    '<div class="taskActions">'+
                        '<i class="fas fa-check" onclick="submitChanges(this)"></i>'+
                        '<i class="fas fa-pen" onclick="editTask(this)"></i>'+
                        '<i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>'+
                    '</div>'+
                '</div>'
*/

/*fetch('./db.json')
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

})*/

/*fetch('./db.json')
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
*/

//npm install browserify-fs
var taskName = document.getElementById("inputAddTask")
var date = document.getElementById("inputPickADate")
var btnAddTask = document.getElementById("btnAddTask");
var submit = document.getElementsByClassName("fas")[0];
var task = document.querySelector(".task")

let todos = []

function getDataFromLocalStorage(){
  
    console.log(localStorage)
    let taskIzSt = JSON.parse(localStorage.getItem('todos'))

    if(taskIzSt){
      for(let i = 0; i < taskIzSt.length; i++) {
        let task_list = document.querySelector(".task-list")
        let newTask = task.cloneNode(true)

        newTask.querySelector("#taskHeader").value = taskIzSt[i].ts_name
        newTask.querySelector("#taskDate").value = taskIzSt[i].ts_date

        if(taskIzSt[i].completed === true) {
          newTask.querySelector(".checkbox").checked = true
        } else{
          newTask.querySelector(".checkbox").checked === false
        }

        task_list.appendChild(newTask);
      }
        // newTask.querySelector("#taskHeader").value = todos[i].ts_name
        // newTask.querySelector("#taskDate").value = todos[i].date
        // newTask.querySelector("#checkbox").checked = todos[i].completed
    }
}

function isChecked(input) {

  let data = JSON.parse(localStorage.getItem('todos'));
  let task = input.parentNode.parentNode
  let task_header = task.querySelector("#taskHeader")

  if (input.checked) {

    for(let i=0; i<data.length; i++) {
      if(data[i].ts_name == task_header.value){
        data[i].completed = true;
        break;
      }
    }
    

  } else{
    
    for(let i=0; i<data.length; i++) {
      if(data[i].ts_name == task_header.value){
        data[i].completed = false;
        break;
      }
  }

}

localStorage.setItem("todos", JSON.stringify(data));

}

function addTodo(){
  let task_list = document.querySelector(".task-list")

  if(taskName.value == null || taskName.value == "" || date.value == "" || date.value == null){
    alert("Please fill all empty fields!");
    return false;
  } 

  else{
    
    const LS_task = {
      ts_name: taskName.value,
      ts_date: date.value,
      completed: false
    }

    todos.push(LS_task)
    
    let newTask = task.cloneNode(true)
    task_list.appendChild(newTask);

    newTask.querySelector("#taskHeader").value = taskName.value
    newTask.querySelector("#taskDate").value = date.value

    localStorage.setItem('todos', JSON.stringify(todos));

    console.log(todos)
    console.log(localStorage)
  }

}

function deleteTask(button){
  let data = JSON.parse(localStorage.getItem('todos'));
  let task = button.parentNode.parentNode
  let task_header = task.querySelector("#taskHeader")

  if(confirm("Are you sure you want to delete this task?")){

    for(let i=0; i<data.length; i++) {
      if(data[i].ts_name == task_header.value){
        data.splice(i, 1);
      }
    }

    task.parentNode.removeChild(task)
    console.log("Data length: " + data.length)
    
    for(let i=0; i<data.length; i++) {
      console.log(data[i])
    }

    localStorage.setItem("todos", JSON.stringify(data));

  } 

}

var temp_header = ''

function editTask(button){
  let task = button.parentNode.parentNode
  let task_header = task.querySelector("#taskHeader")
  temp_header = task_header.value

  task_header.readOnly = false
  task_header.style.borderBottom = "1px solid white"
}

function submitChanges(button){

  let data = JSON.parse(localStorage.getItem('todos'));
  let task = button.parentNode.parentNode
  let task_header = task.querySelector("#taskHeader")
  
  task_header.readOnly = true
  task_header.style.borderBottom = "none"

  for(let i=0; i<data.length; i++) {
    if(data[i].ts_name == temp_header){
      data[i].ts_name = task_header.value
      localStorage.setItem("todos", JSON.stringify(data));
    }
  }

}

function clearLocalStorage(){
  window.localStorage.clear();
  location.reload();
}

getDataFromLocalStorage();