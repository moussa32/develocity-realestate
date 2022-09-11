import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setCredentials: (state, action) => {
      state = action.payload;
    },
    logOut: (state) => {
      state = {};
    },
  },
});

export const { setCredentials, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentEmail = (state) => state.auth.email;
export const selectCurrentToken = (state) => state.auth.token;
