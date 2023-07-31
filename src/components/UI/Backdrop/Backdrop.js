import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  const { show, modalClosed } = props;
  return (
    <div>
      {show ? <div className="Backdrop" onClick={modalClosed}></div> : null}
    </div>
  );
};

export default Backdrop;
