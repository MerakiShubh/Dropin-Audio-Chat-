import React from "react";

const StepName = ({ onNext }) => {
  return (
    <>
      <div>This is name component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepName;
