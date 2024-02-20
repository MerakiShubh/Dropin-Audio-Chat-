import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../Componets/shared/Card/Card";
import Button from "../../Componets/shared/Button/Button";
const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Dropin!" icon="logo">
        <p className={styles.text}>
          We're working hard to get Dropin ready for everyone! shile we wrap up
          the finishing touches, we're adding people gradually to make sure
          nothing breaks
        </p>
        <div>
          <Button text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
