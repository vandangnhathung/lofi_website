import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumeRain: 50,
    volumeCityTraffic: 50,
  },
  reducers: {
    volumeRainAdjust: (state, action) => {
      state.volumeRain = action.payload;
    },
    volumeCityTrafficAdjust: (state, action) => {
      state.volumeCityTraffic = action.payload;
    },
  },
});
