

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

    console.log("taskIzSt")
    console.log(taskIzSt)

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

// function addToLocalStorage(todos) {
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// function isCompleted(l_date) {
//   todos.forEach((todo_item) => {
//     if (todo_item.id == l_date) {
//       todo_item.completed = !todo_item.completed;
//     }
//   })

//   addToLocalStorage(todos);
// }

function deleteTask(button){
  let task_list = button.parentNode.parentNode

  if(confirm("Are you sure you want to delete this task?")){
    task_list.parentNode.removeChild(task_list)
    localStorage.removeItem('todos');
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

function clearLocalStorage(){
  window.localStorage.clear();
  location.reload();
}

getDataFromLocalStorage();
