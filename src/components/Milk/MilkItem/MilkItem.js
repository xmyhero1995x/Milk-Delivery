import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import styles from "./MilkItem.module.css";
import { MilkItemForm } from "./MilkItemForm";

export const MilkItem = (props) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={styles.milk} key={props.id}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{formattedPrice}</div>
      <div>
        <MilkItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};
