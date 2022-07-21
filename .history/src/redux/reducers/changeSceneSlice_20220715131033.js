import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "scene",
  initialState: {
    changeScene: false,
    honoluluScene: false,
    honoluluDay: false,
  },
  reducers: {
    handleChangeScene: (state, action) => {
      state.changeScene = action.payload;
    },
    handleChangeHonolulu: (state, action) => {
      state.honoluluScene = action.payload;
    },
  },
});
