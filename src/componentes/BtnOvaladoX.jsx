import React from 'react';

// Componente Button
const Button = ({
  buttonText,
  backgroundColor = "#D6BD98",
  textColor = "white",
  width = "auto",
  height = "auto",
  padding = "py-2 px-4",
  margin = "mb-4",
  onClick,
  className = ""
}) => {
  return (
    <button
      className={`text-${textColor} ${padding} ${margin} rounded-3xl hover:bg-blue-600 ${className} 
                  sm:w sm:w-auto`} // Responsivo: w-full en pantallas pequeñas
      style={{ backgroundColor, minWidth: width, minHeight: height }} // Opcional: si se necesita un tamaño mínimo
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
