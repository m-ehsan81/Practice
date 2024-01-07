import InputTodos from "./InputTodos";
import { TodoListType, useTodoList } from "../context/TodosContext";
import Todo from "./Todo";

import { FaRegTrashAlt } from "react-icons/fa";

type ListProps = {
  list: TodoListType;
};

function List({ list }: ListProps) {
  const { removeList } = useTodoList();

  const deleteListHandler = () => {
    removeList(list.listId);
  };

  return (
    <div className="shadow-xl p-3 rounded-xl bg-slate-400">
      <div className="text-slate-700 text-xl font-medium mb-3 border-b-2 pb-3 border-slate-700 border-solid flex justify-between items-center">
        <span>{list.listName}</span>
        <button onClick={deleteListHandler}>
          <FaRegTrashAlt />
        </button>
      </div>
      <div>
        {list.todos.map((todo) => (
          <Todo key={todo.todoId} todo={todo} listId={list.listId} />
        ))}
      </div>
      <InputTodos listId={list.listId} />
    </div>
  );
}

export default List;
