import React from "react";

export default function List({ item, deleteToDo, completeToDo, setEditToDo }) {
  return (
    <div className={item.isComplete ? "list completed" : "list"}>
      <p> {item.text} </p>
      <div className="span-btns">
        {!item.isComplete && (
          <span onClick={() => completeToDo(item.id)} title="completed">
            ✓
          </span>
        )}
        <span
          onClick={() => deleteToDo(item.id)}
          className="delete-btn"
          title="delete"
        >
          X
        </span>
        <span
          onClick={() => setEditToDo(item)}
          className="edit-btn"
          title="edit"
        >
          ↻
        </span>
      </div>
    </div>
  );
}
