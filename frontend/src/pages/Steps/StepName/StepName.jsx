import PropTypes from "prop-types";
const StepName = ({ onNext }) => {
  return (
    <>
      <div>This is name component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

StepName.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default StepName;
