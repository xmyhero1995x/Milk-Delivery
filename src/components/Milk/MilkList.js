import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { MilkItem } from "./MilkItem/MilkItem";
import styles from "./MilkList.module.css";

// const MILK_LIST = [
//   {
//     id: "m1",
//     name: "XS Milk",
//     description: "500ml",
//     price: 2.99,
//   },
//   {
//     id: "m2",
//     name: "S Milk",
//     description: "800ml",
//     price: 3.99,
//   },
//   {
//     id: "m3",
//     name: "M Milk",
//     description: "1100ml",
//     price: 5.99,
//   },
//   {
//     id: "m4",
//     name: "L Milk",
//     description: "1400ml",
//     price: 7.99,
//   },
// ];

export const MilkList = () => {
  const [milk, setMilk] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState();

  useEffect(() => {
    const fetchMilk = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://milk-delivery-1a3e3-default-rtdb.firebaseio.com/MILK_LIST.json"
      );

      if (!response.ok) {
        throw new Error("Something go wrong");
      }

      const responseData = await response.json();
      const loadedMilk = [];

      for (const key in responseData) {
        loadedMilk.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMilk(loadedMilk);
      setIsLoading(false);
    };

    fetchMilk().catch((error) => {
      setIsLoading(false);
      setHttpErrorMessage(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Downloading data...</p>
      </section>
    );
  }

  if (httpErrorMessage) {
    return (
      <section className={styles.error}>
        <p>{httpErrorMessage}.</p>
      </section>
    );
  }

  const milkList = milk.map((milk) => (
    <MilkItem
      name={milk.name}
      price={milk.price}
      key={milk.id}
      id={milk.id}
      description={milk.description}
    />
  ));

  return (
    <section className={styles.milk}>
      <Card>
        <ul>{milkList}</ul>
      </Card>
    </section>
  );
};
