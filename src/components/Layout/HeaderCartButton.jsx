import React, { useContext, Fragment, useState, useEffect } from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "../styles/HeaderCartButton.module.css";
import ContextCart from "./../store/context-Cart";

const HeaderCartButton = (props) => {
  const ctxCart = useContext(ContextCart);

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
