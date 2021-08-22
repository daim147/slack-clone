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
export const ChatInput = styled.div``;
