import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "activeUser",
  initialState: {
    registeredUser: {},
  },
  reducers: {
    setUser: (state, action) => {
      const { activeUser } = action.payload;
      return {
        registeredUser: activeUser,
      };
    },
  },
});

export const { setUser } = userSlice.actions;
