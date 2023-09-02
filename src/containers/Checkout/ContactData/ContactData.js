import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import "./ContactData.css";

const ContactData = (props) => {
  const { orderHandle } = props;
  const [contactData, setContactData] = useState({
    name: " ",
    email: "",
    address: {
      street: "",
      postaCode: "",
    },
  });

  return (
    <Layout>
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name " />
          <input type="email" name="email" placeholder="Your email " />
          <input type="text" name="street" placeholder="Street " />
          <input type="text" name="postalCode" placeholder="Postal Code " />
          <button className="Button Success" onClick={orderHandle}>
            ORDER!
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactData;
