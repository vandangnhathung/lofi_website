import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toggle",
  initialState: {
    nightToggle: false,
    rainDayToggle: false,
    enterStoreToggle: false,
    playToggle: false,
    chillToggle: true,
    isChillPlayToggle: false,
    sleepyToggle: false,
    isSleepyPlayToggle: false,
    kpopToggle: false,
    isKpopToggle: false,
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
    isSleepyPlayToggleHome: (state, action) => {
      state.isSleepyPlayToggle = action.payload;
      console.log("toggle", state.isSleepyPlayToggle);
    },
    kpopToggleHome: (state, action) => {
      state.kpopToggle = action.payload;
      console.log("toggle", state.kpopToggle);
    },
    isKpopPlayToggleHome: (state, action) => {
      state.isKpopPlayToggle = action.payload;
      console.log("toggle", state.isKpopPlayToggle);
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
