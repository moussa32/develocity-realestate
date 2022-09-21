import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return { ...payload, isLoggedIn: true };
    },
    removeUser: (state) => {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
