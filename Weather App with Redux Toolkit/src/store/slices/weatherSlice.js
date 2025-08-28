import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async (city, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_TOKEN
        }&units=metric`
      );
      const data = await res.json();

      if (!res.ok || data.cod === "404") {
        return rejectWithValue(data.message);
      }

      return data;
    } catch (err) {
      return rejectWithValue("Network Error");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.data = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something Went Wrong";
      });
  },
});

export const selectWeatherData = (state) => state.weather.data;
export const selectWeatherLoading = (state) => state.weather.loading;
export const selectWeatherError = (state) => state.weather.error;

export default weatherSlice.reducer;
