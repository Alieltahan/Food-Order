import styles from "../styles/CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.item.onRemove}>−</button>
        <button onClick={props.item.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
