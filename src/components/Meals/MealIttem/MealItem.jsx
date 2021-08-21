import MealItemForm from "./MealItemForm";
import styles from "../../styles/MealItem.module.css";
import { useContext } from "react";
import ContextCart from "./../../store/context-Cart";

const MealItem = (props) => {
  const ctxCart = useContext(ContextCart);
  const price = `$${props.meal.price.toFixed(2)}`;

  const handleAddCart = (amount) => {
    ctxCart.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
      </div>
      <div className={styles.description}>{props.meal.description}</div>
      <div className={styles.price}>{price}</div>
      <div>
        <MealItemForm onAddCartItem={handleAddCart} />
      </div>
    </li>
  );
};

export default MealItem;
