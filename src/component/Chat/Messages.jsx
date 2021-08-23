import { Avatar } from "@material-ui/core";
import React from "react";
import { MessageContainer, MessageInfo } from "./Chat.styles";

const Messages = ({ timeStamp, user, message, userImg }) => {
  return (
    <MessageContainer>
      <Avatar src={userImg} alt="">
        {user[0]}
      </Avatar>
      <MessageInfo>
        <h5>
          {user}{" "}
          <span>{timeStamp && new Date(timeStamp).toLocaleString()}</span>
        </h5>
        <h3>{message}</h3>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Messages;
