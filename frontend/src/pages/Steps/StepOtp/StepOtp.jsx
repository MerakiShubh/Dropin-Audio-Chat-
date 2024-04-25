import styles from "./StepOtp.module.css";
import { useState } from "react";
import { Button, Card } from "../../../Componets";
import TextInput from "../../../Componets/shared/TextInput/TextInput";
import PropTypes from "prop-types";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState();
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={onNext} />
          </div>
          <p className={styles.bottomParagraph}></p>
        </Card>
      </div>
    </>
  );
};

StepOtp.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default StepOtp;
