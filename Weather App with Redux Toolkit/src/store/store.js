import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice.js";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
