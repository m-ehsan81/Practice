import { useState } from "react";
import { useTodoList } from "../context/TodosContext";

function List() {
  const [listName, setListName] = useState<string>("");
  const [isShown, setIsShown] = useState<boolean>(false);

  const { addList } = useTodoList();

  const clickHandler = () => {
    addList(listName);
    setIsShown(false);
    setListName("");
  };

  const showHandler = () => {
    setIsShown(true);
  };

  const onBlurHandler = () => {
    if (!listName) {
      setIsShown(false);
    }
  };

  if (!isShown) {
    return (
      <button
        onClick={showHandler}
        className="rounded-xl border-slate-400 border-2 border-dashed p-3 text-slate-400"
      >
        <span className="block text-3xl font-semibold">+</span>Click For Create
        List
      </button>
    );
  }

  return (
    <div className="flex flex-col rounded-xl bg-slate-400 p-3 shadow-xl">
      <input
        type="text"
        placeholder="listname..."
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="mb-3 p-3 bg-slate-600 focus:outline-none rounded-xl text-white"
        onBlur={onBlurHandler}
      />
      <button
        onClick={clickHandler}
        className="border border-solid border-slate-700 bg-slate-400 rounded-3xl hover:bg-slate-600 transition-all p-2 text-white font-medium"
      >
        Add List
      </button>
    </div>
  );
}

export default List;
