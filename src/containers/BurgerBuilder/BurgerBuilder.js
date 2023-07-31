import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const initialValue = {
  ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const BurgerBuilder = () => {
  const [burgerBuilder, setBurgerBuilder] = useState(initialValue);
  const [order, setOrder] = useState(false);
  const [modal, setModal] = useState(false);

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
    alert("neca hemija");
  };

  const disabledInfo = {
    ...burgerBuilder.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal show={modal} modalClosed={modalClosed}>
        <OrderSummary
          burgerBuilder={burgerBuilder}
          purchaseContinueHandler={purchaseContinueHandler}
          modalClosed={modalClosed}
        />
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
