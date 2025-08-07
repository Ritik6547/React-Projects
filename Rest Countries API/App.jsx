import { Outlet } from "react-router";
import "./global.css";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
