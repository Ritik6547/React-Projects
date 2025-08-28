import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice.js";
import todosFormReducer from "./slices/todosFormSlice.js";
import { loadState, saveState } from "../utils/localStorage.js";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    todosForm: todosFormReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});
