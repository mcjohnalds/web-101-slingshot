// @flow
import React from "react";
import SidebarLink from "./SidebarLink";

const Sidebar = () =>
  <div>
    <SidebarLink to="/http">HTTP</SidebarLink>
    <SidebarLink to="/http-requests">HTTP requests</SidebarLink>
    <SidebarLink to="/http-responses">HTTP responses</SidebarLink>
    <SidebarLink to="/authentication">Authentication</SidebarLink>
  </div>;

export default Sidebar;
