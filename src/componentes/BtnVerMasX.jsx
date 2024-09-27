import PropTypes from 'prop-types';  

const BtnVerMasX = ({
  buttonText,
  backgroundColor = "#D6BD98",
  textColor = "white",
  width = "auto",
  height = "auto",
  padding = "py-2 px-4",
  margin = "mb-0",
  borderWidth = "0", 
  borderColor = "0",  
  borderRadius = "rounded-3xl",
  onClick,
  className = ""
}) => {
  return (
    <button className={`text-${textColor} ${padding} ${margin} ${borderRadius} border ${className} sm:w sm:w-auto`}style={{ backgroundColor, minWidth: width, minHeight: height, borderWidth, borderColor }} onClick={onClick}>
      {buttonText}
    </button>
  );
};


BtnVerMasX.propTypes = {
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default BtnVerMasX;
