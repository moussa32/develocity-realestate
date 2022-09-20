import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    view: "",
    open: false,
  },
  reducers: {
    setShowModal: (state, action) => {
      let newDataObject = Object.assign(state, { view: action.payload, open: true });
      return newDataObject;
    },
    setCloseModal: (state) => {
      state.view = "";
      state.open = false;
    },
  },
});

export const { setShowModal, setCloseModal } = modalSlice.actions;
export default modalSlice.reducer;
