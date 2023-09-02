import React from "react";
import Layout from "../../components/Layout/Layout";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = {
  ingredients: { salad: 1, bacon: 1, cheese: 1, meat: 1 },
};

const Checkout = (props) => {
  const [checkout, setCheckout] = useState(initialValue);

  const navigate = useNavigate();

  const fetchIngredients = () => {
    const query = new URLSearchParams(window.location.search);
    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    setCheckout({ ingredients: ingredients });
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const checkouContinued = () => {
    navigate("/checkout/contact-data");
  };

  const checkouCancelled = () => {
    navigate(-1);
  };

  return (
    <div>
      <Layout>
        <CheckoutSummary
          burgerBuilder={checkout}
          checkouContinued={checkouContinued}
          checkouCancelled={checkouCancelled}
        />
      </Layout>
    </div>
  );
};

export default Checkout;
