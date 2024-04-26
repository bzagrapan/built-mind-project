import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

type initialStateType = {
  todoList: Todo[];
  status: string;
  error: any;
};
const todoList: Todo[] = [];

const initialState: initialStateType = {
  todoList,
  status: "idle",
  error: null,
};

export const fetchTodo = createAsyncThunk("todos/fetchTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.slice(0, 10);
});

export const todoSlice = createSlice({
  name: "todos",
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
        payload: { id, title },
      } = action;

      state.todoList = state.todoList.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todoList = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addNewTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
