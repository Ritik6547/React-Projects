import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-teal-500 py-4 px-30 text-white flex items-center justify-between">
      <h1 className="text-3xl font-semibold">Shopify</h1>
      <div className="text-xl flex gap-16  font-medium">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-black " : "text-white"
          }>
          Home
        </NavLink>
        <NavLink
          to={"paginated-products"}
          className={({ isActive }) =>
            isActive ? "text-black " : "text-white"
          }>
          Paginated Products
        </NavLink>
        <NavLink
          to={"infinite-products"}
          className={({ isActive }) =>
            isActive ? "text-black " : "text-white"
          }>
          Infinite Products
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
