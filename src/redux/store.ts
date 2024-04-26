import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";

export const store = configureStore({
  reducer: {
    book: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;