import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuarioEnSesion: null,
};

const USER = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setUsuario: (state, action) => {
      state.usuarioEnSesion = action.payload;
    },
    removerUsuario: (state) => {
      state.usuarioEnSesion = null;
    },
  },
});

export const { setUsuario, removerUsuario } = USER.actions;
export default USER.reducer;
