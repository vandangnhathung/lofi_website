import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumeValue: 50,
  },
  reducers: {
    volumeAdjust: (state, action) => {
      state.volumeValue = action.payload;
    },
  },
});
