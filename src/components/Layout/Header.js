import React, { Fragment } from "react";
import backgroundImg from '../../assets/background.jpg';
import { HeaderCartButton } from "../Cart/HeaderCartButton";
import styles from "./Header.module.css";

export const Header = () => {
  return <Fragment>
    <header className={styles.header}>
        <h1>Milk Delivery</h1>
        <HeaderCartButton />
    </header>
    <div className={styles['main-image']}>
        <img src={backgroundImg} alt="field"/>
    </div>
  </Fragment>;
};
