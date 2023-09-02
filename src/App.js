import Main from "./Main";
import Checkout from "./containers/Checkout/Checkout";
import NavigationItems from "./components/Navigation/NavigationItems/NavigationItems";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const initialValue = {
  ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
  totalPrice: 4,
};

const App = () => {
  const [burgerBuilder, setBurgerBuilder] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const orderHandle = () => {
    setLoading(true);
    const orders = {
      ingredients: burgerBuilder.ingredients,
      totalPrice: burgerBuilder.totalPrice.toFixed(2),
      customer: {
        name: "ivan kovacvic",
        address: {
          street: "veljka vlahovica",
          zipCode: "12000",
          country: "serbia",
        },
        email: "test@test.com",
      },
      deliveryMethd: "fastest",
    };

    axios
      .post(
        "https://burgerbuilder-cfdd9-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        orders
      )
      .then((res) => {
        setLoading(false);
        setModal(false);
      })
      .catch((error) => {
        setLoading(false);
        setModal(false);
      });
    alert("Your order is successful!");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavigationItems />}>
        <Route
          index
          element={
            <Main
              burgerBuilder={burgerBuilder}
              setBurgerBuilder={setBurgerBuilder}
              loading={loading}
              setLoading={setLoading}
              modal={modal}
              setModal={setModal}
            />
          }
        />
        <Route path="/checkout/*" element={<Checkout />} />
        <Route
          path="/checkout/contact-data"
          element={<ContactData orderHandle={orderHandle} />}
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
