import { useContext } from "react";
import ContextCart from "../store/context-Cart";
import styles from "../styles/Cart.module.css";
import Modal from "./../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctxCart = useContext(ContextCart);

  const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;
  const cartHasItems = ctxCart.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctxCart.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctxCart.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          price={item.price}
          amount={item.amount}
          name={item.name}
          key={item.id}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClickCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCloseCart} className={styles["button--alt"]}>
          Close
        </button>
        {cartHasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
