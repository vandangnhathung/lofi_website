import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumePlayList: 50,
    volumeRain: 50,
    volumeCityTraffic: 50,
    volumeKeyboard: 50,
  },
  reducers: {
    volumeRainAdjust: (state, action) => {
      state.volumeRain = action.payload;
    },
    volumeCityTrafficAdjust: (state, action) => {
      state.volumeCityTraffic = action.payload;
    },
    volumeKeyboardAdjust: (state, action) => {
      state.volumeKeyboard = action.payload;
    },
  },
});
