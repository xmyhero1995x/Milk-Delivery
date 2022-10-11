import { Card } from "../UI/Card";
import { MilkItem } from "./MilkItem/MilkItem";
import styles from "./MilkList.module.css";

const MILK_LIST = [
  {
    id: "m1",
    name: "XS Milk",
    description: "500ml",
    price: 2.99,
  },
  {
    id: "m2",
    name: "S Milk",
    description: "800ml",
    price: 3.99,
  },
  {
    id: "m3",
    name: "M Milk",
    description: "1100ml",
    price: 5.99,
  },
  {
    id: "m4",
    name: "L Milk",
    description: "1400ml",
    price: 7.99,
  },
];

export const MilkList = () => {
  const milkList = MILK_LIST.map((milk) => <MilkItem name={milk.name} price={milk.price} key={milk.id} description={milk.description}/>);

  return (
    <section className={styles.milk}>
      <Card>
        <ul>{milkList}</ul>
      </Card>
    </section>
  );
};
