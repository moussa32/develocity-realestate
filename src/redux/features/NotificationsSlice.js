import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authentcatedInstance } from "../../api/constants";

export const fetchNotifications = createAsyncThunk("home/fetchNotificationsData", async () => {
  const request = await authentcatedInstance.get("user/notifications");

  return request.data;
});

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    data: {
      isOpen: false,
    },
    status: null,
  },
  reducers: {
    closeNotificationsMenu: (state) => {
      state.data.isOpen = false;
    },
    toggleNotificationsMenu: (state) => {
      state.data.isOpen = !state.data.isOpen;
    },
  },
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, { payload }) => {
      state.data = { ...state.data, payload };
      state.status = "success";
    },
    [fetchNotifications.pending]: (state) => {
      state.status = "pending";
    },
    [fetchNotifications.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { toggleNotificationsMenu, closeNotificationsMenu } = NotificationsSlice.actions;
export default NotificationsSlice.reducer;
