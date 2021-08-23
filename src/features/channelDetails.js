import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { database } from "../firebase";

export const fetchChannels = createAsyncThunk(
  "fetch/channels",
  async (_, { dispatch }) => {
    try {
      database
        .collection("rooms")
        .orderBy("timeStamp", "asc")
        .onSnapshot((channels) =>
          dispatch(
            getAllChannel(
              channels.docs.map((channel) => ({
                ...channel.data(),
                timeStamp: channel.data().timeStamp?.toMillis(),
                id: channel.id,
              }))
            )
          )
        );
    } catch (error) {
      alert(error);
    }
  }
);
export const getRequiredChannel = createAsyncThunk(
  "required/channel",
  async (id, { rejectWithValue }) => {
    try {
      const channelReference = database.collection("rooms").doc(id);
      const channel = await channelReference.get();
      if (!channel.exists) {
        console.log("NOT EXITS");
        throw new Error("Channel not found Please select valid one");
      }
      return {
        ...channel.data(),
        timeStamp: channel.data().timeStamp?.toMillis(),
      };
    } catch (error) {
      console.log("CATCHING ERRRO", error);
      return rejectWithValue(error.message);
    }
  }
);
export const getMessages = createAsyncThunk(
  "required/channelMessages",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      database
        .collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot((messages) => {
          dispatch(
            getSelectedChannelMessages(
              messages.docs.map((message) => ({
                ...message.data(),
                timeStamp: message.data().timeStamp?.toMillis(),
                id: message.id,
              }))
            )
          );
        });
    } catch (error) {
      alert(error);
      return false;
    }
  }
);

export const getAllChannel = createAction("get/channel");
export const getSelectedChannelMessages = createAction("get/messages");

export const channelsArray = createReducer(
  { channels: null, selectedChannel: null, selectedChannelMessages: null },
  (builder) => {
    builder
      .addCase(getAllChannel, (state, action) => {
        state.channels = action.payload;
      })
      .addCase(getRequiredChannel.fulfilled, (state, action) => {
        console.log("I AM FULFILED");

        state.selectedChannel = action.payload;
      })
      .addCase(getRequiredChannel.rejected, (state, action) => {
        console.log("I AM REJECTED");
        state.selectedChannel = action.payload;
      })
      .addCase(getSelectedChannelMessages, (state, action) => {
        state.selectedChannelMessages = action.payload;
      });
  }
);
