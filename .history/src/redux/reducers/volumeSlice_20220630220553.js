import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumeRain: 50,
  },
  reducers: {
    volumeAdjust: (state, action) => {
      state.volumeRain = action.payload;
    },
  },
});
