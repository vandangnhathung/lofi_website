import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "controlBoard",
  initialState: {
    openControl: false,
    mainControl: false,
    openScreenControl: false,
    screenControl: false,
  },
  reducers: {
    isOpenControl: (state, action) => {
      state.openControl = action.payload;
    },
    isMainControl: (state, action) => {
      state.mainControl = action.payload;
    },
    isOpenScreenControl: (state, action) => {
      state.openScreenControl = action.payload
    }
    isScreenControl: (state, action) => {
      state.screenControl = action.payload;
    },
  },
});
