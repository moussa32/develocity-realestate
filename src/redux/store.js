import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import CategorySlice from "./features/CategorySlice";
import HomeSlice from "./features/HomeSlice";
import ModalSlice from "./features/ModalSlice";
import UserSlice from "./features/UserSlice";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  home: HomeSlice,
  category: CategorySlice,
  modal: ModalSlice,
  user: UserSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
