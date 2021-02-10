/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
import todoItems from './todoItem';

const TodoListItem = (list) => {
  const liDone = false;
  const li = document.createElement('li');
  const liForm = document.createElement('form');

  const liTitleDiv = document.createElement('div');
  const liTitle = document.createElement('input');
  liTitle.required = true;
  liTitle.type = 'text';
  liTitle.placeholder = 'Enter a todo task title';
  const liCheck = document.createElement('i');
  const liDelete = document.createElement('i');
  const liCaret = document.createElement('i');
  const liToggleDetail = document.createElement('a');

  const liDetail = document.createElement('div');
  const liDetailTop = document.createElement('div');
  const liDescription = document.createElement('textarea');
  liDescription.placeholder = 'Enter todo task details';

  const liDetailBottom = document.createElement('div');
  const liDue = document.createElement('div');
  const liDueInput = document.createElement('input');
  liDueInput.type = 'date';
  liDueInput.value = new Date().toISOString().substring(0, 10);
  const liDueLbl = document.createElement('label');
  liDueLbl.innerHTML = 'Due:';

  const liPriority = document.createElement('div');
  const liPriorityLbl = document.createElement('label');
  liPriorityLbl.innerHTML = 'Priority';
  const liPriorityInput = document.createElement('select');

  const liBtns = document.createElement('div');
  const saveBtnIcon = document.createElement('i');
  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  const cancelBtn = document.createElement('i');

  for (let indexValue = 1; indexValue < 5; indexValue += 1) {
    const opt = document.createElement('option');
    opt.innerHTML = indexValue;
    liPriorityInput.appendChild(opt);
    if(index === 4) {
      opt.selected = 'selected';
    }
  }

  liDue.appendChild(liDueLbl);
  liDue.appendChild(liDueInput);
  liDetailTop.appendChild(liDescription);
  liDetailBottom.appendChild(liDue);
  liDetailBottom.appendChild(liPriority);
  liDetailBottom.appendChild(liBtns);
  liDetail.appendChild(liDetailTop);
  liDetail.appendChild(liDetailBottom);

  liToggleDetail.appendChild(liCaret);

  liTitleDiv.appendChild(liCheck);
  liTitleDiv.appendChild(liTitle);
  liTitleDiv.appendChild(liDelete);
  liTitleDiv.appendChild(liToggleDetail);

  liForm.appendChild(liTitleDiv);
  liForm.appendChild(liDetail);

  li.appendChild(liForm);

  const submit = (formItems) => {
    const itemsList = { ...todoItems.Items };
    itemsList.id = generateId(formItems.items);
    itemsList.title = liTitle.value;
    itemsList.description = liDescription.value;
    itemsList.dueDate = liDueInput.value;
    itemsList.priority = liPriorityInput.value;
    itemsList.done = liDone.value;
    formItems.push(itemsList);
  };

  const edit = (list, id) => {
    const listObjects = list.items;
    listObjects.forEach(item => {
      if (item.id == id) {
        item.title = liTitle.value;
        item.description = liDescription.value;
        item.dueDate = liDueInput.value;
        item.priority = liPriorityInput.value;
        item.done = liDone.value;
      }
    });
  };

  const deleteListItems = (list, id) => {
    const listObjects = list.items;
    listObjects.forEach(item => {
      if (item.id == id) {
        listObjects.splice(listObjects.indexOf(item), 1);
      }
    });
  };

  return {
    li,
    submit,
    title: liTitle,
    desc: liDescription,
    due: liDueInput,
    priority: liPriorityInput,
    done: liDone,
  };
};

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

const ProjectList = (list) => {
  const listNode = document.createElement('div');
  const header = listHeader('Projects');
  const actualList = listBody(list, 'project');

  listNode.appendChild(header.container);
  listNode.appendChild(actualList);

  header.addButton.addEventListener('click', () => {
    const newProject = ProjectListItem(list);
    if (!actualList.querySelector('button[data-new=true]')) {
      actualList.insertBefore(newProject.btn, actualList.firstChild);
      newProject.btn.dataset.new = true;
      newProject.startEdit();
    }
  });

  actualList.addEventListener('click', (e) => {
    const mainSection = document.getElementById('main-section');
    const listName = e.target.dataset.name;
    list.items.forEach((item) => {
      if (listName === item.name) {
        setTimeout(() => {
          const todo = TodoList(item);
          mainSection.innerHTML = '';
          mainSection.append(todo);
        }, 100);
      }
    });
  });

  return listNode;
};


const TodoList = (list) => {
  const listNode = document.createElement('div');
  const header = listHeader(list.name);
  const actualList = listBody(list, 'todo');

  listNode.appendChild(header.container);
  listNode.appendChild(actualList);

  header.addButton.addEventListener('click', () => {
    const li = TodoListItem(list);
    if(!actualList.querySelector('li[data-new=true]')) {
      actualList.insertBefore(li.li, actualList.firstChild);
      li.li.dataset.new = true;
    }
  });

  return listNode;
}

const listHeader = (caption) => {
  const container = document.createElement('div');
  container.className = ' list-header';
  const title = document.createElement('h3');
  title.classList = 'text-center w-100 m-0';
  title.innerHTML = caption;
  const addButton = document.createElement('a');
  addButton.classList = 'p-2 d-block';
  addButton.href = '#';
  const icon = document.createElement('i');
  icon.classList = 'plus-btn fas fa-plus-circle';

  addButton.appendChild(icon);
  container.appendChild(title);
  container.appendChild(addButton);

  return { container, title, addButton };
};

const listBody = (itemList, type = null) => {
  const itemUL = document.createElement('ul');
  itemUL.classList = 'list-group list-group-flush';

  renderList(itemUL, itemList, type);

  itemUL.addEventListener('submit', () => {
    setTimeout(() => {
      itemUL.innerHTML = '';
      renderList(itemUL, itemList, type);
    }, 300);
  });

  return itemUL;
};

const generateId = (list) => {
  const ids = list.map((i) => i.id);
  if (ids.length === 0) {
    return 0;
  }
  return Math.max(...ids) + 1;
};

const renderList = (ul, itemList, type = 'todo') => {
  itemList.items.forEach(i => {
    if (type === 'project') {
      const newItem = ProjectListItem(itemList);
      newItem.name.value = i.name;
      newItem.name.readOnly = 'true';
      newItem.btn.dataset.name = i.name;
      newItem.name.dataset.name = i.name;
      newItem.form.dataset.name = i.name;
      ul.appendChild(newItem.btn);

      newItem.name.addEventListener('dblclick', () => {
        newItem.name.removeAttribute('readonly');
      });
    } else {
      const newItem = TodoListItem(itemList);
      newItem.li.dataset.id = i.id;
      newItem.title.value = i.title;
      newItem.title.readOnly = true;
      newItem.desc.value = i.description;
      newItem.due.value = i.due;
      newItem.priority.value = i.priority;
      ul.appendChild(newItem.li);

      newItem.title.addEventListener('dblclick', () => {
        newItem.title.removeAttribute('readonly');
      });
    }
  });
};

export default { TodoListItem, TodoList, ProjectList };