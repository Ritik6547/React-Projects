import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import {
  hideSearchBar,
  selectSearchValue,
  setSearchValue,
} from "../../store/slices/filtersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  return (
    <div className="border-t bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          value={searchValue}
          type="text"
          placeholder="Search"
          className="flex-1 bg-inherit text-sm outline-none"
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        <img src={assets.search_icon} alt="search-icon" className="w-4" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="cross-icon"
        onClick={() => dispatch(hideSearchBar())}
      />
    </div>
  );
};

export default SearchBar;
