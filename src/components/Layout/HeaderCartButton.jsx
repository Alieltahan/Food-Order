import React, { useContext, Fragment, useReducer } from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "../styles/HeaderCartButton.module.css";
import ContextCart from "./../store/context-Cart";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};

const HeaderCartButton = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const ctxCart = useContext(ContextCart);

  const numberOfItems = ctxCart.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <Fragment>
      <button onClick={props.onOShowCart} className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
