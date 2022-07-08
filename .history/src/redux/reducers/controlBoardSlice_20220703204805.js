import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "controlBoard",
  initialState: {
    openControl: false,
  },
  reducers: {
    isOpenControl: (state, action) => {
      state.openControl = !state.openControl;
      console.log(
        "🚀 ~ file: controlBoardSlice.js ~ line 11 ~ state.openControl",
        state.openControl
      );
    },
  },
});
