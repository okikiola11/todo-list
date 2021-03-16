const createProject = require('../createproject');

describe('Create a project', () => {
  test('Project function exists', () => {
    const project = createProject.Project
    expect(project).toBeDefined();
  });

  const project = createProject.Project('coding', [], 0);

  test('return project name', () => {
    expect(project.name).toEqual('coding');
  });

  test('return project name type', () => {
    expect(typeof project.name).toEqual('string');
  });

  test('return project todos type', () => {
    expect(typeof project.todolist).toEqual('object');
  });

  test('return project todos type', () => {
    expect(typeof project.id).toEqual('number');
  });
})

