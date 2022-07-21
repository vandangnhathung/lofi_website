import { createSlice } from "@reduxjs/toolkit";
import { initial } from "lodash";

export default createSlice({
  name: "scene",
  initialState: {
    changeScene: false,
  },
});
