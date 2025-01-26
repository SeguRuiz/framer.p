import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ubicacion: {
    finca: 0, 
    ubiaciones: [

    ]
  },
};

const LOCATION = createSlice({
  name: "LOCATION",
  initialState,
  reducers: {
    SET_LOCATIONS: (state, action) => {
      state.ubicacion.ubiaciones = action.payload;
    },
  },
});

export const { SET_LOCATIONS } = LOCATION.actions;
export default LOCATION.reducer;
