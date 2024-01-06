import { useTodoList } from "../context/TodosContext";
import InputTodos from "./InputTodos";
import List from "./List";

function Lists() {
  const { todoList } = useTodoList();
  return (
    <div className="flex flex-row">
      {todoList.map((list) => (
        <div
          key={list.listId}
          className=" border-solid border-y-neutral-900 border-4"
        >
          <div>{list.listName}</div>
          <div>
            {list.todos.map((todo) => (
              <div key={todo.todoId}>
                <div>{todo.todoTitle}</div>
                <div>{todo.todoDescription}</div>
              </div>
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
