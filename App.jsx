import { useState } from "react";
import Addtask from "./components/Addtask";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      text: "Text",
      isComplete: false,
    },
    {
      id: 2,
      text: "Text2",
      isComplete: true,
    },
    {
      id: 3,
      text: "Text3",
      isComplete: false,
    },
  ]);

  const [editToDo, setEditToDo] = useState(null);

  function deleteToDo(id) {
    setData((prev) => prev.filter((elem) => elem.id !== id));
    if (id == editToDo.id) {
      setEditToDo(null);
    }
  }

  function completeToDo(id) {
    setData((prev) =>
      prev.map((elem) => {
        if (elem.id == id) {
          elem.isComplete = true;
        }
        return elem;
      })
    );
  }

  function changeToDo(id, newText) {
    setData((prev) =>
      prev.map((elem) => {
        if (elem.id == id) {
          elem.text = newText;
        }
        return elem;
      })
    );
    setEditToDo(null);
  }

  console.log(editToDo);
  return (
    <div className="todolist">
      <Header />
      <Addtask changeToDo={changeToDo} editToDo={editToDo} setData={setData} />
      <Lists
        setEditToDo={setEditToDo}
        completeToDo={completeToDo}
        deleteToDo={deleteToDo}
        data={data}
      />
    </div>
  );
}

export default App;
