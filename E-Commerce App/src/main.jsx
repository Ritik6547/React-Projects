import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
