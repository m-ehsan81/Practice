import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { setItemsToLocalStorage } from "../Helper/helper";

type TodoContextType = {
  todoList: TodoListType[];
  addList: (listName: string) => void;
  removeList: (listId: number) => void;
  addTodo: (listId: number, title: string, description: string) => void;
  removeTodo: (listId: number, todoId: number) => void;
  editTodo: (
    listId: number,
    todoId: number,
    todoTitle: string,
    todoDescription: string
  ) => void;
};

type TOdosProviderProps = {
  children: ReactNode;
};

export type TodoType = {
  todoId: number;
  todoTitle: string;
  todoDescription: string;
};

export type TodoListType = {
  listId: number;
  listName: string;
  todos: TodoType[];
};

const TodoContext = createContext({} as TodoContextType);

function TodosProvider({ children }: TOdosProviderProps) {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodoList(JSON.parse(data));
    }
  }, []);

  function addList(listName: string) {
    setTodoList((lists) => {
      const listId = lists.length + 1;
      const newLists = [...lists, { listId, listName, todos: [] }];
      setItemsToLocalStorage("todos", newLists);
      return newLists;
    });
  }

  function removeList(listId: number) {
    setTodoList((lists) => {
      const newLists = lists.filter((list) => list.listId !== listId);
      setItemsToLocalStorage("todos", newLists);
      return newLists;
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
      setItemsToLocalStorage("todos", [...lists]);
      return [...lists];
    });
  }

  function removeTodo(listId: number, todoId: number) {
    setTodoList((lists) => {
      const list = lists.find((list) => list.listId === listId);
      if (list) {
        list.todos = list?.todos.filter((todo) => todo.todoId !== todoId);
      }
      setItemsToLocalStorage("todos", [...lists]);
      return [...lists];
    });
  }

  function editTodo(
    listId: number,
    todoId: number,
    todoTitle: string,
    todoDescription: string
  ) {
    setTodoList((lists) => {
      const todo = lists
        .find((list) => list.listId === listId)
        ?.todos.find((todo) => todo.todoId == todoId);

      if (todo) {
        todo.todoTitle = todoTitle;
        todo.todoDescription = todoDescription;
      }

      setItemsToLocalStorage("todos", [...lists]);
      return [...lists];
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addList,
        removeList,
        addTodo,
        removeTodo,
        editTodo,
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
