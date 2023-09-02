import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const BurgerBuilder = (props) => {
  const {
    burgerBuilder,
    setBurgerBuilder,
    loading,

    modal,
    setModal,
  } = props;

  const [order, setOrder] = useState(false);

  const navigate = useNavigate();

  const updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setOrder(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = burgerBuilder.ingredients[type];
    const updatedCount = oldCount + 1;
    let updatedIngredients = {
      ...burgerBuilder.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = burgerBuilder.totalPrice;
    const newPrice = oldPrice + priceAddition;

    setBurgerBuilder({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    updatePurchasable(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = burgerBuilder.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...burgerBuilder.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = burgerBuilder.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    setBurgerBuilder({ ingredients: updatedIngredients, totalPrice: newPrice });
    updatePurchasable(updatedIngredients);
  };

  const purchaseHandler = () => {
    setModal(true);
  };

  const modalClosed = () => {
    setModal(false);
  };

  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in burgerBuilder.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(burgerBuilder.ingredients[i])
      );
    }

    const queryString = queryParams.join("&");

    navigate({ pathname: "checkout", search: "?" + queryString });
  };

  const disabledInfo = {
    ...burgerBuilder.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = (
    <OrderSummary
      burgerBuilder={burgerBuilder}
      purchaseContinueHandler={purchaseContinueHandler}
      modalClosed={modalClosed}
    />
  );

  if (loading) {
    orderSummary = <Spinner />;
  }

  return (
    <>
      <Modal show={modal} modalClosed={modalClosed}>
        {orderSummary}
      </Modal>
      <Burger burgerBuilder={burgerBuilder} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        disabledInfo={disabledInfo}
        burgerBuilder={burgerBuilder}
        order={order}
        purchaseHandler={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
