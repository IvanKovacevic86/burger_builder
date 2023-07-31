import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  const { show, modalClosed } = props;
  return (
    <div>
      <Backdrop show={show} modalClosed={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
