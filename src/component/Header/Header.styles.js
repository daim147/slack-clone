import { Avatar, Grid } from "@material-ui/core";
import styled from "styled-components";

export const GridHeader = styled(Grid)`
  color: white;
  background-color: var(--slacK-color);
  padding: 10px 0;
  z-index: 999;
  position: fixed;
`;

//? HEADER LEFT

export const HeaderLeft = styled(Grid)`
  padding: 0 30px 0 20px;
  color: white;
`;
export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

//? HEADER MIDDLE

export const HeaderMiddle = styled(Grid)`
  /* color: blue; */
  background-color: #421f44;
  text-align: center;
  color: gray;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 0 5vw;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    color: white;
    outline: none;
    flex: 1;
  }
`;
//? HEADER RIGHT

export const HeaderRight = styled(Grid)`
  padding: 0 30px 0 20px;
`;
