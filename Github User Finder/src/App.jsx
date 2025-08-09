import { useEffect, useReducer } from "react";
import SearchUser from "./components/SearchUser";
import UserDetails from "./components/userDetails";

export const ACTIONS = {
  SET_QUERY: "set_query",
  SET_USER_DATA: "set_user_data",
  SET_SEARCH_TERM: "set_search_term",
};

const initialState = {
  query: "",
  userData: {},
  searchTerm: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUERY:
      return { ...state, query: action.payload };
    case ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case ACTIONS.SET_USER_DATA:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.searchTerm.trim()) return;
    console.log("API Calling");
    fetch(`https://api.github.com/users/${state.searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_USER_DATA, payload: data });
      });
  }, [state.searchTerm]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-[800px]">
        <h1 className="text-center text-3xl font-bold text-[#A08FF8] md:text-4xl">
          <i className="fa-brands fa-github"></i> Github User Finder
        </h1>
        <p className="mt-3 text-center text-sm">
          Search for any Github user to see their profile and repositories
        </p>

        <SearchUser dispatch={dispatch} state={state} />

        <UserDetails />
      </div>
    </div>
  );
};

export default App;
