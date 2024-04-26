import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

type initialStateType = {
  todoList: Todo[];
};
const todoList: Todo[] = [];

const initialState: initialStateType = {
  todoList,
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList?.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const newArr = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = newArr;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const {
        payload: { id, text },
      } = action;

      state.todoList = state.todoList.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

export const { addNewTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
