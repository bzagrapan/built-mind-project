import React, { useState } from "react";
import { Todo } from "../types";
import { deleteTodo, updateTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import ModalComponent from "./Modal";

const TodoItem: React.FC<Todo> = (props) => {
  const { id, title } = props;
  const dispatch = useDispatch();
  const [displayModal, setDisplayModal] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const updateItem = (id: string) => {
    setDisplayModal(false);
    dispatch(updateTodo({ id: id, title: inputValue }));
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="inline-block mr-2 rounded shadow-lg p-1 overflow-hidden text-xl">
        {title}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setDisplayModal(true)}
      >
        UPDATE
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(deleteTodo(id))}
      >
        DELETE
      </button>
      {displayModal && (
        <ModalComponent
          isOpen={displayModal}
          handleCLose={() => setDisplayModal(false)}
          content={
            <div className="flex flex-col gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-blue-200"
              ></input>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateItem(id)}
              >
                UPDATE
              </button>
            </div>
          }
        />
      )}
    </div>
  );
};

export default TodoItem;
