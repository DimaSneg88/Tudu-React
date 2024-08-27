import React, { useEffect, useState } from "react";

export default function Addtask({ setData, editToDo, changeToDo }) {
  const [text, setText] = useState("");
  function addTodo() {
    if (text.trim() !== "") {
      setData((prev) => [
        ...prev,
        {
          text: text,
          isComplete: false,
          id: Date.now(), //настоящая дата, как уникальный идентификатор
        },
      ]);
    } else {
      alert("Add text");
    }
  }

  useEffect(() => {
    if (editToDo) {
      setText(editToDo.text);
    } else {
      setText("");
    }
  }, [editToDo]);

  return (
    <div className="addTask">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        type="text"
        placeholder="Add a task..."
      />
      {editToDo ? (
        <button
          className="addtask-btn"
          onClick={() => changeToDo(editToDo.id, text)}
        >
          Edit Task
        </button>
      ) : (
        <button className="addtask-btn" onClick={addTodo}>
          Add Task
        </button>
      )}
    </div>
  );
}
