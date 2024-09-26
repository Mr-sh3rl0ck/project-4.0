import prototype from 'prop-types';

const BtnVerMasX = ({
  buttonText,
  backgroundColor = "#D6BD98",
  textColor = "white",
  width = "auto",
  height = "auto",
  padding = "py-2 px-4",
  margin = "mb-0",
  borderWidth = "20px",
  borderColor = "black",
  borderRadius = "rounded-3xl",
  onClick,
  className = ""
}) => {
  return (
    <button
      className={`text-${textColor} ${padding} ${margin} ${borderRadius} border-${borderWidth} border-${borderColor} hover:bg-blue-600 ${className} sm:w sm:w-auto`} 
      style={{ backgroundColor, minWidth: width, minHeight: height }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

// sirve para darle estilos

BtnVerMasX.propTypes = {
  buttonText: prototype.string,
  backgroundColor: prototype.string,
  textColor: prototype.string,
  width: prototype.string,
  height: prototype.string,
  padding: prototype.string,
  margin: prototype.string,
  borderWidth: prototype.string,
  borderColor: prototype.string,
  borderRadius: prototype.string,
  onClick: prototype.func,
  className: prototype.string
};

export default BtnVerMasX;
