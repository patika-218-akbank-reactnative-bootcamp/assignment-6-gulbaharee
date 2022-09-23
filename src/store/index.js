import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { themeSlice } from "./themeSlice";

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    theme:themeSlice.reducer,
  }),
});
