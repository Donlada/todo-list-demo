const mock = [];

export const getTodoList = () => {
  return mock;
};

export const addTodo = (title, description, dueDate, status) => {
  mock.push({
    id: mock.reduce((prev, curr) => (curr.id > prev ? curr.id : prev), 0) + 1,
    title,
    description,
    dueDate,
    status,
    createdAt: new Date()
  });
};

export const editTodo = (id, newTodo) => {
  let index = mock.findIndex(item => item.id === id);
  if (index !== -1) {
    mock[index] = { ...newTodo };
  }
};

export const deleteTodo = id => {
  const deleteIndex = mock.findIndex(item => item.id === id);
  if (deleteIndex !== -1) {
    mock.splice(deleteIndex, 1);
  }
};
