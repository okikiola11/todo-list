const displayProjects = document.getElementById('display_projects');
const projectform = document.getElementById('project_form');
const addtodo = document.getElementById('show_todo_form');
const todoform = document.getElementById('todo_form');
const addproject = document.getElementById('show_project_form');
const createtodo = document.getElementById('create_todo');

addproject.addEventListener('click', () => {
  projectform.className = 'project_form';
  console.log('Hello');
});
addtodo.addEventListener('click', () => {
  todoform.className = 'todo_form';
  createtodo.className = 'createtodo_buttons';
})