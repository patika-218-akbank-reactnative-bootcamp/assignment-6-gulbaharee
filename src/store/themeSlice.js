import { createSlice } from "@reduxjs/toolkit";
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    activeTheme: lightTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      return {
        activeTheme:
          state.activeTheme.type === lightTheme.type ? darkTheme : lightTheme,
      };
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
