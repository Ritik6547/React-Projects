import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
