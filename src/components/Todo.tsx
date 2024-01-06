import { TbListDetails } from "react-icons/tb";
import { TodoType } from "../context/TodosContext";
import { useState } from "react";

type TodoProps = {
  todo: TodoType;
};

function Todo({ todo }: TodoProps) {
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
      <button className="ml-2">
        <TbListDetails />
      </button>
    </div>
  );
}

export default Todo;
