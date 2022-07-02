import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { toggle: false },
  reducers: {
    toggleHome: (state, action) => {
      state = !state;
      console.log("toggle", action.payload);
    },
  },
});
