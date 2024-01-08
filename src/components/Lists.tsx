import { useTodoList } from "../context/TodosContext";
import InputList from "./InputList";
import List from "./List";

function Lists() {
  const { todoList } = useTodoList();
  return (
    <div className="flex flex-row overflow-x-auto">
      {todoList.map((list) => (
        <List key={list.listId} list={list} />
      ))}
      <InputList />
    </div>
  );
}

export default Lists;
