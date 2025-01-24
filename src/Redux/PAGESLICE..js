import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "",
};

const Page = createSlice({
  name: "Page",
  initialState,
  reducers: {
    set_page: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { set_page } = Page.actions;
export default Page.reducer;
