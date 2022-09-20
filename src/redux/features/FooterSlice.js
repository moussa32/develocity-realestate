import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "../../api/constants";

export const fetchFooter = createAsyncThunk("footer/fetchFooter", async () => {
  const requestFooter = await globalInstance.get("/footer");

  return requestFooter.data;
});

const FooterSlice = createSlice({
  name: "footer",
  reducers: {},
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [fetchFooter.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchFooter.pending]: (state) => {
      state.status = "pending";
    },
    [fetchFooter.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default FooterSlice.reducer;
