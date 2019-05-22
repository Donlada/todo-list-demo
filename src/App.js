import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { getTodoList, addTodo, editTodo, deleteTodo } from "./services/todo";
import AddTodoDialog from "./components/AddTodoDialog";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [finished, setFinished] = useState([]);
  const [isOpenAddTodoDialog, setIsOpenAddTodoDialog] = useState(false);

  const updateList = () => {
    const list = getTodoList();
    setTodo(list.filter(item => item.status === "todo"));
    setOnGoing(list.filter(item => item.status === "ongoing"));
    setFinished(list.filter(item => item.status === "finished"));
  };
  const toggleAddTodoDialog = () => {
    setIsOpenAddTodoDialog(!isOpenAddTodoDialog);
  };
  const onAddTodo = (title, description, dueDate) => {
    addTodo(title, description, dueDate, "todo");
    updateList();
  };
  const onDelete = id => {
    deleteTodo(id);
    updateList();
  };
  const onEdit = (id, item) => {
    editTodo(id, item);
    updateList();
  };
  useEffect(() => {
    updateList();
  }, []);

  return (
    <div className="container">
      <button onClick={toggleAddTodoDialog}>Add Todo</button>
      <div className="todo-container">
        <TodoList
          title="Todo"
          items={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        <TodoList
          title="On Going"
          items={onGoing}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        <TodoList
          title="Finished"
          items={finished}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
      <AddTodoDialog
        open={isOpenAddTodoDialog}
        onClose={toggleAddTodoDialog}
        onAdd={onAddTodo}
      />
    </div>
  );
};

export default App;
