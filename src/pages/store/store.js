import { configureStore } from "@reduxjs/toolkit";
import SellApiReducer from "../../pages/DataFetch/SellFetchData";
import FooterApiReducer from "../../pages/DataFetch/FooterFetchData";
import SellEachAdvApiReducer from "../../pages/DataFetch/SellEachAdvFetchData";
import AuthSliceReducer from "../DataFetch/AuthSlice";

export const store = configureStore({
  reducer: {
    sell: SellApiReducer,
    footer: FooterApiReducer,
    sellEachAdv: SellEachAdvApiReducer,
    auth: AuthSliceReducer,
  },
});
