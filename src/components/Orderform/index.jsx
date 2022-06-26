import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Container from "../../layout/Container";
import image from "../../images/orderFormImage.jpg";

import classes from "./Orderform.module.scss";
import {
  validateName,
  validatePhoneContent,
  valiDatePhoneNumber,
  validateText,
} from "./helper";

const initialData = {
  name: "",
  tel: "",
  text: "",
};

const Orderform = () => {
  const [fields, setFields] = useState(initialData);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isValid =
      validateName(fields.name) &&
      validateText(fields.text) &&
      valiDatePhoneNumber(fields.tel);
    setDisabled(!isValid);
  }, [fields]);

  const setValue = (event) => {
    if (event.target.name === "tel" && !validatePhoneContent(event.target.value))
      return;
    setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

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
            className={classNames(classes["order-form__button"], {
              [classes["order-form__button_disabled"]]: disabled,
            })}
            disabled={disabled}
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
