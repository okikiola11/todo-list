const Project = require('../createproject');

test('createproject function exists', () => {
  expect(Project).toBeDefined();
});

describe('Create a project', () => {

  test('return project name', () => {
    //const project = Project('study', 0);
    expect(Project).toEqual('study');
  });

  // test('return project todos type', () => {
  //   const project = createProject('study');
  //   expect(typeof project.todos).toEqual('object');
  // });
})