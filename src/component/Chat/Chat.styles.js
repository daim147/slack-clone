import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";

export const ChatContainer = styled(Grid)`
  padding-top: 60px;
  height: 100%;
  overflow-y: scroll;
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

export const ChatMessages = styled.div``;
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

export const NotSelected = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* padding: 10px; */
  background-color: #a1a1a1;

  > h2 {
    color: var(--slacK-color) !important;
    font-size: 80px !important;
    font-weight: 700 !important;
  }

  > svg {
    height: 60vh;
  }
`;
