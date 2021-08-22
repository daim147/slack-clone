import { Typography } from "@material-ui/core";
import {
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import App from "../../App";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarInfo,
  SideBarIcon,
  SideBarOptions,
} from "./Sidebar.styles";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <SideBarContainer container item xs={3}>
      <SideBarHeader
        container
        justifyContent="space-between"
        alignItems="center"
        item
        xs={12}
      >
        <SideBarInfo display="flex" flexDirection="column">
          <Typography variant="h2">Hello React</Typography>
          <Typography variant="h3">
            <FiberManualRecord />
            Husnain Syed
          </Typography>
        </SideBarInfo>
        <SideBarIcon size="small">
          <Create />
        </SideBarIcon>
      </SideBarHeader>
      {/*SIDE BAR OPTIONS  */}
      <SideBarOptions xs={12} item container direction="column">
        <SidebarOption Icons={InsertComment} title="Thread" />
        <SidebarOption Icons={Inbox} title="Mention & reaction" />
        <SidebarOption Icons={Drafts} title="Saved Items" />
        <SidebarOption Icons={BookmarkBorder} title="Channel Browser" />
        <SidebarOption Icons={PeopleAlt} title="People & user group" />
        <SidebarOption Icons={App} title="Apps" />
        <SidebarOption Icons={FileCopy} title="File Browser" />
        <SidebarOption Icons={ExpandLess} title="Show less" />
      </SideBarOptions>
    </SideBarContainer>
  );
};

export default Sidebar;
