import React, { useState } from "react";
import styles from "./StepOtp.module.css";
import { Button, Card } from "../../../Componets";
import TextInput from "../../../Componets/shared/TextInput/TextInput";

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

export default StepOtp;
