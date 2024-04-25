import { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};
const Authentication = () => {
  const [step, setStep] = useState(1);
  const Steps = steps[step];
  function onNext() {
    setStep(step + 1);
  }

  return (
    <>
      <Steps onNext={onNext} />
      {/* <div>This is login components</div> */}
    </>
  );
};

export default Authentication;
