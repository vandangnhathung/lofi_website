import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumeRain: 50,
  },
  reducers: {
    volumeRainAdjust: (state, action) => {
      state.volumeRain = action.payload;
    },
  },
});
