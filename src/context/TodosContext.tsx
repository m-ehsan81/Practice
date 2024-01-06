import { ReactNode, createContext, useContext, useState } from "react";

type TodoContextType = {
  todoList: TodoListType[];
  addList: (listName: string) => void;
  addTodo: (listId: number, title: string, description: string) => void;
};

type TOdosProviderProps = {
  children: ReactNode;
};

export type TodoType = {
  todoId: number;
  todoTitle: string;
  todoDescription: string;
};

type TodoListType = {
  listId: number;
  listName: string;
  todos: TodoType[];
};

const TodoContext = createContext({} as TodoContextType);

function TodosProvider({ children }: TOdosProviderProps) {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  function addList(listName: string) {
    setTodoList((lists) => {
      const listId = lists.length + 1;
      return [...lists, { listId, listName, todos: [] }];
    });
  }

  function addTodo(listId: number, title: string, description: string) {
    setTodoList((lists) => {
      const list = lists.find((list) => list.listId === listId);
      if (list) {
        const todoId = list?.todos.length + 1;
        list?.todos.push({
          todoId,
          todoTitle: title,
          todoDescription: description,
        });
      }
      return [...lists];
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addList,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

const useTodoList = () => {
  return useContext(TodoContext);
};

export default TodosProvider;
export { useTodoList };
