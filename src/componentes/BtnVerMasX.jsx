import React from 'react';

const Button = ({
  buttonText,
  backgroundColor = "#D6BD98",
  textColor = "white",
  width = "auto",
  height = "auto",
  padding = "py-2 px-4",
  margin = "mb-4",
  borderWidth = "20px", // Grosor del borde
  borderColor = "black", // Color del borde
  borderRadius = "rounded-3xl", // Radio del borde
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

export default Button;
