import { useEffect, useReducer } from "react";
import SearchUser from "./components/SearchUser";
import UserDetails from "./components/userDetails";

export const ACTIONS = {
  SET_QUERY: "set_query",
  SET_USER_DATA: "set_user_data",
  SET_SEARCH_TERM: "set_search_term",
  SET_ERROR: "set_error",
  SET_LOADING: "set_loading",
  SET_REPOS: "set_repos",
  SET_ALL: "set_all",
};

const initialState = {
  query: "",
  userData: null,
  searchTerm: "",
  error: "",
  loading: false,
  repos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUERY:
      return { ...state, query: action.query };
    case ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    case ACTIONS.SET_USER_DATA:
      return { ...state, userData: action.data };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.message };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.loading };
    case ACTIONS.SET_REPOS:
      return { ...state, repos: action.repos };
    case ACTIONS.SET_ALL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const token = import.meta.env.VITE_GITHUB_TOKEN;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.searchTerm.trim()) return;

    if (!token) {
      dispatch({
        type: ACTIONS.SET_ALL,
        payload: { error: "GitHub token missing", query: "" },
      });
      return;
    }

    dispatch({
      type: ACTIONS.SET_ALL,
      payload: { loading: true, error: "", repos: [] },
    });
    fetch(`https://api.github.com/users/${state.searchTerm}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.message === "Not Found") {
          // dispatch({ type: ACTIONS.SET_ERROR, message: "No User Found" });
          // dispatch({ type: ACTIONS.SET_QUERY, query: "" });
          // dispatch({ type: ACTIONS.SET_LOADING, loading: false });
          dispatch({
            type: ACTIONS.SET_ALL,
            payload: {
              error: "No User Found",
              query: "",
              loading: false,
            },
          });
          return;
        }
        // dispatch({ type: ACTIONS.SET_USER_DATA, data: data });
        // dispatch({ type: ACTIONS.SET_QUERY, query: "" });
        // dispatch({ type: ACTIONS.SET_ERROR, message: "" });
        // dispatch({ type: ACTIONS.SET_LOADING, loading: false });
        dispatch({
          type: ACTIONS.SET_ALL,
          payload: {
            userData: data,
            query: "",
            error: "",
            loading: false,
          },
        });
      })
      .catch((err) => {
        // dispatch({ type: ACTIONS.SET_ERROR, message: "Network Error" });
        // dispatch({ type: ACTIONS.SET_QUERY, query: "" });
        // dispatch({ type: ACTIONS.SET_LOADING, loading: false });

        dispatch({
          type: ACTIONS.SET_ALL,
          payload: {
            error: "Network Error",
            query: "",
            loading: false,
          },
        });
      });
  }, [state.searchTerm]);

  useEffect(() => {
    if (!state.userData) return;
    fetch(state.userData.repos_url)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          dispatch({
            type: ACTIONS.SET_ALL,
            payload: { error: "Repos not available", repos: [] },
          });
          return;
        }

        dispatch({ type: ACTIONS.SET_REPOS, repos: data });
        dispatch({ type: ACTIONS.SET_ERROR, message: "" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.SET_ERROR, message: "Repos Not Found" });
      });
  }, [state.userData]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-[820px]">
        <h1 className="text-center text-3xl font-bold text-[#A08FF8] md:text-4xl">
          <i className="fa-brands fa-github"></i> Github User Finder
        </h1>
        <p className="mt-3 text-center text-sm">
          Search for any Github user to see their profile and repositories
        </p>

        <SearchUser dispatch={dispatch} state={state} />

        {state.loading ? (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <p className="text-2xl text-gray-400">Fetching user data…</p>
          </div>
        ) : state.error ? (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <p className="text-2xl text-gray-400">{state.error}</p>
          </div>
        ) : state.userData ? (
          <UserDetails userData={state.userData} repos={state.repos} />
        ) : (
          <div className="rounded-md bg-[#252525] p-6 text-center">
            <i className="fa-brands fa-github text-4xl text-gray-500"></i>
            <p className="mt-4 text-2xl text-gray-400">No user searched yet</p>
            <p className="mt-2 text-sm text-gray-500">
              Type a GitHub username above to see their profile and repositories
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
