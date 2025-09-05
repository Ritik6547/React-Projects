import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice.js";
import filtersReducer from "./slices/filtersSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});
