import React, { useState } from "react";
import styles from "./Login.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState();
  const Steps = steps[step];
  function onNext() {
    setStep(step + 1);
  }

  return (
    <>
      <Step onNext={onNext} />
      <div>This is login components</div>
    </>
  );
};

export default Login;
