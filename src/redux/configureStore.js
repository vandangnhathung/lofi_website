import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../components/toggle/toggleSlice";
import volumeSlice from "./reducers/volumeSlice";
export const store = configureStore({
  //execute function state here

  reducer: {
    toggle: toggleSlice.reducer,
    volume: volumeSlice.reducer,
  },
});
