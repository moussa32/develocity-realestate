import { createSlice } from "@reduxjs/toolkit";

const SignupSlice = createSlice({
  name: "signupStep",
  initialState: {
    step: "",
    type: "",
    password: "",
    isActive: false,
  },
  reducers: {
    setSignupEmail: (state, action) => {
      state.type = action.payload.type;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setSignupPhone: (state, action) => {
      state.type = action.payload.type;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
    setSignupStep: (state, action) => {
      state.step = action.payload.step;
    },
    setSignupActive: (state) => {
      state.isActive = true;
    },
    resetSignupStep: (state) => {
      delete state[state.type];
      state.step = "";
      state.password = "";
      state.type = "";
    },
  },
});

export const { setSignupEmail, setSignupPhone, setSignupStep, setSignupActive, resetSignupStep } = SignupSlice.actions;
export default SignupSlice.reducer;
