import { Typography } from "@material-ui/core";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../../firebase";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarInfo,
  SideBarIcon,
} from "./Sidebar.styles";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(
    database.collection("rooms")
  );
  console.log(channels);
  return (
    <SideBarContainer item xs={3}>
      <SideBarHeader
        container
        justifyContent="space-between"
        alignItems="center"
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

      <SidebarOption Icon={InsertComment} title="Thread" />
      <SidebarOption Icon={Inbox} title="Mention & reaction" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user group" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption addChannelOption Icon={Add} title="Add Channel" />
      {channels?.docs.map((channel) => (
        <SidebarOption
          key={channel.id}
          id={channel.id}
          title={channel.data().name}
        />
      ))}
    </SideBarContainer>
  );
};

export default Sidebar;
