import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const UserSlice = createSlice({
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
} = UserSlice.actions;

export function loadLocalUser() {
  const dispatch = useDispatch();
  try {
    const user = localStorage.getItem("loginUser");
    if (!user) return;
    dispatch(loginSuccessActionCreator(user));
  } catch (e) {
    console.log("localStorage is not working");
  }
}
export function loadSessionUser() {
  const dispatch = useDispatch();
  try {
    const user = sessionStorage.getItem("loginUser");
    if (!user) return;
    dispatch(loginSuccessActionCreator(user));
  } catch (e) {
    console.log("sessionStorage is not working");
  }
}

export default UserSlice.reducer;
