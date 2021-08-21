import React, { useContext, Fragment, useState, useEffect } from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "../styles/HeaderCartButton.module.css";
import ContextCart from "./../store/context-Cart";

const HeaderCartButton = (props) => {
  const ctxCart = useContext(ContextCart);
  const [btnHighlight, setBtnHighlight] = useState(false);

  const { items } = ctxCart;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const numberOfItems = ctxCart.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnHighlight ? styles.bump : ""}`;
  return (
    <Fragment>
      <button onClick={props.onOShowCart} className={btnClasses}>
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
