import PropTypes from 'prop-types'; 


const Card = ({ image, title, description,onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg text-center border border-gray-200 overflow-hidden">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h2 className="text-2xl mt-4 font-semibold">{title}</h2>
      <p className="text-base mt-2 text-gray-600">{description}</p>
      <button onClick={onClick} className="bg-blue-400 text-white font-semibold py-2 px-8 mb-4 mt-4 rounded hover:bg-blue-600 transition">
        Visit
      </button>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,     
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired,    
};

export default Card;
