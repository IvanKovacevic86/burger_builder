import React, { useState } from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [sideDrawerClose, setSideDrawerClose] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawerClose(true);
  };

  return (
    <>
      <Toolbar />
      <SideDrawer
        sideDrawerClose={sideDrawerClose}
        sideDrawerCloseHandler={sideDrawerCloseHandler}
      />
      <main className="content">{props.children}</main>
    </>
  );
};

export default Layout;
