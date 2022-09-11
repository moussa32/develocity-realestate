import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authentcatedInstance } from "./constat";

export const fetchSellEachAdv = createAsyncThunk("sellEachAdv/fetchScore", async () => {
  const response = await authentcatedInstance.get("advertisements");

  return response.data;
});

const SellEachAdvApi = createSlice({
  name: "sell",
  reducers: {},
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [fetchSellEachAdv.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchSellEachAdv.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSellEachAdv.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default SellEachAdvApi.reducer;
