import { configureStore } from "@reduxjs/toolkit";
import PAGE from "./PAGESLICE..js";
import USER from "./USERSLICE.js";
import LOCATION from "./LOCATIONSSLICE.js";
export const store = configureStore({
  reducer: {
    Page: PAGE,
    USER: USER,
    LOCATION: LOCATION,
  },
});
