import React from "react";
import { Todo } from "../types";
import { deleteTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem: React.FC<Todo> = (props) => {
  const { id, title } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="inline-block mr-2 rounded shadow-lg p-1 overflow-hidden text-xl">
        {title}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        UPDATE
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(deleteTodo(id))}
      >
        DELETE
      </button>
    </div>
  );
};

export default TodoItem;
