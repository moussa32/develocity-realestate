import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authentcatedInstance } from "../../api/constants";

export const fetchSell = createAsyncThunk("sell/fetchSell", async () => {
  const requestSell = await authentcatedInstance.get("/realstate/sell");

  return requestSell.data;
});

const SellSlice = createSlice({
  name: "sell",
  initialState: {},
  extraReducers: {
    [fetchSell.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchSell.pending]: (state) => {
      state.status = "pending";
    },
    [fetchSell.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default SellSlice.reducer;
