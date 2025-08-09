import Button from "./Button";
import { ACTIONS } from "../App";

const SearchUser = ({ dispatch, state }) => {
  const handleSearch = () => {
    if (!state.query.trim()) return;
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: state.query });
  };

  return (
    <>
      <div className="my-8 flex flex-col gap-4 sm:flex-row md:justify-between">
        <input
          className="flex-1 rounded-md bg-[#252525] px-4 py-2 text-lg shadow-md outline-0 focus:outline-1"
          type="text"
          value={state.query}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_QUERY, payload: e.target.value })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button onClick={handleSearch} label="Search" />
      </div>
    </>
  );
};

export default SearchUser;
