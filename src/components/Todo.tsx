import { TbListDetails } from "react-icons/tb";
import { TodoType, useTodoList } from "../context/TodosContext";
import { useState } from "react";

type TodoProps = {
  todo: TodoType;
  listId: number;
};

function Todo({ todo, listId }: TodoProps) {
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo.todoTitle);
  const [description, setDescription] = useState<string>(todo.todoDescription);

  const { removeTodo, editTodo } = useTodoList();

  const isEditHandler = () => {
    setIsEditTodo((isEditTodo) => !isEditTodo);
  };

  const deleteHandler = () => {
    removeTodo(listId, todo.todoId);
  };

  const editTodoHandler = () => {
    editTodo(listId, todo.todoId, title, description);
    setIsEditTodo(false);
  };

  if (isEditTodo) {
    return (
      <div>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="resize-none overflow-hidden"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={editTodoHandler}>Edit Cart</button>
        <button onClick={deleteHandler}>deleteCart</button>
        <button onClick={isEditHandler}>ok</button>
      </div>
    );
  }

  return (
    <div
      key={todo.todoId}
      className="card text-white mb-4 flex flex-row justify-between items-center"
    >
      <div className="truncate">
        <p className="text-lg font-medium truncate">{todo.todoTitle}</p>
        <p className="text-xs font-extralight italic text-slate-300 truncate">
          {todo.todoDescription}
        </p>
      </div>
      <button className="ml-2" onClick={isEditHandler}>
        <TbListDetails />
      </button>
    </div>
  );
}

export default Todo;
