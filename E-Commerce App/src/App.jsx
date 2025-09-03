import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "./store/slices/productSlice";
import { products } from "./assets/assets";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts(products));
  }, [dispatch]);

  return (
    <div className="font-outfit px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
