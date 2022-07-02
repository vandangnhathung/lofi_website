import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toggle",
  initialState: { toggles: false },
  reducers: {
    toggleHome: (state, action) => {
      state.toggles = !state.toggles;
      console.log("toggle", state.toggles);
    },
  },
});
