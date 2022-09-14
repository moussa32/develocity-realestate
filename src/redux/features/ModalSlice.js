import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    view: "",
    open: false,
  },
  reducers: {
    setShowModal: (state, action) => {
      state.view = action.payload.view;
      state.open = true;
    },
    setCloseModal: (state) => {
      state.view = "";
      state.open = false;
    },
  },
});

export const { setShowModal, setCloseModal } = modalSlice.actions;
export default modalSlice.reducer;
