import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    logoutSuccess: (state) => {
      state.token = null;
    },
  },
});

export const {
  loginSuccess: loginSuccessActionCreator,
  logoutSuccess: logoutSuccessActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
