/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addremove.js":
/*!**************************!*\
  !*** ./src/addremove.js ***!
  \**************************/
/*! exports provided: AddTodolist, removeTodolist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTodolist\", function() { return AddTodolist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodolist\", function() { return removeTodolist; });\nconst AddTodolist = (target, newtodo) => {\n  if (target.length >= 1) {\n    newtodo.id = target[target.length - 1].id + 1;\n  } else {\n    newtodo.id = 0;\n  }\n\n  target.push(newtodo);\n  return target;\n};\nconst removeTodolist = (target, todoId) => {\n  const index = target.findIndex((x) => x.id === todoId);\n  target.splice(index, 1);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./src/addremove.js?");

/***/ }),

/***/ "./src/createproject.js":
/*!******************************!*\
  !*** ./src/createproject.js ***!
  \******************************/
/*! exports provided: Project, displayprojects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayprojects\", function() { return displayprojects; });\nconst Project = (name, todolist = [], id = null) => ({\n  name,\n  todolist,\n  id,\n});\n\nconst displayprojects = (project, displayProjects) => {\n  const projectContainer = document.createElement('div');\n  projectContainer.id = project.id;\n  projectContainer.className = 'project_container';\n  displayProjects.appendChild(projectContainer);\n\n  const projectName = document.createElement('h2');\n  projectName.className = 'project_name';\n  projectName.innerHTML = project.name;\n  projectContainer.appendChild(projectName);\n};\n\n\n\n//# sourceURL=webpack:///./src/createproject.js?");

/***/ }),

/***/ "./src/createtodolist.js":
/*!*******************************!*\
  !*** ./src/createtodolist.js ***!
  \*******************************/
/*! exports provided: default, displaytodolists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todolist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaytodolists\", function() { return displaytodolists; });\nclass Todolist {\n  constructor(title, description, dueDate, priority, id = null) {\n    [this.title, this.description, this.dueDate, this.priority, this.id] = [\n      title,\n      description,\n      dueDate,\n      priority,\n      id,\n    ];\n  }\n}\nconst priority = (num) => {\n  const priorityObj = {\n    1: 'low',\n    2: 'medium',\n    3: 'High',\n    4: 'Urgent',\n  };\n  return priorityObj[num];\n};\n\nconst displaytodolists = (\n  todolist,\n  displayTodolists,\n  deletemethod,\n  edittodomethod,\n  showdetails,\n) => {\n  const todolistContainer = document.createElement('div');\n  todolistContainer.id = todolist.id;\n  todolistContainer.className = 'todolist_container';\n  todolistContainer.classList.add(priority(todolist.priority));\n  displayTodolists.appendChild(todolistContainer);\n\n  const todolisttitle = document.createElement('h2');\n  todolisttitle.className = 'todolist_title';\n  todolisttitle.innerHTML = todolist.title;\n  todolisttitle.onclick = showdetails;\n  todolistContainer.appendChild(todolisttitle);\n\n  const duedate = document.createElement('p');\n  duedate.className = 'todolist_date';\n  duedate.innerHTML = todolist.dueDate;\n  todolistContainer.appendChild(duedate);\n\n  const todoconf = document.createElement('div');\n  todoconf.className = 'todolist_todoconf';\n  todolistContainer.appendChild(todoconf);\n\n  const edittodo = document.createElement('button');\n  edittodo.className = 'todolist_edittodo';\n  edittodo.innerHTML = 'Edit';\n  edittodo.value = todolist.id;\n  edittodo.onclick = edittodomethod;\n  todoconf.appendChild(edittodo);\n\n  const deletetodo = document.createElement('button');\n  deletetodo.className = 'todolist_deletetodo';\n  deletetodo.innerHTML = 'delete';\n  deletetodo.value = todolist.id;\n  deletetodo.onclick = deletemethod;\n  todoconf.appendChild(deletetodo);\n};\n\n\n//# sourceURL=webpack:///./src/createtodolist.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: addproject, addtodo, closes, createtodo, gettodovalues, getprojectvalues, createproject, displayProjects, getprojectsclick, displayTodolists, getdeletebutton, posttodovalues, todoform, tododetails, getdetails, details, projectform, showdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addproject\", function() { return addproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addtodo\", function() { return addtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closes\", function() { return closes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createtodo\", function() { return createtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gettodovalues\", function() { return gettodovalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectvalues\", function() { return getprojectvalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createproject\", function() { return createproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjects\", function() { return displayProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectsclick\", function() { return getprojectsclick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTodolists\", function() { return displayTodolists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getdeletebutton\", function() { return getdeletebutton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"posttodovalues\", function() { return posttodovalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoform\", function() { return todoform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tododetails\", function() { return tododetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getdetails\", function() { return getdetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"details\", function() { return details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectform\", function() { return projectform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showdetails\", function() { return showdetails; });\nconst addproject = document.getElementById('show_project_form');\nconst projectform = document.getElementById('project_form');\nconst addtodo = document.getElementById('show_todo_form');\nconst todoform = document.getElementById('todo_form');\nconst closes = document.querySelectorAll('.close');\nconst createtodo = document.getElementById('create_todo');\nconst createproject = document.getElementById('create_project');\nconst displayProjects = document.getElementById('display_projects');\nconst displayTodolists = document.getElementById('display_todolists');\nconst tododetails = document.getElementById('tododetails');\nconst details = document.querySelector('.details');\n\naddproject.addEventListener('click', () => {\n  projectform.className = 'project_form';\n});\naddtodo.addEventListener('click', () => {\n  todoform.className = 'todo_form';\n  createtodo.className = 'createtodo_buttons';\n});\ncloses.forEach((close) => {\n  close.addEventListener('click', (e) => {\n    e.preventDefault();\n    todoform.className = 'none';\n    projectform.className = 'none';\n    tododetails.className = 'none';\n  });\n});\nconst accestodovalues = () => {\n  const todotitle = document.getElementById('title');\n  const tododescription = document.getElementById('description');\n  const todopriority = document.getElementById('priority');\n  const tododate = document.getElementById('date');\n  return {\n    todotitle,\n    tododescription,\n    todopriority,\n    tododate,\n  };\n};\nconst getdetails = () => {\n  const tododetails = document.querySelectorAll('.todolist_title');\n  return tododetails;\n};\nconst gettodovalues = () => {\n  const val = accestodovalues();\n  const [todotitle, tododescription, todopriority, tododate] = [\n    val.todotitle.value,\n    val.tododescription.value,\n    val.todopriority.value,\n    val.tododate.value,\n  ];\n  return {\n    todotitle,\n    tododescription,\n    todopriority,\n    tododate,\n  };\n};\n\nconst posttodovalues = (title, desc, prio, date) => {\n  const val = accestodovalues();\n\n  val.todotitle.value = title;\n  val.tododescription.value = desc;\n  val.todopriority.value = prio;\n  val.tododate.value = date;\n  createtodo.value = 'save';\n  createtodo.className = 'edittodo_buttons';\n};\nconst getprojectvalues = () => {\n  const projectname = document.getElementById('name').value;\n  return projectname;\n};\nconst getprojectsclick = () => {\n  const projectsListClick = document.querySelectorAll('.project_name');\n  return projectsListClick;\n};\n\nconst getdeletebutton = () => {\n  const todolistDeletetodo = document.querySelector('.todolist_deletetodo');\n  return todolistDeletetodo;\n};\n\nconst showdetails = () => {\n  const title = document.getElementById('details_title');\n  const priority = document.getElementById('details_priority');\n  const date = document.getElementById('details_date');\n  const description = document.getElementById('details_description');\n  return {\n    title,\n    priority,\n    date,\n    description,\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n/* harmony import */ var _createtodolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtodolist */ \"./src/createtodolist.js\");\n/* harmony import */ var _createproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createproject */ \"./src/createproject.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\n\nconst getlocalstorage = () => {\n  let projects = [];\n  if (localStorage.getItem('projectsList')) {\n    projects = JSON.parse(localStorage.getItem('projectsList'));\n  } else {\n    projects = [{ name: 'Default', todolist: [], id: 0 }];\n  }\n  return projects;\n};\nconst projectsList = getlocalstorage();\nlet selectedtodo = null;\nlet selectedproject = 0;\n/* eslint no-use-before-define: 0 */\nconst desplayItems = (itemDiv, itemsList, itemMethod) => {\n  itemDiv.innerHTML = '';\n  itemsList.forEach((item) => {\n    itemMethod(item, itemDiv, adddeletetotodos, addedittotodos, showdet);\n  });\n};\nconst adddeletetotodos = (e) => {\n  const idx = parseInt(e.target.value, 10);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"removeTodolist\"])(projectsList[selectedproject].todolist, idx);\n  localStorage.setItem('projectsList', JSON.stringify(projectsList));\n  desplayItems(\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"displayTodolists\"],\n    projectsList[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"],\n  );\n};\n\nconst showdet = (e) => {\n  const idx = parseInt(e.target.parentElement.id, 10);\n  const index = projectsList[selectedproject].todolist.findIndex(\n    (x) => x.id === idx,\n  );\n\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"tododetails\"].className = 'todo_details';\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"details\"].classList.add(e.target.parentElement.classList[1]);\n\n  const det = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"showdetails\"])();\n  const stodo = projectsList[selectedproject].todolist[index];\n  det.title.innerHTML = stodo.title;\n  det.priority.innerHTML = stodo.priority;\n  det.date.innerHTML = stodo.dueDate;\n  det.description.innerHTML = stodo.description;\n};\n\nconst addedittotodos = (e) => {\n  const idx = parseInt(e.target.value, 10);\n  const index = projectsList[selectedproject].todolist.findIndex(\n    (x) => x.id === idx,\n  );\n  selectedtodo = index;\n  const editedtodo = projectsList[selectedproject].todolist[index];\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"todoform\"].className = 'todo_form';\n  Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"posttodovalues\"])(\n    editedtodo.title,\n    editedtodo.description,\n    editedtodo.priority,\n    editedtodo.dueDate,\n  );\n  desplayItems(\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"displayTodolists\"],\n    projectsList[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"],\n  );\n};\n\nconst addToChosenObject = (target, id, myobject, todo) => {\n  const index = target.findIndex((x) => x.id === id);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(target[index][myobject], todo);\n};\n\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  const todo = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"gettodovalues\"])();\n  if (_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].className === 'createtodo_buttons') {\n    const newtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      todo.todotitle,\n      todo.tododescription,\n      todo.tododate,\n      todo.todopriority,\n    );\n    addToChosenObject(projectsList, selectedproject, 'todolist', newtodo);\n    localStorage.setItem('projectsList', JSON.stringify(projectsList));\n  } else if (_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].className === 'edittodo_buttons') {\n    const editedtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      todo.todotitle,\n      todo.tododescription,\n      todo.tododate,\n      todo.todopriority,\n      selectedtodo,\n    );\n    projectsList[selectedproject].todolist[selectedtodo] = editedtodo;\n    localStorage.setItem('projectsList', JSON.stringify(projectsList));\n  }\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"todoform\"].className = 'none';\n  desplayItems(\n    _dom__WEBPACK_IMPORTED_MODULE_3__[\"displayTodolists\"],\n    projectsList[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"],\n  );\n});\n\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createproject\"].addEventListener('click', (e) => {\n  e.preventDefault();\n  const project = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectvalues\"])();\n  const newproject = Object(_createproject__WEBPACK_IMPORTED_MODULE_2__[\"Project\"])(project);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(projectsList, newproject);\n  desplayItems(_dom__WEBPACK_IMPORTED_MODULE_3__[\"displayProjects\"], projectsList, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\n  projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n  addeventtoclickproject();\n  localStorage.setItem('projectsList', JSON.stringify(projectsList));\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"projectform\"].className = 'none';\n});\n\ndesplayItems(_dom__WEBPACK_IMPORTED_MODULE_3__[\"displayProjects\"], projectsList, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\ndesplayItems(\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"displayTodolists\"],\n  projectsList[selectedproject].todolist,\n  _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"],\n);\n\nlet projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n\nconst addeventtoclickproject = () => {\n  projectclick.forEach((project) => {\n    project.addEventListener('click', (e) => {\n      e.preventDefault();\n      selectedproject = parseInt(e.target.parentElement.id, 10);\n      desplayItems(\n        _dom__WEBPACK_IMPORTED_MODULE_3__[\"displayTodolists\"],\n        projectsList[selectedproject].todolist,\n        _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"],\n      );\n    });\n  });\n};\n\naddeventtoclickproject();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });