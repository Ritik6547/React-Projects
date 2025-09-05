import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSearchBar } from "../store/slices/filtersSlice.js";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>HOME</p>
              {isActive && (
                <hr className="h-[1.5px] w-2/4 border-none bg-gray-700" />
              )}
            </>
          )}
        </NavLink>
        <NavLink to="collection" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              {isActive && (
                <hr className="h-[1.5px] w-2/4 border-none bg-gray-700" />
              )}
            </>
          )}
        </NavLink>
        <NavLink to="about" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              {isActive && (
                <hr className="h-[1.5px] w-2/4 border-none bg-gray-700" />
              )}
            </>
          )}
        </NavLink>
        <NavLink to="contact" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              {isActive && (
                <hr className="h-[1.5px] w-2/4 border-none bg-gray-700" />
              )}
            </>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Link to="collection" onClick={() => dispatch(showSearchBar())}>
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search-icon"
          />
        </Link>
        <Link to="login" className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile-icon"
          />
        </Link>
        <Link to="cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt="cart-icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu-icon"
        />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex cursor-pointer flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 border-b p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown-icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `border-b py-2 pl-6 ${isActive && "bg-black text-white"}`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `border-b py-2 pl-6 ${isActive && "bg-black text-white"}`
            }
            to="collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `border-b py-2 pl-6 ${isActive && "bg-black text-white"}`
            }
            to="about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `border-b py-2 pl-6 ${isActive && "bg-black text-white"}`
            }
            to="contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
