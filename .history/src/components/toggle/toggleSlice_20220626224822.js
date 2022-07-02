import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    toggleHome: (state, action) => {
      state = !action.payload;
    },
  },
});
