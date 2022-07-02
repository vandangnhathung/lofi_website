import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice } from "../components/toggle/toggleSlice";

export const store = configureStore({
  //execute function state here

  reducer: {
    toggle: toggleSlice,
  },
});
