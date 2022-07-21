import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "scene",
  initialState: {
    changeScene: false,
    cafeScene: true,
    cafe: false,
    honoluluScene: false,
    honoluluDay: false,
  },
  reducers: {
    handleChangeScene: (state, action) => {
      state.changeScene = action.payload;
    },
    handleChangeCafeScene: (state, action) => {
      state.cafeScene = action.payload;
    },
    handleChangeCafe: (state, action) => {
      state.cafe = action.payload;
    },
    handleChangeHonolulu: (state, action) => {
      state.honoluluScene = action.payload;
    },
    handleChangeHonoluluDay: (state, action) => {
      state.honoluluDay = action.payload;
    },
  },
});
