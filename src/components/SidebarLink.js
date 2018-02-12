// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string,
  children: React.Node
};

const SidebarLink = (props: Props) =>
  <NavLink
    to={props.to}
    style={{
      display: "flex",
      alignItems: "center",
      height: "3rem",
      color: "#333",
      padding: "0 1.5rem 0 1.5rem"
    }}
    activeStyle={{
      display: "flex",
      alignItems: "center",
      height: "3rem",
      color: "#333",
      backgroundColor: "#E2E2EB",
      padding: "0 1.5rem 0 1.5rem"
    }}
  >
    {props.children}
  </NavLink>;

export default SidebarLink;
