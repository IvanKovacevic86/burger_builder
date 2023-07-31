import React from "react";
import "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  const { sideDrawerCloseHandler, sideDrawerClose } = props;

  return (
    <>
      <Backdrop show={sideDrawerClose} modalClosed={sideDrawerCloseHandler} />
      <div className="SideDrawer">
        <div className="LogoSide">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
