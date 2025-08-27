import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    editingId: null,
    filter: "all",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (title) => ({
        payload: { id: nanoid(), title, completed: false },
      }),
    },
    editTodo: (state, action) => {
      const todoIndex = state.list.findIndex(
        (todo) => todo.id === state.editingId
      );
      state.list[todoIndex].title = action.payload;
    },
    toggleTodo: (state, action) => {
      const todoIndex = state.list.findIndex(
        (todo) => todo.id === action.payload
      );
      state.list[todoIndex].completed = !state.list[todoIndex].completed;
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.list.findIndex(
        (todo) => todo.id === action.payload
      );
      state.list.splice(todoIndex, 1);
    },
    deleteCompletedTodo: (state) => {
      state.list = state.list.filter((todo) => !todo.completed);
    },
    setEditingId: (state, action) => {
      state.editingId = action.payload;
    },
    resetEditingId: (state) => {
      state.editingId = null;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = "all";
    },
  },
});

export const selectAllTodos = (state) => state.todos.list;
export const selectEditingId = (state) => state.todos.editingId;
export const selectFilter = (state) => state.todos.filter;

export const selectFilteredTodos = createSelector(
  [selectAllTodos, selectFilter],
  (todos, filter) => {
    if (filter === "all") {
      return todos;
    }
    if (filter === "pending") {
      return todos.filter((task) => !task.completed);
    }
    if (filter === "completed") {
      return todos.filter((task) => task.completed);
    }

    return [];
  }
);

export const {
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodo,
  resetEditingId,
  setEditingId,
  setFilter,
  resetFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
