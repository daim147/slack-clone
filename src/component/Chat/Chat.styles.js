import { Box, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ChatContainer = styled(Grid)`
  padding-top: 60px;
  height: 100%;
  overflow: scroll;
  max-width: 100% !important;
  flex-grow: 1 !important;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled(Box)`
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
export const HeaderLeft = styled(Box)`
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px !important;
    font-size: 18px;
  }
`;
export const HeaderRight = styled(Box)`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 18px;
  }
`;

export const Chatmessages = styled(motion.div)``;
export const ChatmessagesBottom = styled.div`
  padding-bottom: 150px;
`;
export const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    font-size: 16px;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }
`;

export const NotSelected = styled(Grid)`
  overflow: scroll !important;
  padding-top: 60px;
  height: 100%;
  max-width: 100% !important;
  flex-grow: 1 !important;
  /* padding: 10px; */
  background-color: #a1a1a1;

  > h2 {
    color: var(--slacK-color) !important;
    font-size: 6vw !important;
    font-weight: 700 !important;
    margin: 20px !important;
    text-align: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > svg {
    height: 35vw;
  }
`;

export const MessageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin: 10px 0;
`;
export const MessageInfo = styled.div`
  padding-left: 10px;
  > h5 {
    color: #868383;
  }
  > h5 > span {
    color: gray;
    font-weight: 500;
    font-size: 14px;
    margin-left: 4px;
  }
`;
