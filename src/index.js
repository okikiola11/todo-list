
import { AddTodolist, removeTodolist } from './addremove';
import Todolist, { displaytodolists } from './createtodolist';
import { Project, displayprojects } from './createproject';
import {
  gettodovalues,
  createtodo,
  getprojectvalues,
  createproject,
  displayProjects,
  getprojectsclick,
  posttodovalues,
  todoform,
  tododetails,
  details,
  projectform,
  showdetails,
  displayTodolists,
} from './dom';

const getlocalstorage = () => {
  let projects = [];
  if (localStorage.getItem('projectsList')) {
    projects = JSON.parse(localStorage.getItem('projectsList'));
  } else {
    projects = [{ name: 'Default', todolist: [], id: 0 }];
  }
  return projects;
};
const projectsList = getlocalstorage();
let selectedtodo = null;
let selectedproject = 0;
/* eslint no-use-before-define: 0 */
const desplayItems = (itemDiv, itemsList, itemMethod) => {
  itemDiv.innerHTML = '';
  itemsList.forEach((item) => {
    itemMethod(item, itemDiv, adddeletetotodos, addedittotodos, showdet);
  });
};
const adddeletetotodos = (e) => {
  const idx = parseInt(e.target.value, 10);
  removeTodolist(projectsList[selectedproject].todolist, idx);
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  desplayItems(
    displayTodolists,
    projectsList[selectedproject].todolist,
    displaytodolists,
  );
};

const showdet = (e) => {
  const idx = parseInt(e.target.parentElement.id, 10);
  const index = projectsList[selectedproject].todolist.findIndex(
    (x) => x.id === idx,
  );

  tododetails.className = 'todo_details';
  details.classList.add(e.target.parentElement.classList[1]);

  const det = showdetails();
  const stodo = projectsList[selectedproject].todolist[index];
  det.title.innerHTML = stodo.title;
  det.priority.innerHTML = stodo.priority;
  det.date.innerHTML = stodo.dueDate;
  det.description.innerHTML = stodo.description;
};

const addedittotodos = (e) => {
  const idx = parseInt(e.target.value, 10);
  const index = projectsList[selectedproject].todolist.findIndex(
    (x) => x.id === idx,
  );
  selectedtodo = index;
  const editedtodo = projectsList[selectedproject].todolist[index];
  todoform.className = 'todo_form';
  posttodovalues(
    editedtodo.title,
    editedtodo.description,
    editedtodo.priority,
    editedtodo.dueDate,
  );
  desplayItems(
    displayTodolists,
    projectsList[selectedproject].todolist,
    displaytodolists,
  );
};

const addToChosenObject = (target, id, myobject, todo) => {
  const index = target.findIndex((x) => x.id === id);
  AddTodolist(target[index][myobject], todo);
};

createtodo.addEventListener('click', (e) => {
  e.preventDefault();
  const todo = gettodovalues();
  if (createtodo.className === 'createtodo_buttons') {
    const newtodo = new Todolist(
      todo.todotitle,
      todo.tododescription,
      todo.tododate,
      todo.todopriority,
    );
    addToChosenObject(projectsList, selectedproject, 'todolist', newtodo);
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  } else if (createtodo.className === 'edittodo_buttons') {
    const editedtodo = new Todolist(
      todo.todotitle,
      todo.tododescription,
      todo.tododate,
      todo.todopriority,
      selectedtodo,
    );
    projectsList[selectedproject].todolist[selectedtodo] = editedtodo;
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  }
  todoform.className = 'none';
  desplayItems(
    displayTodolists,
    projectsList[selectedproject].todolist,
    displaytodolists,
  );
});

createproject.addEventListener('click', (e) => {
  e.preventDefault();
  const project = getprojectvalues();
  const newproject = Project(project);
  AddTodolist(projectsList, newproject);
  desplayItems(displayProjects, projectsList, displayprojects);
  projectclick = getprojectsclick();
  addeventtoclickproject();
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  projectform.className = 'none';
});

desplayItems(displayProjects, projectsList, displayprojects);
desplayItems(
  displayTodolists,
  projectsList[selectedproject].todolist,
  displaytodolists,
);

let projectclick = getprojectsclick();

const addeventtoclickproject = () => {
  projectclick.forEach((project) => {
    project.addEventListener('click', (e) => {
      e.preventDefault();
      selectedproject = parseInt(e.target.parentElement.id, 10);
      desplayItems(
        displayTodolists,
        projectsList[selectedproject].todolist,
        displaytodolists,
      );
    });
  });
};

addeventtoclickproject();
