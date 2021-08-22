import React from "react";
import { Option } from "./Sidebar.styles";

const SidebarOption = ({ Icons, title }) => {
  return (
    <Option display="flex" justifyContent="space-between" alignItems="center">
      <Icons />
      {title}
    </Option>
  );
};

export default SidebarOption;
