import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "controlBoard",
  initialState: {
    openControl: false,
  },
  reducers: {
    isOpenControl: (state, action) => {
      state.openControl = action.payload;
    },
  },
});
