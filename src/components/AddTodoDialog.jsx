import React, { useRef } from "react";
import Dialog from "./Dialog";

export default ({ open, onClose, onAdd }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);
  return (
    <Dialog open={open} onClose={onClose}>
      <h1>Add Todo</h1>
      <form
        className="dialog-form"
        onSubmit={e => {
          e.preventDefault();
          const title = titleRef.current.value;
          const description = descriptionRef.current.value;
          const dueDate = dueDateRef.current.value;
          onAdd(title, description, dueDate);
          onClose();
        }}
      >
        <label>Title :</label>
        <input type="text" ref={titleRef} />
        <label>Description :</label>
        <input type="text" ref={descriptionRef} />
        <label>Due Date :</label>
        <input type="date" ref={dueDateRef} />
        <button>Submit</button>
      </form>
    </Dialog>
  );
};
