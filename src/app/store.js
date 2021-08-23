import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "../features/appSlice";
import { channelsArray } from "../features/channelDetails";

export const store = configureStore({
  reducer: {
    // app: appReducer,
    channels: channelsArray,
  },
});
