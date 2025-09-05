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
export const selectFilteredProducts = createSelector(
  [selectAllProducts, (state) => state.filters],
  (products, filters) => {
    const filteredProducts = products.filter((product) => {
      const matchCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);
      const matchType =
        filters.types.length === 0 ||
        filters.types.includes(product.subCategory);

      return matchCategory && matchType;
    });

    let sortedProducts = [];
    switch (filters.sortBy) {
      case "low-high":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => a.price - b.price,
        );
        break;

      case "high-low":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => b.price - a.price,
        );
        break;

      default:
        sortedProducts = [...filteredProducts];
    }

    return sortedProducts.filter((product) =>
      product.name.toLowerCase().includes(filters.search.value.toLowerCase()),
    );
  },
);

export const selectLatestCollections = createSelector(
  [selectAllProducts],
  (products) => products.slice(0, 10),
);
export const selectBestSellers = createSelector(
  [selectAllProducts],
  (products) => products.filter((product) => product.bestseller),
);

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
