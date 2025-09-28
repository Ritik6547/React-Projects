import axios from "axios";

export const fetchTodos = async () => {
  const res = await axios.get("http://localhost:4000/todos");
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post("http://localhost:4000/todos", todo);
  return res.data;
};

export const updateTodo = async (todo) => {
  const res = await axios.put(`http://localhost:4000/todos/${todo.id}`, todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`http://localhost:4000/todos/${id}`);
  return id;
};
