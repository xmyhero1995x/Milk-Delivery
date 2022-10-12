import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { CartIcon } from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

export const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};
