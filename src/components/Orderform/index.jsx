import React, { useState } from "react";
import Container from "../../layout/Container";

import classes from "./Orderform.module.scss";
import image from "../../images/orderFormImage.jpg";

const initialData = {
  name: "",
  tel: "",
  text: "",
};

const Orderform = () => {
  const [fields, setFields] = useState(initialData);
  const setValue = (event) =>
    setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    setFields(initialData);
  };
  return (
    <Container className={classes["order-form"]}>
      <h2 className={classes["order-form__title"]}>Order a unique basket</h2>
      <form className={classes["order-form__form"]}>
        <div className={classes["order-form__fields"]}>
          <input
            className={classes["order-form__input"]}
            type="text"
            placeholder="Name*"
            onChange={setValue}
            value={fields.name}
            name="name"
          />
          <input
            className={classes["order-form__input"]}
            type="tel"
            placeholder="Phone Number*"
            onChange={setValue}
            value={fields.tel}
            name="tel"
          />
          <textarea
            className={classes["order-form__textarea"]}
            placeholder="Your Ideas*"
            onChange={setValue}
            value={fields.text}
            name="text"
          ></textarea>
          <button
            onClick={handleSubmit}
            className={classes["order-form__button"]}
          >
            Send
          </button>
        </div>
        <img
          className={classes["order-form__image"]}
          src={image}
          alt="Beautiful bouquet of white flowers"
        />
      </form>
    </Container>
  );
};

export default Orderform;
