import PropTypes from "prop-types";
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-[black] text-white rounded-full mt-2  "
    >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
