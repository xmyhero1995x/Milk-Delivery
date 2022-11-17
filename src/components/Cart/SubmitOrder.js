import styles from "./SubmitOrder.module.css";
import useInput from "../../hooks/useInput";

const SubmitOrder = (props) => {
  // Name
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isNameInputValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValue,
  } = useInput((value) => value.trim() !== "");

  // City
  const {
    value: enteredCity,
    hasError: hasCityInputError,
    isValid: isCityInputValid,
    inputChangeHandler: cityInputChangeHandler,
    inputLostFocusHandler: cityInputLostFocusHandler,
    resetValues: resetCityInputValue,
  } = useInput((value) => value.trim() !== "");
  // Adress
  const {
    value: enteredAdress,
    hasError: hasAdressInputError,
    isValid: isAdressInputValid,
    inputChangeHandler: adressInputChangeHandler,
    inputLostFocusHandler: adressInputLostFocusHandler,
    resetValues: resetAdressInputValue,
  } = useInput((value) => value.trim() !== "");

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    if (!isNameInputValid && isCityInputValid && isAdressInputValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredCity);
    console.log(enteredAdress);

    resetNameInputValue();
    resetCityInputValue();
    resetAdressInputValue();
  };

  let isFormValid = false;

  if (isNameInputValid && isCityInputValid && isAdressInputValid) {
    isFormValid = true;
  }

  const nameInputClass = `${styles.control} ${
    hasNameInputError ? styles.invalid : ""
  }`;
  const cityInputClass = `${styles.control} ${
    hasCityInputError ? styles.invalid : ""
  }`;
  const adressInputClass = `${styles.control} ${
    hasAdressInputError ? styles.invalid : ""
  }`;

  props.onSubmit({
    name: enteredName,
    city: enteredCity,
    adress: enteredAdress,
  })

  return (
    <form onSubmit={confirmOrderHandler} className={styles.form}>
      <div className={nameInputClass}>
        <label htmlFor="name">Enter your name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
        />
        {hasNameInputError && <p>Enter your name</p>}
      </div>
      <div className={cityInputClass}>
        <label htmlFor="city">Enter your city</label>
        <input
          id="city"
          type="text"
          value={enteredCity}
          onChange={cityInputChangeHandler}
          onBlur={cityInputLostFocusHandler}
        />
        {hasCityInputError && <p>Enter your city</p>}
      </div>
      <div className={adressInputClass}>
        <label htmlFor="adress">Enter your adress</label>
        <input
          id="adress"
          type="text"
          value={enteredAdress}
          onChange={adressInputChangeHandler}
          onBlur={adressInputLostFocusHandler}
        />
        {hasAdressInputError && <p>Enter your adress</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}  disabled={!isFormValid}>
          Order
        </button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SubmitOrder;
