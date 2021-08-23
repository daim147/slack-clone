import React from "react";

import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import {
  GridHeader,
  HeaderAvatar,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
} from "./Header.styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <GridHeader container alignItems="center">
      {/* LOGO COMPONENT */}
      <HeaderLeft
        container
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        item
        xs={3}
      >
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </HeaderLeft>
      {/* SEARCH COMPONENT */}
      <HeaderMiddle container item xs={6}>
        <Search />
        <input placeholder="Search group" />
      </HeaderMiddle>
      {/* RIGHT COMPONENT */}
      <HeaderRight container justifyContent="flex-end" item xs={3}>
        <HelpOutline />
      </HeaderRight>
    </GridHeader>
  );
};

export default Header;
