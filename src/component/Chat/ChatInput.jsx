import React from "react";

const ChatInput = ({ channelName }) => {
  return (
    <ChatInput>
      <form>
        <input placeholder={`Message #${channelName}`} />
      </form>
    </ChatInput>
  );
};

export default ChatInput;
