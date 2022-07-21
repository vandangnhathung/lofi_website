import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumePlayList: 50,
    volumeRain: 0,
    volumeCityTraffic: 0,
    volumeKeyboard: 0,
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
    volumePlayListAdjust: (state, action) => {
      state.volumePlayList = action.payload;
    },
  },
});
