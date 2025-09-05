import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    categories: [],
    types: [],
    sortBy: "relevant",
    search: {
      showSearch: false,
      value: "",
    },
  },
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((c) => c !== category);
      } else {
        state.categories.push(category);
      }
    },
    toggleTypes: (state, action) => {
      const type = action.payload;
      if (state.types.includes(type)) {
        state.types = state.types.filter((t) => t !== type);
      } else {
        state.types.push(type);
      }
    },
    updateSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    showSearchBar: (state) => {
      state.search.showSearch = true;
    },
    hideSearchBar: (state) => {
      state.search.showSearch = false;
    },
    setSearchValue: (state, action) => {
      state.search.value = action.payload;
    },
  },
});

export const selectCategoriesFilter = (state) => state.filters.categories;
export const selectTypesFilter = (state) => state.filters.types;
export const selectShowSearch = (state) => state.filters.search.showSearch;
export const selectSearchValue = (state) => state.filters.search.value;

export const {
  toggleCategory,
  toggleTypes,
  updateSortBy,
  showSearchBar,
  hideSearchBar,
  setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
