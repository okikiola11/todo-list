const addproject = document.getElementById('show_project_form');
const projectform = document.getElementById('project_form');
const addtodo = document.getElementById('show_todo_form');
const todoform = document.getElementById('todo_form');
const closes = document.querySelectorAll('.close');
const createtodo = document.getElementById('create_todo');
const createproject = document.getElementById('create_project');
const displayProjects = document.getElementById('display_projects');
const displayTodolists = document.getElementById('display_todolists');
const tododetails = document.getElementById('tododetails');
const details = document.querySelector('.details');

addproject.addEventListener('click', () => {
  projectform.className = 'project_form';
});
addtodo.addEventListener('click', () => {
  todoform.className = 'todo_form';
  createtodo.className = 'createtodo_buttons';
});
closes.forEach((close) => {
  close.addEventListener('click', (e) => {
    e.preventDefault();
    todoform.className = 'none';
    projectform.className = 'none';
    tododetails.className = 'none';
  });
});
const accestodovalues = () => {
  const todotitle = document.getElementById('title');
  const tododescription = document.getElementById('description');
  const todopriority = document.getElementById('priority');
  const tododate = document.getElementById('date');
  return {
    todotitle,
    tododescription,
    todopriority,
    tododate,
  };
};
const getdetails = () => {
  const tododetails = document.querySelectorAll('.todolist_title');
  return tododetails;
};
const gettodovalues = () => {
  const val = accestodovalues();
  const [todotitle, tododescription, todopriority, tododate] = [
    val.todotitle.value,
    val.tododescription.value,
    val.todopriority.value,
    val.tododate.value,
  ];
  return {
    todotitle,
    tododescription,
    todopriority,
    tododate,
  };
};

const posttodovalues = (title, desc, prio, date) => {
  const val = accestodovalues();

  val.todotitle.value = title;
  val.tododescription.value = desc;
  val.todopriority.value = prio;
  val.tododate.value = date;
  createtodo.value = 'save';
  createtodo.className = 'edittodo_buttons';
};
const getprojectvalues = () => {
  const projectname = document.getElementById('name').value;
  return projectname;
};
const getprojectsclick = () => {
  const projectsListClick = document.querySelectorAll('.project_name');
  return projectsListClick;
};

const getdeletebutton = () => {
  const todolistDeletetodo = document.querySelector('.todolist_deletetodo');
  return todolistDeletetodo;
};

const showdetails = () => {
  const title = document.getElementById('details_title');
  const priority = document.getElementById('details_priority');
  const date = document.getElementById('details_date');
  const description = document.getElementById('details_description');
  return {
    title,
    priority,
    date,
    description,
  };
};
export {
  addproject,
  addtodo,
  closes,
  createtodo,
  gettodovalues,
  getprojectvalues,
  createproject,
  displayProjects,
  getprojectsclick,
  displayTodolists,
  getdeletebutton,
  posttodovalues,
  todoform,
  tododetails,
  getdetails,
  details,
  projectform,
  showdetails,
};
