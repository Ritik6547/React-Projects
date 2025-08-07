import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("allTodos", []);

  return (
    <TodosContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodosContext.Provider>
  );
};
