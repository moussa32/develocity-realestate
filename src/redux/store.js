import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import CategorySlice from "./features/CategorySlice";
import HomeSlice from "./features/HomeSlice";
import ModalSlice from "./features/ModalSlice";
import UserSlice from "./features/UserSlice";
import storage from "redux-persist/lib/storage";
import FooterSlice from "./features/FooterSlice";
import SellSlice from "./features/SellSlice";
import NotificationsSlice from "./features/NotificationsSlice";

const reducers = combineReducers({
  home: HomeSlice,
  category: CategorySlice,
  modal: ModalSlice,
  user: UserSlice,
  footer: FooterSlice,
  sell: SellSlice,
  notifications: NotificationsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modal", "notifications"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
