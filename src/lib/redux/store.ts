import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./User/UserSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
