import styles from "./MilkItem.module.css";

export const MilkItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{formattedPrice}</div>
      <div>

      </div>
    </li>
  );
};
