import App from "../App";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "*",
        element: <App />,
      },
    ],
  },
];
