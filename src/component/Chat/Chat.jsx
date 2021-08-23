import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import {
  ChatContainer,
  Chatmessages,
  ChatmessagesBottom,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./Chat.styles";
import ChatInput from "./ChatInput";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, getRequiredChannel } from "../../features/channelDetails";
import Messages from "./Messages";
import { useRef } from "react";
import { AnimateSharedLayout } from "framer-motion";

const Chat = () => {
  const { roomId } = useParams();
  const history = useHistory();
  const selectedChannel = useSelector(
    (state) => state.channels.selectedChannel
  );
  const selectedChannelMessages = useSelector(
    (state) => state.channels.selectedChannelMessages
  );
  const dispatch = useDispatch();
  const bottom = useRef(null);
  useEffect(() => {
    // ! GETTING CHANNEL BASED ON ROOMID IN URL
    (async () => {
      await dispatch(getRequiredChannel(roomId))
        .unwrap()
        .catch((error) => {
          alert(error);
          history.push("/");
        });

      // ! GETTING MESSAGES BASED ON ROOMID IN URL
      await dispatch(getMessages(roomId));
    })();
  }, [dispatch, roomId, history]);

  useEffect(() => {
    bottom?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [selectedChannelMessages]);

  return (
    <ChatContainer item xs={9}>
      <Header display="flex" justifyContent="space-between">
        <HeaderLeft display="flex" alignItems="center">
          <h4>
            <strong># {selectedChannel?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined />
            Detail
          </p>
        </HeaderRight>
      </Header>
      <AnimateSharedLayout>
        <Chatmessages
          layout
          transition={{ type: "spring", bounce: 0.4, duration: 0.2 }}
        >
          {selectedChannelMessages?.map(({ id, ...data }) => (
            <Messages key={id} {...data} />
          ))}
        </Chatmessages>
      </AnimateSharedLayout>
      <ChatmessagesBottom ref={bottom} />
      <ChatInput channelName={selectedChannel?.name} channelId={roomId} />
    </ChatContainer>
  );
};

export default Chat;
