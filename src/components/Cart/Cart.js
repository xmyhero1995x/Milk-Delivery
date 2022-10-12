import { Modal } from "../UI/Modal";
import styles from "./Cart.module.css";

export const Cart = (props) => {
  const cartItems = [{ id: "m1", name: "milk", amount: 2, price: 10.99 }].map(
    (item) => {
      <li>{item.name}</li>;
    }
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      <div>
        <ul className={styles["art-items"]}>{cartItems}</ul>
      </div>
      <div className={styles.total}>
        <span>{}</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles[`button--alt`]} onClick={props.onHideCart}>Close</button>
        <button className={styles.button}>Close</button>
      </div>
    </Modal>
  );
};
