import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumePlayList: 50,
    volumeRain: 0,
    volumeCityTraffic: 0,
    volumeKeyboard: 0,
    volumeBird: 0,
    volumeCampFire: 0,
    volumeDeepSpace: 0,
    volumeFirePlace: 0,
    volumeForestNight: 0,
    volumeOcean: 0,
    volumePeopleTalk: 0,
    volumeRainForest: 0,
    volumeRiver: 0,
    volumeSnow: 0,
    volumeUnderWater: 0,
    volumeWaves: 0,
    volumeWind: 0,
  },
  reducers: {
    volumeRiverAdjust: (state, action) => {
      state.volumeRiver = action.payload;
    },
    volumeRainForestAdjust: (state, action) => {
      state.volumeRainForest = action.payload;
    },
    volumePeopleTalkAdjust: (state, action) => {
      state.volumePeopleTalk = action.payload;
    },
    volumeOceanAdjust: (state, action) => {
      state.volumeOcean = action.payload;
    },
    volumeForestNightAdjust: (state, action) => {
      state.volumeForestNight = action.payload;
    },
    volumeFirePlaceAdjust: (state, action) => {
      state.volumeFirePlace = action.payload;
    },
    volumeDeepSpaceAdjust: (state, action) => {
      state.volumeDeepSpace = action.payload;
    },
    volumeCampFireAdjust: (state, action) => {
      state.volumeCampFire = action.payload;
    },
    volumeBirdAdjust: (state, action) => {
      state.volumeBird = action.payload;
    },
    volumeRainAdjust: (state, action) => {
      state.volumeRain = action.payload;
    },
    volumeCityTrafficAdjust: (state, action) => {
      state.volumeCityTraffic = action.payload;
    },
    volumeKeyboardAdjust: (state, action) => {
      state.volumeKeyboard = action.payload;
    },
    volumePlayListAdjust: (state, action) => {
      state.volumePlayList = action.payload;
    },
  },
});
