import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Todo } from "../types";
import TodoItem from "./Todo";
import { useEffect } from "react";
import { fetchTodo } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const status = useSelector((state: RootState) => state.todo.status);
  const error = useSelector((state: RootState) => state.todo.error);

  useEffect(() => {
    dispatch(fetchTodo() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      {todoList.map((todo: Todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
