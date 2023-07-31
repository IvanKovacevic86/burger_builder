import React from "react";
import logo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="Logo" style={{ height: props.height }}>
      <img src={logo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
