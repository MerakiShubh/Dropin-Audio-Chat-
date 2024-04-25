import { useState } from "react";
import { Button, Card } from "../../../../Componets";
import TextInput from "../../../../Componets/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
import PropTypes from "prop-types";
const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you&aproc;re agreeing to out Term of Service
          and Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};
Phone.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Phone;
