import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toggle",
  initialState: {
    nightToggle: false,
    rainDayToggle: false,
    enterStoreToggle: false,
    playToggle: false,
    chillToggle: false,
    isChillPlayToggle: true,
    sleepyToggle: false,
    isSleepyPlayToggle: false,
  },
  reducers: {
    chillToggleHome: (state, action) => {
      state.chillToggle = action.payload;
      console.log("toggle", state.chillToggle);
    },
    isChillToggleHome: (state, action) => {
      state.isChillPlayToggle = action.payload;
      console.log("toggle", state.isChillPlayToggle);
    },
    sleepyToggleHome: (state, action) => {
      state.sleepyToggle = action.payload;
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
