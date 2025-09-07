import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice.js";
import filtersReducer from "./slices/filtersSlice.js";
import cartReducer from "./slices/cartSlice.js";
import ordersReducer from "./slices/ordersSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cartItems: cartReducer,
    orders: ordersReducer,
  },
});
