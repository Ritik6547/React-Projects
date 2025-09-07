import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectAllProducts } from "./productSlice";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    allOrders: [],
  },
  reducers: {
    placeOrder: (state, action) => {
      const order = {
        orderId: crypto.randomUUID(),
        list: action.payload.items,
        method: action.payload.method,
        date: new Date().toISOString(),
        total: action.payload.total,
      };
      state.allOrders.push(order);
    },
  },
});

export const selectOrdersData = createSelector(
  [selectAllProducts, (state) => state.orders.allOrders],
  (products, allOrders) => {
    return allOrders.map((order) => {
      const data = order.list
        .map((item) => {
          const product = products.find((p) => p._id === item.productId);
          if (!product) return null;
          return { ...product, size: item.size, quantity: item.quantity };
        })
        .filter(Boolean);

      return {
        data,
        method: order.method,
        date: order.date,
        orderId: order.orderId,
        total: order.total,
      };
    });
  },
);

export const { placeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
