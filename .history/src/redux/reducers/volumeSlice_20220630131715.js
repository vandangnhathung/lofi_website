import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "volume",
  initialState: {
    volumeValue: 0,
  },
  reducers: (volumeAdjust = () => {}),
});
