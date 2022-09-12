import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInstance } from "../../pages/DataFetch/constat";

export const fetchCategory = createAsyncThunk("category/fetchCategoryData", async (categoryID) => {
  const categoryParams = parseInt(categoryID) ? `category/${categoryID}/advertisements` : `category/advertisements`;
  const request = await globalInstance.get(categoryParams);

  return request.data;
});

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCategory.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [fetchCategory.pending]: (state) => {
      state.status = "pending";
    },
    [fetchCategory.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default CategorySlice.reducer;
