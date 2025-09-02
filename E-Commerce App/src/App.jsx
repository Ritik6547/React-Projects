import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-outfit px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
