import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ModalComponent from "./components/Modal";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const addNewTodoItem = () => {
    dispatch(addNewTodo({ id: uuidv4(), title: todoTitle }));
    setDisplayModal(false);
    setTodoTitle("");
  };

  return (
    <div className="App flex justify-center items-center  flex-col gap-11 mt-4">
      <div className="text-2xl underline">TODO List</div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setDisplayModal(true)}
      >
        ADD NEW TODO
      </button>
      <TodoList />
      {displayModal && (
        <ModalComponent
          isOpen={displayModal}
          handleCLose={() => setDisplayModal(false)}
          content={
            <div className="flex flex-col gap-2">
              <input
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                placeholder="Todo Title"
                className="border border-gray-300 focus:border-green-500 rounded-md px-4 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-green-200"
              ></input>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addNewTodoItem()}
              >
                SAVE
              </button>
            </div>
          }
        />
      )}
    </div>
  );
}

export default App;
