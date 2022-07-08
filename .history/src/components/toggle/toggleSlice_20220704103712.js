import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toggle",
  initialState: {
    nightToggle: false,
    rainDayToggle: false,
    enterStoreToggle: false,
    playToggle: false,
    chillToggle: true,
    sleepyToggle: false,
  },
  reducers: {
    chillToggleHome: (state, action) => {
      state.chillToggle = !state.chillToggle;
      console.log("toggle", state.chillToggle);
    },
    sleepyToggleHome: (state, action) => {
      state.sleepyToggle = !state.sleepyToggle;
      console.log("toggle", state.sleepyToggle);
    },
    nightToggleHome: (state, action) => {
      state.nightToggle = !state.nightToggle;
      console.log("toggle", state.nightToggle);
    },
    rainDayToggleHome: (state, action) => {
      state.rainDayToggle = !state.rainDayToggle;
      console.log("toggle", state.rainDayToggle);
    },
    enterStoreToggleHome: (state, action) => {
      state.enterStoreToggle = !state.enterStoreToggle;
      console.log("toggle", state.enterStoreToggle);
    },
    playToggleHome: (state, action) => {
      state.playToggle = !state.playToggle;

      console.log("toggle", state.playToggle);
    },
  },
});
