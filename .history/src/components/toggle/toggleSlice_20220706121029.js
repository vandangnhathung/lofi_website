import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toggle",
  initialState: {
    nightToggle: false,
    rainDayToggle: false,
    rainDayDashBoardToggle: false,
    cityTrafficSound: false,
    enterStoreToggle: false,
    playToggle: false,
    chillToggle: true,
    isChillPlayToggle: false,
    sleepyToggle: false,
    isSleepyPlayToggle: false,
    kpopToggle: false,
    isKpopPlayToggle: false,
    jazzToggle: false,
    isJazzPlayToggle: false,
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
    jazzToggleHome: (state, action) => {
      state.jazzToggle = action.payload;
      console.log("toggle", state.jazzToggle);
    },
    isJazzPlayToggleHome: (state, action) => {
      state.isJazzPlayToggle = action.payload;
      console.log("toggle", state.isJazzPlayToggle);
    },
    nightToggleHome: (state, action) => {
      state.nightToggle = !state.nightToggle;
      console.log("toggle", state.nightToggle);
    },
    rainDayToggleHome: (state, action) => {
      state.rainDayToggle = action.payload;
      console.log("toggle", state.rainDayToggle);
    },
    rainDayDashBoardToggleHome: (state, action) => {
      state.rainDayDashBoardToggle = action.payload;
      console.log("toggle", state.rainDayDashBoardToggle);
    },
    cityTrafficSoundToggleHome: (state, action) => {
      state.cityTrafficSound = !state.cityTrafficSound;
      console.log("toggle", state.cityTrafficSound);
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
