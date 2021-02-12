const Project = (name, todolist = [], id = null) => ({
  name,
  todolist,
  id,
});

const displayprojects = (project, displayProjects) => {
  const projectContainer = document.createElement('div');
  projectContainer.id = project.id;
  projectContainer.className = 'project_container';
  displayProjects.appendChild(projectContainer);

  const projectName = document.createElement('h2');
  projectName.className = 'project_name';
  projectName.innerHTML = project.name;
  projectContainer.appendChild(projectName);
}

export { Project, displayprojects };