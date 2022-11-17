import { Modal } from "../UI/Modal";
import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";
import SubmitOrder from "./SubmitOrder";
import { Fragment } from "react/cjs/react.production.min";

export const Cart = (props) => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItmes = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem({ id });
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const confirmOrderHandler = () => {
    setIsSubmitOrderAvailable(true);
    console.log("ordered");
  };

  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);
    console.log("fuck u");

    const response = await fetch(
      "https://milk-delivery-1a3e3-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMilk: cartContext.items,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Something go wrong");
    }

    setIsDataSubmitting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalButtons = (
    <div className={styles.actions}>
      <button className={styles[`button--alt`]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItmes && (
        <button className={styles.button} onClick={confirmOrderHandler}>
          Confirm
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>{}</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOrder
          onSubmit={submitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isSubmitOrderAvailable && modalButtons}
    </Fragment>
  );

  const dataSubmittingCartModalContent = <p>Sending your order...</p>;
  const dataWasSubmittedCartModalContent = (
    <Fragment>
      <p>Order successful </p>
      <div className={styles.actions}>
        <button className={styles[`button--alt`]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmitting && !wasDataSendingSuccessful && cartModelContent}
      {isDataSubmitting && dataSubmittingCartModalContent}
      {wasDataSendingSuccessful && dataWasSubmittedCartModalContent}
    </Modal>
  );
};
