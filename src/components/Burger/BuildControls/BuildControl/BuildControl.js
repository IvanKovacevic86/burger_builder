import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => {
  const { label, addIngredientHandler, removeIngredientHandler, disabledInfo } =
    props;
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button
        className="Less"
        onClick={removeIngredientHandler}
        disabled={disabledInfo}
      >
        Less
      </button>
      <button className="More" onClick={addIngredientHandler}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
