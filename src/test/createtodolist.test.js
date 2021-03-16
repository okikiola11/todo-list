const { default: Todolist } = require('../createtodolist');

test('createtodolist function exists', () => {
  expect(Todolist).toBeDefined();
});

describe('Create a new todolist', () => {
  test('It creates new todo', () => {
    const newtodo = new Todolist('title-test', 'This is my first date', 20-5-2021, 'low');
    expect(newtodo.title).toEqual('title-test');
    expect(newtodo.description).toEqual('This is my first date');
    expect(newtodo.dueDate).toBe(20-5-2021);
    expect(newtodo.priority).toBe('low');
});

test('It could not create empty title todo', () => {
  const newtodo = new Todolist('', 'this is it', 20-5-2021, 'low');
  expect(newtodo.title).not.toBe('Test-title', 'this is it', 20-5-2021, 'low');
});
});
