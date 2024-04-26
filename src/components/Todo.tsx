import React from "react";
import { Todo } from "../types";
import { deleteTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem: React.FC<Todo> = (props) => {
  const { id, title } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="inline-block mr-2 border border-solid border-blue-600 border-r w-56">
        {title}
      </div>
      <div className="inline-block mr-2 border border-solid border-blue-600 border-r font-bold">
        UPDATE
      </div>
      <div className="font-bold" onClick={() => dispatch(deleteTodo(id))}>
        DELETE
      </div>
    </div>
  );
};

export default TodoItem;
