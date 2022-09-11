import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "./constat";

export const fetchCategory = createAsyncThunk("category/fetchScore", async (category_id) => {
  const categoryAdv = parseInt(category_id) ? `category/${category_id}/advertisements` : `category/advertisements`;
  const response = await globalInstance.get(`${categoryAdv}`);
  return response.data;
});

const CategoryApi = createSlice({
  name: "category",
  reducers: {},
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [fetchCategory.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchCategory.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategory.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default CategoryApi.reducer;
