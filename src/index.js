import './styles/index.css';

const todoInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const taskInfo = document.querySelector('.task-info');
const newTodo = document.createElement('li');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', getSingleTodoItem);

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

function getSingleTodoItem(e) {
  const show = document.createElement('div');
  show.appendChild(newTodo);

  taskInfo.appendChild(show);

}
