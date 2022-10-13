import { Modal } from "../UI/Modal";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";

export const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItmes = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null,item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>{}</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles[`button--alt`]} onClick={props.onHideCart}>
          Close
        </button>
        {!hasItmes && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
