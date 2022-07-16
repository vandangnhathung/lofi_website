import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "controlBoard",
  initialState: {
    openControl: false,
    screenControl: false,
  },
  reducers: {
    isOpenControl: (state, action) => {
      state.openControl = action.payload;
    },
    isScreenControl: (state, action) => {
      state.screenControl = action.payload;
    },
  },
});
