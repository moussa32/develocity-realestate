import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "./constat";

export const fetchCategory = createAsyncThunk("category/fetchScore", async (category_id) => {
  var categoryAdv = parseInt(category_id) ? `category/${category_id}/advertisements` : `category/advertisements`;
  console.log("ee", `https://akarat.develocity.app/api/${categoryAdv}`);
  const response = await globalInstance.get(`${categoryAdv}`);
  if (!response.data || typeof response.data.fetchCategory != "string") {
    console.log("there is an error");
  }

  return response.data;
});

const CategoryApi = createSlice({
  name: " category",
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
