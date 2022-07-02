import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { toggle: false },
  reducers: {
    toggleHome: (state, action) => {
      state.toggle = !state.toggle;
      console.log("toggle", state.toggle);
    },
  },
});
