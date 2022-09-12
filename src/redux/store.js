import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./features/CategorySlice";
import HomeSlice from "./features/HomeSlice";

const store = configureStore({
  reducer: { home: HomeSlice, category: CategorySlice },
});

export default store;
