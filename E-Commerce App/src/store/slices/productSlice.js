import { createSelector, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

const selectAllProducts = (state) => state.products.list;
export const selectLatestCollections = createSelector(
  [selectAllProducts],
  (products) => products.slice(0, 10),
);
export const selectBestSellers = createSelector(
  [selectAllProducts],
  (products) => products.filter((product) => product.bestseller)
)

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
