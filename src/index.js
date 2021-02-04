import './styles/index.css';

const todoInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const taskInfo = document.querySelector('.task-info');
const newTodo = document.createElement('li');
const addTaskIcon = document.querySelector('.add-task-icon');
const modal = document.querySelector('#modal');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', getSingleTodoItem);
addTaskIcon.addEventListener('click', addNewTask);

// Functions

function addTodo(event) {
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  
  // Create LI
  
  newTodo.innerText = todoInput.value;
  console.log(newTodo);
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  
  // Clear todo Input value
  todoInput.value = "";
}
modal.classList.add('display');

function getSingleTodoItem(e) {
  const show = document.createElement('div');
  show.appendChild(newTodo);

  taskInfo.appendChild(show);
  addNewTask();
}

function addNewTask() {
  // const createNewTaskModalBox = document.createElement('div');
  addTaskIcon.appendChild(modal);
  console.log(addTaskIcon);

}