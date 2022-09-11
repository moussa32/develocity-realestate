import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "./constat";

export const fetchHome = createAsyncThunk("home/fetchScore", async () => {
  const response = await globalInstance.get("home");

  return response.data;
});

const HomeApi = createSlice({
  name: "home",
  reducers: {},
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchHome.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchHome.pending]: (state) => {
      state.status = "loading";
    },
    [fetchHome.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default HomeApi.reducer;
