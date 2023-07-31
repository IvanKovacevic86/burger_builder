import React from "react";
import "./OrderSummary.css";

const OrderSummary = (props) => {
  const { burgerBuilder, purchaseContinueHandler, modalClosed } = props;

  const ingredientSummary = Object.keys(burgerBuilder.ingredients).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {burgerBuilder.ingredients[igKey]}
        </li>
      );
    }
  );

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {burgerBuilder.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <button className="Button Danger" onClick={modalClosed}>
        CANCEL
      </button>
      <button className="Button Success" onClick={purchaseContinueHandler}>
        CONTINUE
      </button>
    </div>
  );
};

export default OrderSummary;
