import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Link, Outlet } from "react-router-dom";

const NavigationItems = (props) => {
  return (
    <div>
      <ul className="NavigationItems">
        <Link to="/">
          <NavigationItem link="/" active>
            Burger Builder
          </NavigationItem>
        </Link>
        <Link to="/checkout">
          <NavigationItem link="/">Checkout</NavigationItem>
        </Link>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationItems;
