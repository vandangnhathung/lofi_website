import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    toggleHome: (state, action) => {
      state = !state;
      console.log("toggle", state);
    },
  },
});
