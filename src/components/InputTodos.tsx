import { FaCheck } from "react-icons/fa";
import { useTodoList } from "../context/TodosContext";
import { useState } from "react";

type InputTodosProps = {
  listId: number;
};

function InputTodos({ listId }: InputTodosProps) {
  const [isSHown, setIsShown] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { addTodo } = useTodoList();

  const addTodoHandler = () => {
    addTodo(listId, title, description);
    setIsShown(false);
    setTitle("");
    setDescription("");
  };

  const showHandler = () => {
    setIsShown(true);
  };

  const onBlurHandler = () => {
    if (!(title || description)) {
      setIsShown(false);
    }
  };

  if (!isSHown) {
    return (
      <button
        onClick={showHandler}
        className="border-slate-600 border-dashed border-2 text-slate-600 rounded-xl w-full mt-2 h-10 font-medium"
      >
        Add a card
      </button>
    );
  }

  return (
    <div className="card">
      <input
        type="text"
        value={title}
        placeholder="title"
        className="todoInput"
        onChange={(e) => setTitle(e.target.value)}
        onBlur={onBlurHandler}
      />
      <input
        type="text"
        value={description}
        placeholder="description"
        className="todoInput"
        onChange={(e) => setDescription(e.target.value)}
        onBlur={onBlurHandler}
      />
      <button onClick={addTodoHandler} className="w-fit mx-auto text-white">
        <FaCheck />
      </button>
    </div>
  );
}

export default InputTodos;
