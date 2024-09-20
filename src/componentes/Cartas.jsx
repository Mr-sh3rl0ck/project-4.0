import React from "react";
import BtnVerMasX from "./BtnVerMasX";

export function Cartas({ title, description, marginLeft = "", marginRight = "" }) {
  return (
    <div 
      className={`shadow-md ${marginLeft} ${marginRight} rounded-2xl bg-[#677D6A] 
                  w-full h-auto sm:w-[400px] md:w-[450px] lg:w-[500px] 
                  sm:h-[350px] md:h-[400px] lg:h-[450px]`}
    >
      <div className={`p-6`}>
        <div>
          <BtnVerMasX
            buttonText="Ver Más"
            backgroundColor="#D6BD98"
            textColor="white"
            width="120px"
            height="40px"
            margin="mt-2 mb-6"
            onClick={() => alert('Primary Button Clicked')}
          />
        </div>

        <h1 className="text-xl font-bold text-white mb-2">
          {title}
        </h1>
        <p className="text-gray-200">
          {description}
        </p>

      </div>
    </div>
  );
}

export default Cartas;