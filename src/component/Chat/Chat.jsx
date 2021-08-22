import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import { motion } from "framer-motion";
import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
  NotSelected,
} from "./Chat.styles";
import { ReactComponent as YourSvg } from "../../app/undraw.svg";
import ChatInput from "./ChatInput";

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  return (
    <ChatContainer item xs={9}>
      {roomId ? (
        <>
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
          <ChatMessages></ChatMessages>
          <ChatInput channelName="Daim" channelId={roomId} />
        </>
      ) : (
        <NotSelected>
          <motion.h2
            animate={{
              y: [-5, 5],
              transition: {
                // duration: 1,
                type: "spring",
                bounce: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Please Select any channel
          </motion.h2>
          <motion.div
            animate={{
              y: [5, -5],
              transition: {
                // duration: 1,
                type: "spring",
                bounce: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <YourSvg />
          </motion.div>
        </NotSelected>
      )}
    </ChatContainer>
  );
};

export default Chat;
