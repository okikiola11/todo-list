const createProject = require('../createproject');

describe('Create a project', () => {
  test('Project function exists', () => {
    const project = createProject.Project
    expect(project).toBeDefined();
  });

  test('return project name', () => {
    const project = createProject.Project('study', [], 0);
    expect(project.name).toEqual('study');
  });

  test('return project todos type', () => {
    const project = createProject.Project('study', [], 0);
    expect(typeof project.todolist).toEqual('object');
  });
})