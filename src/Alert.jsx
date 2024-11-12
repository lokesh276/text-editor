import { useState } from "react";
import PropTypes from "prop-types";

 function Alert({text}) {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };


   const capitalize = (word) => {
     const text = word.toLowerCase()
     return text.charAt(0).toUpperCase() + word.slice(1)
   }
  return (
    visible &&
    text && (
      <div
        id="alert-border-1"
        className={`flex alert alert-${alert.type} items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800`}
        role="alert"
      >
        <div className="ms-3 text-sm font-medium">
          {capitalize(text.message)} <span>{text.type}</span>
        </div>
        <button
          onClick={handleDismiss}
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          data-dismiss-target="#alert-border-1"
          aria-label="Close"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    )
  );
}
export default Alert;

Alert.propTypes = {
  text: PropTypes.object,
};
