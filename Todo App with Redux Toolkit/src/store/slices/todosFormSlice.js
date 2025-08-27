import { createSlice } from "@reduxjs/toolkit";

const todosFormSlice = createSlice({
  name: "todosForm",
  initialState: {
    taskInput: "",
    error: "",
  },
  reducers: {
    addTaskInput: (state, action) => {
      state.taskInput = action.payload;
    },
    resetTaskInput: (state) => {
      state.taskInput = "";
    },
    resetForm: (state) => {
      state.taskInput = "";
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = "";
    },
  },
});

export const selectTaskInput = (state) => state.todosForm.taskInput;
export const selectError = (state) => state.todosForm.error;

export const { addTaskInput, resetTaskInput, resetForm, setError, resetError } =
  todosFormSlice.actions;

export default todosFormSlice.reducer;
