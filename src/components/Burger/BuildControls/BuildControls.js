import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  const {
    addIngredientHandler,
    removeIngredientHandler,
    disabledInfo,
    burgerBuilder,
    order,
    purchaseHandler,
  } = props;
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{burgerBuilder.totalPrice.toFixed(2)} $</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredientHandler={() => addIngredientHandler(ctrl.type)}
          removeIngredientHandler={() => removeIngredientHandler(ctrl.type)}
          disabledInfo={disabledInfo[ctrl.type]}
        />
      ))}

      <button
        className="OrderButton"
        disabled={!order}
        onClick={purchaseHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
