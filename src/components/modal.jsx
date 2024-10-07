

import PropTypes from "prop-types";


const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button 
          className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired,  
  description: PropTypes.string.isRequired, 
};

export default Modal;
