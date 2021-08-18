import styles from "./MealItem.module.css";
const MealItem = (props) => {
  console.log(props);
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.meal.name}</h3>
      </div>
      <div className={styles.description}>{props.meal.description}</div>
      <div className={styles.price}>{price}</div>
      <div></div>
    </li>
  );
};

export default MealItem;
