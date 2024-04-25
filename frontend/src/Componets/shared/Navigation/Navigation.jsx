import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontweight: "bold",
    fontSize: "22px",
    display: "flex",
    alignitems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandStyle}>
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Dropin</span>
      </Link>
    </nav>
  );
};

export default Navigation;
