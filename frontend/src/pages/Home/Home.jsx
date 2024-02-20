import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../Componets/shared/Card/Card";
const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card></Card>
    </div>
  );
};

export default Home;
