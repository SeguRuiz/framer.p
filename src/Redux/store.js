import { configureStore } from "@reduxjs/toolkit";
import PAGE from "./PAGESLICE..js";
export const store = configureStore({
  reducer: {
    Page: PAGE,
  },
});
