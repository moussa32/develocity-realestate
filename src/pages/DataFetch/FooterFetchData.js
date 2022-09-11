import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "./constat";

export const fetchFooter = createAsyncThunk("footer/fetchScore", async () => {
  const controller = new AbortController();
  const response = await globalInstance.get("setting", { signal: controller.signal });
  controller.abort();
  return response.data;
});

const FooterApi = createSlice({
  name: " home",
  reducers: {},
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchFooter.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchFooter.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFooter.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default FooterApi.reducer;
