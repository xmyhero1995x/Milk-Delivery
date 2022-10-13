import { useRef, useState } from "react";

import { Input } from "../../UI/Input";
import styles from "./MilkItemForm.module.css";

export const MilkItemForm = (props) => {

  const [isAmountValid, setIsAmountValid] = useState(true)

  const amountInputRef = useRef();

  const submitHandler = (event) => {

    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 15
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Enter number from 1 to 15</p>}
    </form>
  );
};
