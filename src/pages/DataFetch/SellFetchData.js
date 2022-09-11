import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authentcatedInstance } from "./constat";

export const fetchSell = createAsyncThunk("sell/fetchScore", async () => {
  const response = await authentcatedInstance.get("advertisement/properties");

  return response.data;
});

const SellApi = createSlice({
  name: "sell",
  reducers: {},
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchSell.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchSell.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSell.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default SellApi.reducer;
