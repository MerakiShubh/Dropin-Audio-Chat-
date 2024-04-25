import PropTypes from "prop-types";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img
        className={styles.arrow}
        src="/images/arrow-forward.png"
        alt="arrow"
      />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.node,
  onClick: PropTypes.node,
};

export default Button;
