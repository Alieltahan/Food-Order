import { useRef, useState } from "react";
import styles from "../../styles/MealItemForm.module.css";
import Input from "./../../UI/Input";

const MealItemForm = (props) => {
  const refAmount = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAmount = +refAmount.current.value;
    if (updatedAmount.length === 0 || updatedAmount > 5 || updatedAmount < 1) {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    props.onAddCartItem(updatedAmount);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={refAmount}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!inputIsValid && <p>Please Enter a valid Number</p>}
    </form>
  );
};

export default MealItemForm;
