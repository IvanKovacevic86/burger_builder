import React from "react";
import "./NavigationItem.css";

const NavigationItem = (props) => {
  const { link, active } = props;
  return (
    <div>
      <li className="NavigationItem">
        <a href={link} className={active ? " active" : null}>
          {props.children}
        </a>
      </li>
    </div>
  );
};

export default NavigationItem;
