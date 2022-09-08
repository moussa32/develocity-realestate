import { configureStore } from '@reduxjs/toolkit'
import SellApiReducer from "../../pages/DataFetch/SellFetchData";
import HomeApiReducer from "../../pages/DataFetch/HomeFetchData";
import CategoryApiReducer from "../../pages/DataFetch/CategoryFetchData";
import FooterApiReducer from "../../pages/DataFetch/FooterFetchData";
import SellEachAdvApiReducer from "../../pages/DataFetch/SellEachAdvFetchData";
import AuthSliceReducer from '../DataFetch/AuthSlice';

export const store = configureStore({
    reducer: {
        sell: SellApiReducer,
        home: HomeApiReducer,
        category: CategoryApiReducer,
        footer: FooterApiReducer,
        sellEachAdv: SellEachAdvApiReducer,
        auth: AuthSliceReducer
       
    },
})