import { useTodoList } from "../context/TodosContext";
import InputList from "./InputList";
import List from "./List";

function Lists() {
  const { todoList } = useTodoList();
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {todoList.map((list) => (
        <List key={list.listId} list={list} />
      ))}
      <InputList />
    </div>
  );
}

export default Lists;
