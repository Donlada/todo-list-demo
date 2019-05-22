import React from "react";

const getNextStatus = status => {
  switch (status) {
    case "todo":
      return "ongoing";
    case "ongoing":
      return "finished";
  }
};

export default ({ item, onDelete, onEdit }) => {
  const setNext = () => {
    onEdit(item.id, { ...item, status: getNextStatus(item.status) });
  };
  return (
    <div className="todo-card">
      <h2> Title: {item.title} </h2>
      <hr style={{ width: "100%" }} />
      Description:
      {item.description}
      <button onClick={() => onDelete(item.id)}>Delete</button>
      {item.status !== "finished" ? (
        <button onClick={setNext}>{getNextStatus(item.status)}</button>
      ) : null}
    </div>
  );
};
