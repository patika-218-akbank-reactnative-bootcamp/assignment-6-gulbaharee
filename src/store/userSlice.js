import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    registeredUser: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      return {
        registeredUser: user,
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
