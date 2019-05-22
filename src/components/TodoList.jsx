import React from "react";
import TodoCard from "./TodoCard";

export default ({ title, items, onDelete, onEdit }) => {
  return (
    <div className="todo-list">
      <h1>{title}</h1>
      {items.map((item, index) => {
        return (
          <TodoCard
            key={index}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};
