/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
import todoItems from './todoItem';

const ProjectListItem = (list) => {
  const btn = document.createElement('button');
  const btnForm = document.createElement('form');
  const submit = document.createElement('button');
  submit.type = 'submit';
  const btnName = document.createElement('input');
  btn.classList = 'btn btn-info rounded-pill text-white p-1 m-1';
  btnName.classList = 'project-name w-100 font-weight-bold text-white';
  submit.classList = 'd-none';
  btn.appendChild(btnForm);
  btnForm.appendChild(btnName);
 
  btnForm.addEventListener('submit', () => {
    const newProject = { ...todoItems.List };
    newProject.name = btnName.value;
    newProject.items = [];
    list.items.push(newProject);

    const mainSection = document.getElementById('main-section');
    
    const todo = TodoList(newProject);
    mainSection.innerHTML = '';
    mainSection.append(todo);
    

  });

  return {
    btn, name: btnName, form: btnForm,
  };
};

