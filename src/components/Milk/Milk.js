import { Fragment } from "react/cjs/react.production.min";
// import styles from "./Milk.module.css";
import { MilkList } from "./MilkList";
import { PromoText } from "./PromoText";

export const Milk = () => {
  return (
    <Fragment>
      <PromoText />
      <MilkList />
    </Fragment>
  );
};
