import React from "react";
import Burger from "../../Burger/Burger";
import "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  const { burgerBuilder, checkouContinued, checkouCancelled } = props;

  return (
    <div className="CheckoutSummary">
      <h1>We hope it taste well!</h1>
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Burger burgerBuilder={burgerBuilder} />
      </div>
      <button className="Button Danger" onClick={checkouCancelled}>
        CANCEL
      </button>
      <button className="Button Success" onClick={checkouContinued}>
        CONTINUE
      </button>
    </div>
  );
};

export default CheckoutSummary;
