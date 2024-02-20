import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={headingwrapper}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.heading}>Welcome to Dropin</h1>
      </div>
    </div>
  );
};

export default Card;
