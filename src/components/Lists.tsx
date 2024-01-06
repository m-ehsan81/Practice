import { useTodoList } from "../context/TodosContext";
import InputTodos from "./InputTodos";
import List from "./List";
import { TbListDetails } from "react-icons/tb";
import Todo from "./Todo";

function Lists() {
  const { todoList } = useTodoList();
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {todoList.map((list) => (
        <div
          key={list.listId}
          className="shadow-xl p-3 rounded-xl bg-slate-400"
        >
          <div className="text-slate-700 text-xl font-medium mb-3 border-b-2 pb-3 border-slate-700 border-solid">
            {list.listName}
          </div>
          <div>
            {list.todos.map((todo) => (
              <Todo key={todo.todoId} todo={todo} />
            ))}
          </div>
          <InputTodos listId={list.listId} />
        </div>
      ))}
      <List />
    </div>
  );
}

export default Lists;
