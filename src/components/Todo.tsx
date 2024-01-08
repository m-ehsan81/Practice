import { TbListDetails } from "react-icons/tb";
import { TodoType, useTodoList } from "../context/TodosContext";
import { useState } from "react";

import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import TextareaAutosize from "react-textarea-autosize";

import { useForm, SubmitHandler } from "react-hook-form";

type TodoProps = {
  todo: TodoType;
  listId: string;
};

type Inputs = {
  title: string;
  description: string;
};

function Todo({ todo, listId }: TodoProps) {
  const [isEditTodo, setIsEditTodo] = useState<boolean>(false);
  console.log(todo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Inputs>();

  const { removeTodo, editTodo } = useTodoList();

  const isEditHandler = () => {
    setIsEditTodo((isEditTodo) => !isEditTodo);
    setValue("title", todo.todoTitle);
    setValue("description", todo.todoDescription);
  };

  const deleteHandler = () => {
    removeTodo(listId, todo.todoId);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    editTodo(listId, todo.todoId, data.title, data.description);
    setIsEditTodo(false);
    reset();
  };

  if (isEditTodo) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card mb-4 items-center"
      >
        <TextareaAutosize
          className="todoInput"
          {...register("title", { required: true, maxLength: 150 })}
        />
        {errors.title?.type === "required" && (
          <p role="alert" className="error w-full">
            title is required
          </p>
        )}
        {errors.title?.type === "maxLength" && (
          <p role="alert" className="error w-full">
            title is longer
          </p>
        )}

        <TextareaAutosize
          className="todoInput"
          {...register("description", { maxLength: 300 })}
        />
        {errors.description?.type === "maxLength" && (
          <p role="alert" className="error w-full">
            description is longer
          </p>
        )}

        <div className="w-40 flex justify-between text-white mt-3">
          <button
            onClick={isEditHandler}
            className="transition ease-in-out hover:-translate-y-1"
          >
            <FaXmark />
          </button>
          <button
            type="submit"
            className="transition ease-in-out hover:-translate-y-1"
          >
            <MdOutlineEdit />
          </button>
          <button
            onClick={deleteHandler}
            className="transition ease-in-out hover:-translate-y-1"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </form>
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
