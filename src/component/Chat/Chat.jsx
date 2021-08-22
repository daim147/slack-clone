import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./Chat.styles";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <ChatContainer item xs={9}>
      <Header display="flex" justifyContent="space-between">
        <HeaderLeft display="flex" alignItems="center">
          <h4>
            <strong># Room-Name</strong>
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
      <ChatMessages />
      <ChatInput channelName="Daim" />
    </ChatContainer>
  );
};

export default Chat;
