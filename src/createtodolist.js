export default class Todolist {
  constructor(title, description, dueDate, priority, id = null) {
    [this.title, this.description, this.dueDate, this.priority, this.id] = [
      title,
      description,
      dueDate,
      priority,
      id,
    ];
  }
}
const priority = (num) => {
  const priorityObj = {
    1: 'low',
    2: 'medium',
    3: 'High',
    4: 'Urgent',
  };
  return priorityObj[num];
};

export const displaytodolists = (
  todolist,
  displayTodolists,
  deletemethod,
  edittodomethod,
  showdetails,
) => {
  const todolistContainer = document.createElement('div');
  todolistContainer.id = todolist.id;
  todolistContainer.className = 'todolist_container';
  todolistContainer.classList.add(priority(todolist.priority));
  displayTodolists.appendChild(todolistContainer);

  const todolisttitle = document.createElement('h2');
  todolisttitle.className = 'todolist_title';
  todolisttitle.innerHTML = todolist.title;
  todolisttitle.onclick = showdetails;
  todolistContainer.appendChild(todolisttitle);

  const duedate = document.createElement('p');
  duedate.className = 'todolist_date';
  duedate.innerHTML = todolist.dueDate;
  todolistContainer.appendChild(duedate);

  const todoconf = document.createElement('div');
  todoconf.className = 'todolist_todoconf';
  todolistContainer.appendChild(todoconf);

  const edittodo = document.createElement('button');
  edittodo.className = 'todolist_edittodo';
  edittodo.innerHTML = 'Edit';
  edittodo.value = todolist.id;
  edittodo.onclick = edittodomethod;
  todoconf.appendChild(edittodo);

  const deletetodo = document.createElement('button');
  deletetodo.className = 'todolist_deletetodo';
  deletetodo.innerHTML = 'delete';
  deletetodo.value = todolist.id;
  deletetodo.onclick = deletemethod;
  todoconf.appendChild(deletetodo);
};
