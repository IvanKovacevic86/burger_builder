import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
  return (
    <div>
      <header className="Toolbar">
        <div>MENU</div>
        <div className="LogoToolbar">
          <Logo />
        </div>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

export default Toolbar;
