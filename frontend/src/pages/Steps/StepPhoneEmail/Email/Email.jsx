import React, { useState } from "react";
import { Button, Card } from "../../../../Componets";
import TextInput from "../../../../Componets/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
const Email = () => {
  const [email, setEmail] = useState();
  return (
    <Card title="Enter your email id" icon="email-emoji">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you're agreeing to out Term of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Email;
