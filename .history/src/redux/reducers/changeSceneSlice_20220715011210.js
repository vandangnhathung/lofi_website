import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "scene",
  initialState: {
    changeScene: false,
  },
  reducers: {
    handleChangeScene: (state, action) => {
      state.changeScene = action.payload;
    },
  },
});
