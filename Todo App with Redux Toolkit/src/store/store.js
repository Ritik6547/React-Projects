import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice.js";
import todosFormReducer from "./slices/todosFormSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    todosForm: todosFormReducer,
  },
});
