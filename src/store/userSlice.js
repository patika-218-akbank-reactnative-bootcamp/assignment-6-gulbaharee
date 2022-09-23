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
    addUser: (state, action) => {
      const newUser = [...state, registeredUser];
      newUser.push(action.payload);
      return {
        registeredUser: newUser,
      };
    },
  },
});

export const { setUser, addUser } = userSlice.actions;
