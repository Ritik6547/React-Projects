import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodosProvider } from "./contexts/TodosContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
