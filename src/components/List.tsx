import { useState } from "react";
import { useTodoList } from "../context/TodosContext";

function List() {
  const [listName, setListName] = useState<string>("");

  const { addList } = useTodoList();

  const clickHandler = () => {
    addList(listName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="listname..."
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />

      <button onClick={clickHandler}>Add List</button>
    </div>
  );
}

export default List;
