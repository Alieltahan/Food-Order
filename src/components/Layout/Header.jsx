import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Fast Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
