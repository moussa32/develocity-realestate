import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "../../api/constants";

export const fetchHome = createAsyncThunk("home/fetchHomeData", async () => {
  const request = await globalInstance.get("home");

  return request.data;
});

const HomeSlice = createSlice({
  name: "home",
  reducers: {},
  initialState: {
    data: {},
    status: null,
  },
  extraReducers: {
    [fetchHome.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchHome.pending]: (state) => {
      state.status = "pending";
    },
    [fetchHome.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default HomeSlice.reducer;
