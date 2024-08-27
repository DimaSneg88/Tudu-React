import React, { useState } from "react";
import List from "./List";

export default function Lists({ data, deleteToDo, completeToDo, setEditToDo }) {
  return (
    <div className="lists">
      {data.map((item) => {
        return (
          <List
            setEditToDo={setEditToDo}
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
}
