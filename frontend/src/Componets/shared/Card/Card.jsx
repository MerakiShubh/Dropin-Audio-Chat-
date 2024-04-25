import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingwrapper}>
        <img src={`/images/${icon}.png`} alt="logo" />
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Card;
