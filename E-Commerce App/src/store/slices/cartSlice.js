import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectAllProducts } from "./productSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const itemIndex = state.list.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );
      if (
        itemIndex !== -1 &&
        action.payload.size === state.list[itemIndex].size
      ) {
        state.list[itemIndex].quantity += 1;
        return;
      }
      state.list.push({ ...action.payload, quantity: 1 });
    },
    deleteCartItem: (state, action) => {
      const itemIndex = state.list.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );
      if (itemIndex === -1) {
        return;
      }
      state.list.splice(itemIndex, 1);
    },
    updateCartItemQuantity: (state, action) => {
      const itemIndex = state.list.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );
      const qty = Math.max(1, Number(action.payload.quantity));
      state.list[itemIndex].quantity = qty;
    },
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const selectCartItems = (state) => state.cartItems.list;
export const selectCartItemsData = createSelector(
  [selectAllProducts, selectCartItems],
  (products, cartItems) => {
    return cartItems
      .map((item) => {
        const product = products.find((p) => p._id === item.productId);
        if (!product) return null;
        return { ...product, size: item.size, quantity: item.quantity };
      })
      .filter(Boolean);
  },
);

export const selectCartTotal = createSelector(
  [selectCartItemsData],
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0),
);

export const {
  addCartItem,
  deleteCartItem,
  updateCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
