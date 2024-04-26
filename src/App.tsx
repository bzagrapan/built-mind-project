import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App flex justify-center items-center  flex-col gap-11 mt-4">
      <div className="text-2xl underline">TODO List</div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        ADD NEW TODO
      </button>
      <TodoList />
    </div>
  );
}

export default App;
