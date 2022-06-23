import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { addOne, removeFromCart, removeOne } from "../../redux/cart";

import classes from "./CartItem.module.scss";

const CartItem = ({ images, name, id, quantity, price }) => {
  const dispatch = useDispatch();
  const totalPrice = price * quantity;

  const handleRemove = () => dispatch(removeFromCart(id));
  const handlePlus = () => dispatch(addOne(id));
  const handleMinus = () => dispatch(removeOne(id)); 

  return (
    <div className={classes["cart-item"]} key={id}>
      <img className={classes["cart-item__image"]} src={images[0]} alt={name} />
      <p className={classes["cart-item__name"]}>{name}</p>
      <FontAwesomeIcon
        onClick={handleRemove}
        icon={faTrashCan}
        className={classes["cart-item__trash"]}
      />
      <div className={classes["cart-item__controller"]}>
        <button onClick={handleMinus}>-</button>
        {quantity}
        <button onClick={handlePlus}>+</button>
      </div>
      <p className={classes["cart-item__totalPrice"]}>{totalPrice} $</p>
    </div>
  );
};

export default CartItem;
