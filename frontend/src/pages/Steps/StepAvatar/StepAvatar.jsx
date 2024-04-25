import PropTypes from "prop-types";
const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>This is Avatar component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

StepAvatar.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default StepAvatar;
