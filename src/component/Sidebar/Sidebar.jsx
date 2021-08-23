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
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannels } from "../../features/channelDetails";
import { auth } from "../../firebase";
// import { database } from "../../firebase";
import {
  SideBarContainer,
  SideBarHeader,
  SideBarInfo,
  SideBarIcon,
} from "./Sidebar.styles";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.channels);

  useEffect(() => {
    dispatch(fetchChannels());
  }, [dispatch]);

  return (
    <SideBarContainer item xs={3}>
      <SideBarHeader
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <SideBarInfo display="flex" flexDirection="column">
          <Typography variant="h2">{user?.displayName}</Typography>
          <Typography variant="h3">
            <FiberManualRecord />
            {user?.email}
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
      {channels?.map((channel) => (
        <SidebarOption key={channel.id} id={channel.id} title={channel.name} />
      ))}
    </SideBarContainer>
  );
};

export default Sidebar;
