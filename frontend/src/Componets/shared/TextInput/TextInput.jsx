import PropTypes from "prop-types";
import styles from "./TextInput.module.css";
const TextInput = ({ props }) => {
  return (
    <div>
      <input className={styles.input} type="text" {...props} />
    </div>
  );
};

TextInput.propTypes = {
  props: PropTypes.any,
};

export default TextInput;
