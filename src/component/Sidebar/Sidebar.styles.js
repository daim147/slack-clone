import { Grid, Box } from "@material-ui/core";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const SideBarContainer = styled(Grid)`
  padding-top: 60px;
  background-color: var(--slacK-color);
  height: 100%;
  padding-bottom: 40px;
  border-top: 1px solid #49274b;
  color: white;
  max-width: 260px !important;
  overflow-y: scroll;

  > hr {
    margin: 10px 0;
    border: 1px solid gray;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

// ? SIDE BAR HEADER

export const SideBarHeader = styled(Grid)`
  height: fit-content;
  border-bottom: 1px solid #49274b;
  padding: 13px 13px 10px;
`;
export const SideBarInfo = styled(Box)`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    padding: 0px !important;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
    font-weight: 400;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;
export const SideBarIcon = styled(IconButton)`
  background-color: white !important;
  color: #49274b !important;
`;

// ! SIDEBAR OPTIONS
export const Option = styled(Box)`
  font-size: 12px !important;
  padding-left: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: #340336;
  }

  > h3 {
    font-size: 15px !important;

    font-weight: 500 !important;
  }
`;
export const OptionChannel = styled.div`
  display: flex;
  padding: 10px 2px;
  font-weight: 300;

  > span {
    font-size: 15px !important;
    margin-right: 5px;
  }
  > h3 {
    font-size: 15px !important;

    font-weight: 500 !important;
  }
`;
