import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTodoList } from "../context/TodosContext";
import { useState } from "react";

type InputTodosProps = {
  listId: number;
};

function InputTodos({ listId }: InputTodosProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { addTodo, todoList } = useTodoList();
  console.log("first")

  const addTodoHandler = () => {
    console.log(todoList);
    addTodo(listId, title, description);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodoHandler}>
        <FaCheck />
      </button>
    </div>
  );
}

export default InputTodos;
