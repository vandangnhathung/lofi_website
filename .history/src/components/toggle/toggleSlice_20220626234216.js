import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "togglesss",
  initialState: { toggles: false },
  reducers: {
    toggleHome: (state, action) => {
      state.toggles = !state.toggles;
      console.log("toggle", state.toggles);
    },
  },
});
