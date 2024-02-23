import React from "react";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>This is Username component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUsername;
