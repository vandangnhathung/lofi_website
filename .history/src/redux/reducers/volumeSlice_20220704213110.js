import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumePlayList: 40,
    volumeRain: 40,
    volumeCityTraffic: 40,
    volumeKeyboard: 40,
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
